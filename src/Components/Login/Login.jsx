import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <body class="bg-gray-100">
  <div class="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
       
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <input id="email" name="email" type="email" autocomplete="email" required class="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
        </div>
        <div class="flex items-center justify-between">
          
          <div class="flex items-center">
            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>
         
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>
       
        <div>
          <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
        </div>
      </form>
      
      <div class="text-center mt-4">
        <p class="text-sm">Don't have an account? <Link to="/Signup"> <span  class="font-medium text-indigo-600 hover:text-indigo-500">Sign up</span></Link></p>
      </div>
    </div>
  </div>
</body>
</>
  )
}
