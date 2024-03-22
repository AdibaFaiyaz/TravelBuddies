import React from 'react'

function Rate() {
  return (
    <body class="bg-gray-100">
  <div class="max-w-md mx-auto py-8 px-4">
    <h1 class="text-3xl font-semibold text-center mb-8">Rate Your Carpooling Experience</h1>
    
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <form action="#" method="POST">
        <div class="mb-4">
          <label for="driver" class="block text-sm font-medium text-gray-700 mb-1">Driver:</label>
          
          <select id="driver" name="driver" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option value="5">Excellent</option>
            <option value="4">Very Good</option>
            <option value="3">Good</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="vehicle" class="block text-sm font-medium text-gray-700 mb-1">Vehicle:</label>
          
          <select id="vehicle" name="vehicle" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option value="5">Excellent</option>
            <option value="4">Very Good</option>
            <option value="3">Good</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="punctuality" class="block text-sm font-medium text-gray-700 mb-1">Punctuality:</label>
          
          <select id="punctuality" name="punctuality" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option value="5">Excellent</option>
            <option value="4">Very Good</option>
            <option value="3">Good</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="comfort" class="block text-sm font-medium text-gray-700 mb-1">Comfort:</label>
          
          <select id="comfort" name="comfort" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option value="5">Excellent</option>
            <option value="4">Very Good</option>
            <option value="3">Good</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="communication" class="block text-sm font-medium text-gray-700 mb-1">Communication:</label>
          
          <select id="communication" name="communication" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option value="5">Excellent</option>
            <option value="4">Very Good</option>
            <option value="3">Good</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="experience" class="block text-sm font-medium text-gray-700 mb-1">Overall Experience:</label>
          
          <select id="experience" name="experience" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option value="5">Excellent</option>
            <option value="4">Very Good</option>
            <option value="3">Good</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="comment" class="block text-sm font-medium text-gray-700 mb-1">Comments (optional):</label>
          
          <textarea id="comment" name="comment" rows="4" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        
        <div class="text-center">
          <button type="submit" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out hover:bg-indigo-700">Submit Rating</button>
        </div>
      </form>
    </div>
  </div>
</body>
  )
}

export default Rate
