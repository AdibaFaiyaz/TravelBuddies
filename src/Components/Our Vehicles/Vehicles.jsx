import React from 'react';

const Vehicles = () => {
  const vehicleCategories = [
    {
      id: 1,
      name: "Compact Cars",
      description: "Perfect for city commuting and short distances",
      examples: ["Honda Civic", "Toyota Corolla", "Nissan Sentra"],
      capacity: "2-4 passengers",
      features: ["Fuel efficient", "Easy parking", "Lower costs"],
      icon: "🚗",
      color: "bg-blue-50 border-blue-200",
      idealFor: "Daily commutes, city travel"
    },
    {
      id: 2,
      name: "Sedans",
      description: "Comfortable rides for medium to long distances",
      examples: ["Honda Accord", "Toyota Camry", "Hyundai Sonata"],
      capacity: "3-5 passengers",
      features: ["Comfortable seating", "Spacious interior", "Smooth ride"],
      icon: "🚙",
      color: "bg-green-50 border-green-200",
      idealFor: "Longer commutes, airport trips"
    },
    {
      id: 3,
      name: "SUVs",
      description: "Spacious vehicles perfect for groups and luggage",
      examples: ["Honda CR-V", "Toyota RAV4", "Ford Explorer"],
      capacity: "4-7 passengers",
      features: ["Extra luggage space", "Higher seating", "All-weather capable"],
      icon: "🚐",
      color: "bg-purple-50 border-purple-200",
      idealFor: "Group travel, weekend trips"
    },
    {
      id: 4,
      name: "Electric Vehicles",
      description: "Eco-friendly options for environmentally conscious riders",
      examples: ["Tesla Model 3", "Nissan Leaf", "Chevy Bolt"],
      capacity: "2-5 passengers",
      features: ["Zero emissions", "Quiet ride", "Advanced tech"],
      icon: "⚡",
      color: "bg-emerald-50 border-emerald-200",
      idealFor: "Eco-conscious commuting"
    },
    {
      id: 5,
      name: "Luxury Vehicles",
      description: "Premium comfort for special occasions or business travel",
      examples: ["BMW 3 Series", "Mercedes C-Class", "Audi A4"],
      capacity: "2-4 passengers",
      features: ["Premium interior", "Advanced features", "Professional image"],
      icon: "✨",
      color: "bg-amber-50 border-amber-200",
      idealFor: "Business meetings, special events"
    },
    {
      id: 6,
      name: "Vans & Minivans",
      description: "Large group transportation for events and group trips",
      examples: ["Honda Odyssey", "Toyota Sienna", "Ford Transit"],
      capacity: "6-12 passengers",
      features: ["Maximum capacity", "Flexible seating", "Group-friendly"],
      icon: "🚌",
      color: "bg-indigo-50 border-indigo-200",
      idealFor: "Large groups, events"
    }
  ];

  const safetyFeatures = [
    {
      title: "Vehicle Verification",
      description: "All vehicles undergo safety and insurance verification",
      icon: "🛡️"
    },
    {
      title: "Driver Screening",
      description: "Background checks and driving record verification for all drivers",
      icon: "👤"
    },
    {
      title: "Real-time Tracking",
      description: "GPS tracking during rides for safety and coordination",
      icon: "📍"
    },
    {
      title: "Insurance Coverage",
      description: "Additional insurance protection during rideshare trips",
      icon: "🏥"
    }
  ];

  const tips = [
    {
      category: "For Passengers",
      tips: [
        "Check the vehicle description before booking",
        "Communicate any special needs (luggage, accessibility)",
        "Confirm pickup location and time",
        "Rate your experience to help the community"
      ]
    },
    {
      category: "For Drivers",
      tips: [
        "Keep your vehicle clean and well-maintained",
        "Update your vehicle information if you change cars",
        "Communicate about available features (AC, phone charging)",
        "Be punctual and professional"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Vehicle Network
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Our diverse network of vehicles ensures you can find the perfect ride for any journey. 
            From fuel-efficient compacts to spacious SUVs, our community offers reliable transportation options.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-neutral-600">Active Vehicles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-neutral-600">Vehicle Types</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-neutral-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Vehicle Categories</h2>
            <p className="text-lg text-neutral-600">Choose the right vehicle type for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicleCategories.map((category) => (
              <div key={category.id} className={`rounded-xl border-2 ${category.color} p-6 hover:shadow-lg transition-shadow duration-300`}>
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-neutral-900">{category.name}</h3>
                  <p className="text-neutral-600 text-sm mt-1">{category.description}</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-neutral-700 mb-1">Capacity</div>
                    <div className="text-sm text-neutral-600">{category.capacity}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-neutral-700 mb-1">Popular Models</div>
                    <div className="text-sm text-neutral-600">{category.examples.join(", ")}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-neutral-700 mb-1">Key Features</div>
                    <div className="space-y-1">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-neutral-600">
                          <span className="text-success-500 mr-2 text-xs">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-neutral-700 mb-1">Ideal For</div>
                    <div className="text-sm text-neutral-600">{category.idealFor}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Standards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Safety & Standards</h2>
            <p className="text-lg text-neutral-600">Every vehicle in our network meets strict safety requirements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Vehicle Requirements</h2>
              <p className="text-lg text-neutral-600 mb-6">
                To ensure safety and reliability, all vehicles must meet our quality standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Model year 2010 or newer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Valid registration and insurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Regular maintenance and inspection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Clean interior and exterior</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Working safety features (seatbelts, airbags)</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-6">🚗</div>
              <h3 className="text-2xl font-bold mb-4">Want to Share Your Vehicle?</h3>
              <p className="text-lg mb-6">
                Join our network of drivers and start earning while helping your community commute.
              </p>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Register Your Vehicle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Tips for Success</h2>
            <p className="text-lg text-neutral-600">Making the most of our vehicle network</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tips.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{section.category}</h3>
                <div className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-primary-600 text-sm">💡</span>
                      </div>
                      <span className="text-neutral-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Ride?</h2>
          <p className="text-xl text-white/90 mb-8">
            Browse available vehicles in your area and start carpooling today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Find a Ride
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
              Register Your Vehicle
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vehicles;
