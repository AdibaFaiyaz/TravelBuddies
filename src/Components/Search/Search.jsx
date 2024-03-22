import React from 'react'

function Search() {
  return (
    <>
    <body class="bg-gray-100">
  <div class="max-w-4xl mx-auto py-8 px-4">
    <h1 class="text-3xl font-semibold text-center mb-8">TravelBuddies - Find Rides or Offer Your Own</h1>
    
    <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 class="text-xl font-semibold mb-4">Search for Rides</h2>
      <form action="#" method="GET">
        <div class="flex items-center mb-4">
          <label for="from" class="mr-2">From:</label>
          <input type="text" id="from" name="from" class="px-4 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Enter starting point"/>
        </div>
        <div class="flex items-center mb-4">
          <label for="to" class="mr-2">To:</label>
          <input type="text" id="to" name="to" class="px-4 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Enter destination"/>
        </div>
        <div class="text-center">
          <button type="submit" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out hover:bg-indigo-700">Search</button>
        </div>
      </form>
    </div>
   
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-xl font-semibold mb-4">Offer Your Own Ride</h2>
      <form action="#" method="POST">
        <div class="flex items-center mb-4">
          <label for="departure" class="mr-2">Departure:</label>
          <input type="datetime-local" id="departure" name="departure" class="px-4 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
        </div>
        <div class="flex items-center mb-4">
          <label for="seats" class="mr-2">Available Seats:</label>
          <input type="number" id="seats" name="seats" class="px-4 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" min="1" max="10"/>
        </div>
        <div class="text-center">
          <button type="submit" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out hover:bg-indigo-700">Offer Ride</button>
        </div>
      </form>
    </div>
  </div>
</body>
</>
  )
}

export default Search
