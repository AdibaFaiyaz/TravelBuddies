import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Save Money',
      description: 'Split fuel costs and save up to 60% on commuting expenses'
    },
    {
      icon: '🌱',
      title: 'Reduce Emissions',
      description: 'Help reduce traffic and carbon footprint together'
    },
    {
      icon: '⏰',
      title: 'Never Be Late',
      description: 'Reliable rides with verified community members'
    },
    {
      icon: '🤝',
      title: 'Meet People',
      description: 'Connect with colleagues and neighbors on your route'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '2M+', label: 'Rides Shared' },
    { number: '80%', label: 'Cost Savings' },
    { number: '4.9★', label: 'User Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Smart Carpooling for
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Modern Commuters
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join thousands of commuters who save money, reduce stress, and never worry about being late. 
              Find reliable ride partners on your route today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/search"
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🔍 Find a Ride
              </Link>
              <Link
                to="/search"
                className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-all duration-300"
              >
                🚗 Offer a Ride
              </Link>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">From</label>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">To</label>
                <input
                  type="text"
                  placeholder="Enter destination"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Search Rides
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Why Choose RideShare?</h2>
            <p className="text-lg text-neutral-600">Experience the benefits of smart carpooling</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">How It Works</h2>
            <p className="text-lg text-neutral-600">Get started in just 3 simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Sign Up</h3>
              <p className="text-neutral-600">Create your profile and verify your identity for a safe community</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Find Matches</h3>
              <p className="text-neutral-600">Search for rides on your route or offer seats in your car</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Ride Together</h3>
              <p className="text-neutral-600">Connect, coordinate, and enjoy your stress-free commute</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Commute?</h2>
          <p className="text-xl text-white/90 mb-8">Join our community and start saving money while helping the environment</p>
          <Link
            to="/signup"
            className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
