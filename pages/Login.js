import React,{useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cookie from "cookie"


const Login = () => {
  const router=useRouter()
 const [Email,setEmail]=useState("")
 const [Password,setPassword]=useState("")
 const userLogin=async(e)=>{
  e.preventDefault()
  const res=await fetch('http://localhost:3000/api/Login',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      Email,
      Password
    })
  })
const res1=await res.json()
console.log(res1)
if(res1.error){
  console.log("error")
}else{
  // cookie.set(res1.token)
  console.log(res1,"login Sucess")
  
router.push('/Home')
}
 }

 
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
      <h1 className="text-3xl font-semibold text-center text-purple-700">Login Page</h1>
      <form className="mt-6" onSubmit={(e)=>userLogin(e)}>
        <div>
          <label for="email" className="block text-sm text-gray-800">Email</label>
          <input type="email"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder='Email'
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div>
          <label for="password" className="block text-sm text-gray-800">Password</label>
          <input type="password"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder='Password'
              value={Password}
              onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        

          <div className="mt-6">
            <button type='Submit'
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
      </form>
      <p className="mt-8 text-lg font-bold text-center text-gray-700"> Don't have an account? <Link href='/SignUp'><a
          className="font-medium text-purple-600 hover:underline">Sign up</a></Link></p>
    </div>
    
  </div>
  )
}

export default Login