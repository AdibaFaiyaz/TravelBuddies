import React from 'react'

function Hero() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-800">TravelBuddies</h1>
        </div>
      </header>
      <section className="text-vlack py-16">
        <div className="container mx-auto px-4 flex flex-row">
          <div>
            <h2 className="text-4xl font-bold mb-4">Share a ride, share the cost!</h2>
            <p className="text-lg mb-8">Join our community of carpoolers and save money while helping the environment.</p>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="https://img.freepik.com/free-vector/classic-orange-car-vector-illustration_1308-164330.jpg?t=st=1710438653~exp=1710442253~hmac=48c83f12ef12d646fc32b6e62165ee3e11c192ef44cf165eb17e9aaffd6da7e2&w=1060" alt="Car" className="w-3/4 h-auto object-cover rounded-lg shadow-lg justify-end flex" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How it Works</h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M1 4a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1zM3 8a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2H3zm-1 5a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm15-4a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p className="text-gray-700">Create an account with us for free.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 0 1 1 1v1.586l1.707-1.707a1 1 0 1 1 1.414 1.414L11.414 6l1.707 1.707a1 1 0 1 1-1.414 1.414L10 8.414l-1.707 1.707a1 1 0 1 1-1.414-1.414L8.586 7 6.879 5.293A1 1 0 0 1 8.293 3.88L10 5.586V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M4 10a1 1 0 0 1 1-1h1.586l-1.707-1.707a1 1 0 1 1 1.414-1.414L6 8.586l1.707-1.707a1 1 0 1 1 1.414 1.414L7.414 10l1.707 1.707a1 1 0 1 1-1.414 1.414L7 11.414V13a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M14 10a1 1 0 0 1-1 1h-1.586l1.707 1.707a1 1 0 1 1-1.414 1.414L14 13.414l-1.707 1.707a1 1 0 1 1-1.414-1.414L12.586 11l-1.707-1.707a1 1 0 1 1 1.414-1.414L13 9.586V8a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M16 15a1 1 0 0 1-1 1h-1.586l1.707 1.707a1 1 0 1 1-1.414 1.414L16 18.414l-1.707 1.707a1 1 0 1 1-1.414-1.414L14.586 16l-1.707-1.707a1 1 0 1 1 1.414-1.414L15 14.586V13a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Search</h3>
                <p className="text-gray-700">Find available rides or offer your own.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13 2a1 1 0 0 1 1 1v1.586l1.707-1.707a1 1 0 1 1 1.414 1.414L14.414 6l1.707 1.707a1 1 0 1 1-1.414 1.414L13 7.414V9a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M7 10a1 1 0 0 1 1-1h1.586l-1.707-1.707a1 1 0 1 1 1.414-1.414L10 8.586l1.707-1.707a1 1 0 1 1 1.414 1.414L11.414 9l1.707 1.707a1 1 0 1 1-1.414 1.414L10 10.414V12a1 1 0 0 1-2 0V9z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 14a1 1 0 0 1 0-2h1.586l-1.707-1.707a1 1 0 1 1 1.414-1.414L4 11.586l1.707-1.707a1 1 0 1 1 1.414 1.414L5.414 13l1.707 1.707a1 1 0 1 1-1.414 1.414L3 14.414V16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Ride</h3>
                <p className="text-gray-700">Enjoy your journey with fellow travelers.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 0 1 1 1v1.586l1.707-1.707a1 1 0 1 1 1.414 1.414L11.414 6l1.707 1.707a1 1 0 1 1-1.414 1.414L10 7.414V9a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M7 10a1 1 0 0 1 1-1h1.586l-1.707-1.707a1 1 0 1 1 1.414-1.414L10 8.586l1.707-1.707a1 1 0 1 1 1.414 1.414L11.414 9l1.707 1.707a1 1 0 1 1-1.414 1.414L10 10.414V12a1 1 0 0 1-2 0V9z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 14a1 1 0 0 1 0-2h1.586l-1.707-1.707a1 1 0 1 1 1.414-1.414L4 11.586l1.707-1.707a1 1 0 1 1 1.414 1.414L5.414 13l1.707 1.707a1 1 0 1 1-1.414 1.414L3 14.414V16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Rate</h3>
                <p className="text-gray-700">Rate your travel companions and leave feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
