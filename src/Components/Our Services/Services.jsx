import React from 'react';

const Services = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Smart Matching',
      description: 'Our algorithm matches you with riders or drivers on your exact route and schedule.',
      details: ['Real-time route optimization', 'Schedule compatibility', 'Preference matching', 'Distance-based suggestions']
    },
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'Comprehensive safety features to ensure secure and trustworthy carpooling experience.',
      details: ['Identity verification', 'Background checks', 'Real-time GPS tracking', 'Emergency contacts']
    },
    {
      icon: '💬',
      title: 'Easy Communication',
      description: 'Built-in messaging system to coordinate pickups and build trust with your ride partners.',
      details: ['In-app messaging', 'Automatic notifications', 'Pickup confirmations', 'Real-time updates']
    },
    {
      icon: '💳',
      title: 'Secure Payments',
      description: 'Cashless transactions with automatic fare splitting and secure payment processing.',
      details: ['Automatic payments', 'Fare splitting', 'Payment protection', 'Trip receipts']
    },
    {
      icon: '⭐',
      title: 'Rating System',
      description: 'Mutual rating system helps maintain high quality and trustworthy community standards.',
      details: ['Driver & passenger ratings', 'Detailed feedback', 'Community standards', 'Quality assurance']
    },
    {
      icon: '🌱',
      title: 'Environmental Impact',
      description: 'Track your positive environmental impact and contribution to reducing traffic congestion.',
      details: ['Carbon footprint tracking', 'Emissions saved', 'Impact statistics', 'Green rewards']
    }
  ];

  const steps = [
    {
      step: '1',
      title: 'Create Your Profile',
      description: 'Sign up and complete your profile with verification for a trusted community.',
      icon: '👤'
    },
    {
      step: '2',
      title: 'Find or Offer Rides',
      description: 'Search for rides on your route or offer seats in your car to fellow commuters.',
      icon: '🚗'
    },
    {
      step: '3',
      title: 'Connect & Coordinate',
      description: 'Message your ride partners to coordinate pickup details and build rapport.',
      icon: '💬'
    },
    {
      step: '4',
      title: 'Enjoy the Ride',
      description: 'Share your commute, save money, and arrive at your destination stress-free.',
      icon: '✨'
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Save Up to 60% on Commuting Costs',
      description: 'Split fuel, parking, and toll costs with fellow passengers.',
      stats: 'Average savings: $200/month'
    },
    {
      icon: '⏰',
      title: 'Reliable & Punctual',
      description: 'Never worry about being late with verified, dependable ride partners.',
      stats: '95% on-time arrival rate'
    },
    {
      icon: '🌍',
      title: 'Reduce Carbon Footprint',
      description: 'Help reduce traffic congestion and environmental impact.',
      stats: '2.3 tons CO₂ saved per user/year'
    },
    {
      icon: '🤝',
      title: 'Build Professional Network',
      description: 'Connect with colleagues and professionals in your area.',
      stats: '80% users report new connections'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            How RideShare Works
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover how our smart carpooling platform connects commuters, 
            reduces costs, and creates a more sustainable way to travel.
          </p>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Simple 4-Step Process</h2>
            <p className="text-lg text-neutral-600">Get started with carpooling in minutes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-success-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Platform Features</h2>
            <p className="text-lg text-neutral-600">Everything you need for safe, convenient carpooling</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-500">
                      <span className="text-success-500 mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Why Choose Carpooling?</h2>
            <p className="text-lg text-neutral-600">Real benefits for you and the environment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-accent rounded-xl">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{benefit.title}</h3>
                  <p className="text-neutral-600 mb-2">{benefit.description}</p>
                  <p className="text-sm font-medium text-primary-600">{benefit.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Safety & Trust</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Your safety is our top priority. We've implemented comprehensive measures 
                to ensure every ride is secure and trustworthy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Identity verification for all users</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Real-time GPS tracking during rides</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">24/7 customer support and emergency assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Community rating and feedback system</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4">100% Verified Community</h3>
                <p className="text-lg">All users undergo verification to maintain a safe, trusted network of commuters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Carpooling?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of commuters who are already saving money and reducing their environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Sign Up for Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
