import React,{useState} from 'react' 
import Link from 'next/link'
import { useRouter } from 'next/router'
const Signup=()=>{
    const router=useRouter()
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('' )
    const [Phone,setPhone]=useState('')
const [Password,setPassword]=useState('')
 

const userSignUp=async(e)=>{
    e.preventDefault()
    const res=await fetch('http://localhost:3000/api/SignUp',{
        method:'POST', 
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            Name,Email,Phone,Password
        })
    })
    const res2=await res.json()
    if(res2.error){
        console.log('error')
    }else{
        console.log('signup sucess')
        router.push('/Login')
    }
}
    return(
    //   <!-- component -->
<div className="flex flex-col min-h-screen bg-grey-lighter">
            <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={(e)=>userSignUp(e)} >
                    <input 
                        type="text"
                        className="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="fullname"
                        placeholder=" Name"
                        value={Name}
                        onChange={(e)=>setName(e.target.value)}
                         />

                    <input 
                        type="text"
                        className="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="email"
                        placeholder="Email" 
                        value={Email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                      
                       <input 
                        type= "text"
                        className="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="Number"
                        placeholder="Phone"
                    value={Phone}
                    onChange={(e)=>setPhone(e.target.value)}
/>

                    <input 
                        type="password"
                        className="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="password"
                        placeholder="Password"
                        value={Password} 
                            onChange={(e)=>setPassword(e.target.value)}

                        />
                   
            
                    <button
                        type="submit"
                        className="w-full py-3 my-1 text-center text-black border-2 rounded bg-green hover:bg-blue-600 focus:outline-none"
                    >Signup</button>          
                </form>

                    <div className="mt-4 text-sm text-center text-grey-dark">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="mt-6 text-grey-dark">
                    Already have an account? 
              <Link href="/Login"><a className="no-underline border-b border-blue text-blue" >
                        Login
                    </a></Link> 
                     
                </div>
            </div>
        </div>
    )
}

export default Signup