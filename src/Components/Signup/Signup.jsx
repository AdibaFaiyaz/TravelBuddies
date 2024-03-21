import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
 <>
<body class="bg-gray-100 py-10">
  <div class="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
    <h1 class="text-2xl font-semibold mb-4">Carpooling Sign-Up</h1>
    <form>
      <div class="mb-4">
        <label for="full-name" class="block text-sm font-medium text-gray-700">Full Name:</label>
        <input type="text" id="full-name" name="full-name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email Address:</label>
        <input type="email" id="email" name="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number:</label>
        <input type="tel" id="phone" name="phone" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
     
      <div class="mb-4">
        <label for="start-point" class="block text-sm font-medium text-gray-700">Starting Point:</label>
        <input type="text" id="start-point" name="start-point" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
      
      <div class="mb-4">
        <div class="flex items-center">
          <input id="terms" name="terms" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label for="terms" class="ml-2 block text-sm text-gray-900">I agree to the terms and conditions.</label>
        </div>
        <div class="mt-4">
      <p class="text-sm text-gray-600">Already have an account? <Link to="/Login"><span  class="font-medium text-indigo-600 hover:text-indigo-500">Sign In</span></Link></p>
    </div>
      </div>
      <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
    </form>
  </div>
</body>
</>


  )
}

export default Signup
