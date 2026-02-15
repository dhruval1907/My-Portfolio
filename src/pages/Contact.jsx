import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import SectionNav from '../components/SectionNav';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact</h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-12">
          Get in touch before I write another line of code!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-light mb-2 font-medium">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name, your fame"
              required
              className="w-full px-4 py-3 bg-dark-secondary border border-dark-border rounded-lg text-gray-light placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-light mb-2 font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Where can I reach you back?"
              required
              className="w-full px-4 py-3 bg-dark-secondary border border-dark-border rounded-lg text-gray-light placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <p className="text-sm text-gray-600 mt-2">
              Temporary emails are also accepted, unless you wish to hear back
            </p>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-light mb-2 font-medium">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your words, my inbox."
              required
              rows={6}
              className="w-full px-4 py-3 bg-dark-secondary border border-dark-border rounded-lg text-gray-light placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" variant="primary" className="flex-1">
              Submit
            </Button>
            <Button type="button" variant="outline" onClick={handleReset} className="flex-1">
              Reset
            </Button>
          </div>
        </form>

        <SectionNav
          prev={{ name: 'Education', path: '/education' }}
          next={{ name: 'Stats', path: '/stats' }}
        />
      </div>
    </PageTransition>
  );
};

export default Contact;
