import React from 'react'

function Rate() {
  return (
    <>
      <div className="min-h-screen bg-gradient-soft">
        <div className="max-w-2xl mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-purple-yellow bg-clip-text text-transparent">
              Rate Your Experience
            </h1>
            <p className="text-xl text-purple-600">
              Help us improve by sharing your carpooling experience
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
            <form className="space-y-6">
              {/* Trip Information */}
              <div className="bg-gradient-to-r from-purple-50 to-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-4">Trip Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-600">
                  <div><span className="font-medium">From:</span> San Francisco, CA</div>
                  <div><span className="font-medium">To:</span> Los Angeles, CA</div>
                  <div><span className="font-medium">Date:</span> June 15, 2025</div>
                  <div><span className="font-medium">Driver:</span> John Doe</div>
                </div>
              </div>

              {/* Rating Categories */}
              <div className="space-y-6">
                {[
                  { id: 'driver', label: 'Driver Behavior', icon: '👤' },
                  { id: 'vehicle', label: 'Vehicle Condition', icon: '🚗' },
                  { id: 'punctuality', label: 'Punctuality', icon: '⏰' },
                  { id: 'comfort', label: 'Comfort Level', icon: '😌' },
                  { id: 'communication', label: 'Communication', icon: '💬' },
                  { id: 'experience', label: 'Overall Experience', icon: '⭐' }
                ].map((category) => (
                  <div key={category.id} className="space-y-3">
                    <label className="flex items-center text-lg font-medium text-purple-700">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      {category.label}
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button 
                          key={star}
                          type="button"
                          className="w-12 h-12 rounded-full border-2 border-purple-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 flex items-center justify-center group"
                        >
                          <svg className="w-6 h-6 text-purple-300 group-hover:text-yellow-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                    <div className="text-sm text-purple-500 flex justify-between">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comments Section */}
              <div className="space-y-3">
                <label htmlFor="comment" className="block text-lg font-medium text-purple-700">
                  Additional Comments
                </label>
                <textarea 
                  id="comment" 
                  name="comment" 
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-gradient-to-r from-purple-50 to-yellow-50"
                  placeholder="Share any additional feedback about your experience..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full py-4 px-6 bg-gradient-purple-yellow text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Submit Rating
                </button>
              </div>

              {/* Thank You Message */}
              <div className="text-center mt-6">
                <p className="text-purple-600">
                  Thank you for helping us create a better carpooling community! 🙏
                </p>
              </div>
            </form>
          </div>

          {/* Recent Reviews */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl border border-purple-100 p-8">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-purple-yellow bg-clip-text text-transparent">
              Recent Community Reviews
            </h3>
            <div className="space-y-6">
              {[
                { name: 'Sarah M.', rating: 5, comment: 'Amazing experience! John was punctual and the car was very clean.', date: '2 days ago' },
                { name: 'Mike R.', rating: 4, comment: 'Great ride, good conversation, and safe driving. Highly recommend!', date: '1 week ago' },
                { name: 'Emma L.', rating: 5, comment: 'Perfect carpooling experience. Will definitely ride with them again.', date: '2 weeks ago' }
              ].map((review, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-yellow-50 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="bg-gradient-purple-yellow w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-purple-800">{review.name}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-purple-500">{review.date}</span>
                  </div>
                  <p className="text-purple-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>      </div>
    </>
  )
}

export default Rate
