import React from 'react'

function Contact() {
  return (
    <>
    <body class="bg-gray-100">
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-semibold text-center mb-8">Contact Us</h1>
    <div class="bg-white rounded-lg shadow-lg p-6">
      <form action="#" method="POST">
        
        <div class="mb-8">
          <label for="name" class="block text-sm font-medium text-gray-700">Your Name:</label>
          <input type="text" id="name" name="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
        
        <div class="mb-8">
          <label for="email" class="block text-sm font-medium text-gray-700">Your Email:</label>
          <input type="email" id="email" name="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
        
        <div class="mb-8">
          <label for="message" class="block text-sm font-medium text-gray-700">Message:</label>
          <textarea id="message" name="message" rows="4" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
        </div>
        
        <div class="text-center">
          <button type="submit" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-indigo-700">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</body>
</>
  )
}

export default Contact
