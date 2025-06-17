import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Support',
      description: 'Get help with your account or rides',
      contact: 'support@rideshare.com',
      response: 'Response within 24 hours'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      description: 'Speak with our support team',
      contact: '+1 (555) 123-4567',
      response: 'Available 24/7'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Quick answers to your questions',
      contact: 'Available in app',
      response: 'Instant response'
    },
    {
      icon: '🚨',
      title: 'Emergency Line',
      description: 'For urgent safety concerns during rides',
      contact: '+1 (555) 911-RIDE',
      response: 'Immediate assistance'
    }
  ];

  const faqItems = [
    {
      question: 'How do I find a ride?',
      answer: 'Use our search feature to enter your pickup and destination locations, along with your preferred time. We\'ll show you available rides that match your route.'
    },
    {
      question: 'Is carpooling safe?',
      answer: 'Yes! We verify all users\' identities, conduct background checks on drivers, and provide real-time GPS tracking during rides. You can also view ratings and reviews before booking.'
    },
    {
      question: 'How do payments work?',
      answer: 'Payments are handled automatically through the app. The fare is split fairly among passengers and charged to your preferred payment method after the ride is completed.'
    },
    {
      question: 'Can I cancel a ride?',
      answer: 'Yes, you can cancel a ride up to 2 hours before the scheduled departure time without penalty. Last-minute cancellations may incur a small fee.'
    },
    {
      question: 'What if my driver is late?',
      answer: 'You\'ll receive real-time updates about your driver\'s location. If they\'re significantly delayed, our support team will help you find an alternative ride.'
    }
  ];

  const offices = [
    {
      city: 'Seattle, WA',
      address: '123 Tech Street, Suite 100\nSeattle, WA 98101',
      phone: '+1 (206) 555-0100'
    },
    {
      city: 'San Francisco, CA',
      address: '456 Innovation Ave\nSan Francisco, CA 94105',
      phone: '+1 (415) 555-0200'
    },
    {
      city: 'Austin, TX',
      address: '789 Startup Blvd\nAustin, TX 73301',
      phone: '+1 (512) 555-0300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Have questions about carpooling, need help with your account, or want to share feedback? 
            We're here to help you have the best possible ridesharing experience.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">How Can We Help?</h2>
            <p className="text-lg text-neutral-600">Choose the best way to reach us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center bg-gradient-accent rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{method.title}</h3>
                <p className="text-neutral-600 text-sm mb-3">{method.description}</p>
                <div className="font-medium text-primary-600 mb-1">{method.contact}</div>
                <div className="text-xs text-neutral-500">{method.response}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
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
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="general">General Question</option>
                    <option value="support">Technical Support</option>
                    <option value="safety">Safety Concern</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="billing">Billing & Payments</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-primary text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Our Offices</h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-3">{office.city}</h3>
                      <div className="space-y-2 text-neutral-600">
                        <div className="flex items-start space-x-2">
                          <span className="text-primary-500 mt-1">📍</span>
                          <div className="whitespace-pre-line">{office.address}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-primary-500">📞</span>
                          <span>{office.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-primary rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Support Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="pt-2 border-t border-white/20">
                    <div className="flex justify-between font-semibold">
                      <span>Emergency Support:</span>
                      <span>24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gradient-accent rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{item.question}</h3>
                <p className="text-neutral-600">{item.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-neutral-600 mb-4">Can't find what you're looking for?</p>
            <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              View All FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-success-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Safety First</h2>
            <p className="text-lg text-neutral-600 mb-6">
              If you encounter any safety concerns during a ride or have urgent issues, 
              please don't hesitate to contact our emergency support line immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                🚨 Emergency: +1 (555) 911-RIDE
              </button>
              <button className="border-2 border-neutral-300 text-neutral-700 hover:border-primary-500 hover:text-primary-600 px-6 py-3 rounded-lg font-semibold transition-all">
                📋 View Safety Guidelines
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest news, features, and tips for better carpooling delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 transition-all"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
