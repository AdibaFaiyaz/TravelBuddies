import React from 'react'

function Vehicles() {
  return (
    <>
    <header class="bg-purple-600 text-white py-4">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl font-bold">Travel Buddies</h1>
    </div>
  </header>

  
  <main class="container mx-auto py-8 px-4">
    <h2 class="text-3xl font-bold mb-4">Our Vehicles</h2>

   
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="car1.jpg" alt="Car 1" class="w-full h-56 object-cover object-center"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Toyota Prius</h3>
          <p class="text-gray-700">Fuel-efficient hybrid car, perfect for city commuting.</p>
        </div>
      </div>

      
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="car2.jpg" alt="Car 2" class="w-full h-56 object-cover object-center"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Honda Civic</h3>
          <p class="text-gray-700">Compact sedan with a smooth ride, ideal for long trips.</p>
        </div>
      </div>

    
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="car3.jpg" alt="Car 3" class="w-full h-56 object-cover object-center"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Chevrolet Suburban</h3>
          <p class="text-gray-700">Spacious SUV with ample seating and cargo space.</p>
        </div>
      </div>
    </div>
  </main>
  </>

  )
}

export default Vehicles
