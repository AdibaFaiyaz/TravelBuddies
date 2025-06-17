import React, { useState } from 'react';

const Search = () => {
  const [searchType, setSearchType] = useState('find'); // 'find' or 'offer'
  const [searchForm, setSearchForm] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: '1'
  });

  const handleInputChange = (e) => {
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value
    });
  };

  // Mock data for available rides
  const availableRides = [
    {
      id: 1,
      driver: 'Sarah Johnson',
      rating: 4.9,
      from: 'Downtown Seattle',
      to: 'Microsoft Campus',
      date: '2025-06-18',
      time: '08:00 AM',
      price: '$8',
      seats: 3,
      carModel: 'Toyota Camry',
      duration: '25 min',
      verified: true
    },
    {
      id: 2,
      driver: 'Michael Chen',
      rating: 4.8,
      from: 'Capitol Hill',
      to: 'Amazon HQ',
      date: '2025-06-18',
      time: '08:15 AM',
      price: '$10',
      seats: 2,
      carModel: 'Honda Accord',
      duration: '22 min',
      verified: true
    },
    {
      id: 3,
      driver: 'Emily Davis',
      rating: 4.7,
      from: 'Fremont',
      to: 'University District',
      date: '2025-06-18',
      time: '07:45 AM',
      price: '$6',
      seats: 4,
      carModel: 'Subaru Outback',
      duration: '18 min',
      verified: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Toggle Between Find and Offer */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSearchType('find')}
                className={`py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  searchType === 'find'
                    ? 'bg-gradient-primary text-white shadow-md'
                    : 'text-neutral-600 hover:text-primary-600'
                }`}
              >
                🔍 Find a Ride
              </button>
              <button
                onClick={() => setSearchType('offer')}
                className={`py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  searchType === 'offer'
                    ? 'bg-gradient-primary text-white shadow-md'
                    : 'text-neutral-600 hover:text-primary-600'
                }`}
              >
                🚗 Offer a Ride
              </button>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              {searchType === 'find' ? 'Find Your Perfect Ride' : 'Offer Seats in Your Car'}
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">From</label>
                  <input
                    type="text"
                    name="from"
                    value={searchForm.from}
                    onChange={handleInputChange}
                    placeholder="Enter pickup location"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">To</label>
                  <input
                    type="text"
                    name="to"
                    value={searchForm.to}
                    onChange={handleInputChange}
                    placeholder="Enter destination"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={searchForm.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={searchForm.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">
                    {searchType === 'find' ? 'Passengers' : 'Available Seats'}
                  </label>
                  <select
                    name="seats"
                    value={searchForm.seats}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-primary text-white py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {searchType === 'find' ? '🔍 Search Available Rides' : '📍 Publish Your Ride'}
              </button>
            </form>
          </div>
        </div>

        {/* Available Rides Results (only show for 'find' mode) */}
        {searchType === 'find' && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Available Rides</h3>
            <div className="space-y-4">
              {availableRides.map((ride) => (
                <div key={ride.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                        {ride.driver.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-neutral-900">{ride.driver}</h4>
                          {ride.verified && <span className="text-success-500 text-sm">✓ Verified</span>}
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm text-neutral-600">{ride.rating}</span>
                          <span className="text-neutral-400">•</span>
                          <span className="text-sm text-neutral-600">{ride.carModel}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">{ride.price}</div>
                      <div className="text-sm text-neutral-500">per person</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-neutral-500">Route</div>
                      <div className="font-medium text-neutral-900">{ride.from} → {ride.to}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500">Departure</div>
                      <div className="font-medium text-neutral-900">{ride.time} • {ride.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500">Available Seats</div>
                      <div className="font-medium text-neutral-900">{ride.seats} seats left</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <button className="flex-1 bg-gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                      Request Ride
                    </button>
                    <button className="px-6 py-3 border-2 border-neutral-200 text-neutral-600 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-600 transition-all duration-200">
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              {searchType === 'find' ? '💡 Tips for Finding Rides' : '💡 Tips for Offering Rides'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchType === 'find' ? (
                <>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-neutral-800">Be Flexible</h4>
                    <p className="text-neutral-600 text-sm">Consider adjusting your departure time by 15-30 minutes to find more options.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-neutral-800">Book Early</h4>
                    <p className="text-neutral-600 text-sm">Popular routes fill up quickly. Book your ride as soon as you know your schedule.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-neutral-800">Check Profiles</h4>
                    <p className="text-neutral-600 text-sm">Review driver ratings and profiles before requesting a ride.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-neutral-800">Be Punctual</h4>
                    <p className="text-neutral-600 text-sm">Arrive on time at the pickup location to respect everyone's schedule.</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-neutral-800">Set Fair Prices</h4>
                    <p className="text-neutral-600 text-sm">Price your ride fairly to cover fuel and wear costs while staying competitive.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-neutral-800">Regular Schedule</h4>
                    <p className="text-neutral-600 text-sm">Offer rides on a regular schedule to build a reliable passenger base.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-neutral-800">Vehicle Details</h4>
                    <p className="text-neutral-600 text-sm">Include your car model and color to help passengers identify your vehicle.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-neutral-800">Communication</h4>
                    <p className="text-neutral-600 text-sm">Keep passengers informed about any changes to pickup time or location.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
