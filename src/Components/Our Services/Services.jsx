import React from 'react'

function Services() {
  return (
    <>
    <header class="bg-purple-600 text-white py-4">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl font-bold">Travel Buddies</h1>
    </div>
  </header>

  
  <main class="container mx-auto py-8 px-4">
    <h2 class="text-3xl font-bold mb-4">Our Carpooling Services</h2>

    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://media.istockphoto.com/id/1394307503/photo/a-coffee-break-on-avenida-paulista.jpg?s=612x612&w=0&k=20&c=b1fRde7euHMkxgWQGY55-_jiPPDEmGHkvPOO1nGRM48=" alt="Carpooling Service 1" class="w-full h-56 object-cover object-center"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Daily Commute</h3>
          <p class="text-gray-700">Find and share rides for your daily work commute.</p>
        </div>
      </div>

     
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://media.istockphoto.com/id/1459004747/photo/a-road-that-stretches-far-ahead.jpg?s=612x612&w=0&k=20&c=sjbEsVAj8z02AGRRtNT7nHkdhfKYaTs1M_SN25NGO9g=" alt="Carpooling Service 2" class="w-full h-56 object-cover object-center"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Long Distance Travel</h3>
          <p class="text-gray-700">Share rides for long-distance trips with fellow travelers.</p>
        </div>
      </div>

     
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://i0.wp.com/blog.10times.com/wp-content/uploads/2023/06/event-transportation-chicago.webp?fit=612%2C408&ssl=1" alt="Carpooling Service 3" class="w-full h-56 object-cover object-center"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Event Transportation</h3>
          <p class="text-gray-700">Carpool to events, concerts, or sports games with ease.</p>
        </div>
      </div>
    </div>
  </main>
  </>
  )
}

export default Services
