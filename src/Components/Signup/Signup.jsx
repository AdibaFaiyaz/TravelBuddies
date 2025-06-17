import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'both',
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempt:', formData);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20 py-12">
      <div className="max-w-md w-full mx-auto px-4">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step <= currentStep 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-neutral-200 text-neutral-500'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-primary-500' : 'bg-neutral-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 text-center text-sm text-neutral-600">
            Step {currentStep} of 3
          </div>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚗</span>
            </div>
            <h2 className="text-3xl font-bold text-neutral-900">Join RideShare</h2>
            <p className="text-neutral-600 mt-2">
              {currentStep === 1 && "Let's start with your basic information"}
              {currentStep === 2 && "How do you plan to use RideShare?"}
              {currentStep === 3 && "Almost done! Just a few more details"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </>
            )}

            {/* Step 2: User Type */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-4">
                    How do you plan to use RideShare?
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors">
                      <input
                        type="radio"
                        name="userType"
                        value="passenger"
                        checked={formData.userType === 'passenger'}
                        onChange={handleChange}
                        className="mr-3 text-primary-600"
                      />
                      <div>
                        <div className="font-medium text-neutral-900">🚗 Find Rides</div>
                        <div className="text-sm text-neutral-600">I want to find rides with other people</div>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors">
                      <input
                        type="radio"
                        name="userType"
                        value="driver"
                        checked={formData.userType === 'driver'}
                        onChange={handleChange}
                        className="mr-3 text-primary-600"
                      />
                      <div>
                        <div className="font-medium text-neutral-900">🤝 Offer Rides</div>
                        <div className="text-sm text-neutral-600">I want to share my car and offer rides</div>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors">
                      <input
                        type="radio"
                        name="userType"
                        value="both"
                        checked={formData.userType === 'both'}
                        onChange={handleChange}
                        className="mr-3 text-primary-600"
                      />
                      <div>
                        <div className="font-medium text-neutral-900">🔄 Both</div>
                        <div className="text-sm text-neutral-600">I want to both find and offer rides</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Password and Terms */}
            {currentStep === 3 && (
              <>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Create a strong password"
                  />
                  <p className="text-xs text-neutral-500 mt-1">
                    Password must be at least 8 characters long
                  </p>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                    />
                    <span className="ml-2 text-sm text-neutral-700">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary-600 hover:text-primary-500">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-primary-600 hover:text-primary-500">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToMarketing"
                      checked={formData.agreeToMarketing}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                    />
                    <span className="ml-2 text-sm text-neutral-700">
                      I want to receive updates and promotional emails from RideShare
                    </span>
                  </label>
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 border-2 border-neutral-200 text-neutral-600 py-3 px-6 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-600 transition-all duration-200"
                >
                  Back
                </button>
              )}
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-gradient-primary text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex-1 bg-gradient-primary text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Create Account
                </button>
              )}
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-neutral-600">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-600 hover:text-primary-500 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-8 bg-gradient-accent rounded-xl p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4 text-center">
            Join 50,000+ Happy Commuters
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-1">💰</div>
              <div className="font-medium text-neutral-800">Save $200/month</div>
              <div className="text-neutral-600">on commuting costs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🌱</div>
              <div className="font-medium text-neutral-800">Reduce emissions</div>
              <div className="text-neutral-600">by 60% per trip</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">⏰</div>
              <div className="font-medium text-neutral-800">Never be late</div>
              <div className="text-neutral-600">reliable rides daily</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🤝</div>
              <div className="font-medium text-neutral-800">Meet people</div>
              <div className="text-neutral-600">in your community</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
