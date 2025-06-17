import React from 'react';

const About = () => {
  const values = [
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'We prioritize the safety and security of our community with comprehensive verification and safety measures.'
    },
    {
      icon: '🌱',
      title: 'Environmental Responsibility',
      description: 'Committed to reducing carbon emissions and traffic congestion through smart ride sharing solutions.'
    },
    {
      icon: '🤝',
      title: 'Community Building',
      description: 'Fostering connections between commuters to build stronger, more connected communities.'
    },
    {
      icon: '💰',
      title: 'Affordability',
      description: 'Making commuting more affordable for everyone by sharing transportation costs effectively.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Users', icon: '👥' },
    { number: '2M+', label: 'Successful Rides', icon: '🚗' },
    { number: '500 Tons', label: 'CO₂ Saved', icon: '🌱' },
    { number: '150+', label: 'Cities Served', icon: '🏙️' }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former transportation planner passionate about sustainable urban mobility.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Tech veteran focused on building scalable, user-friendly platforms.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Safety',
      bio: 'Safety expert ensuring trust and security in our carpooling community.',
      avatar: '👩‍🔬'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Revolutionizing Commuting for a
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Better Tomorrow
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              RideShare was founded with a simple mission: to make commuting more affordable, 
              efficient, and environmentally friendly by connecting people who share similar routes 
              and schedules. We believe that shared transportation is the key to solving urban 
              mobility challenges while building stronger communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-neutral-600 mb-8">
                To transform how people commute by creating a trusted, efficient, and sustainable 
                carpooling platform that reduces traffic congestion, cuts commuting costs, and 
                brings communities together.
              </p>
              <div className="bg-gradient-accent rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">The Problem We're Solving</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">$2,400</div>
                    <p className="text-neutral-700">Average annual commuting cost per person</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">54 Minutes</div>
                    <p className="text-neutral-700">Daily time lost in traffic congestion</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">4.6 Tons</div>
                    <p className="text-neutral-700">CO₂ emissions per car annually</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-neutral-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Impact</h2>
            <p className="text-lg text-neutral-600">Making a real difference in communities worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  RideShare began in 2020 when our founders, frustrated with expensive and unreliable 
                  commuting options, realized that many people were driving the same routes at the 
                  same times but had no easy way to connect.
                </p>
                <p>
                  What started as a simple idea to help colleagues share rides has grown into a 
                  comprehensive platform serving thousands of commuters across multiple cities. 
                  We've learned that carpooling is about more than just saving money – it's about 
                  building relationships, reducing environmental impact, and creating more livable cities.
                </p>
                <p>
                  Today, we continue to innovate and expand our platform, always keeping our users' 
                  safety, convenience, and community at the heart of everything we do.
                </p>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-6">🚗💚</div>
              <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
              <p className="text-lg">
                Every ride shared is a step toward more sustainable, connected communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-neutral-600">The people behind RideShare's mission</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-gradient-accent rounded-xl p-6">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-16 bg-success-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Environmental Commitment</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
              We're committed to creating a more sustainable future through shared transportation. 
              Every ride shared reduces emissions, decreases traffic congestion, and contributes to cleaner air in our cities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Carbon Neutral by 2025</h3>
                <p className="text-neutral-600">Committed to offsetting our platform's carbon footprint</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">50% Fewer Cars</h3>
                <p className="text-neutral-600">Goal to reduce single-occupancy vehicles on our routes</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Green Partnerships</h3>
                <p className="text-neutral-600">Collaborating with environmental organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of the solution. Start carpooling today and help us build a more sustainable future.
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
