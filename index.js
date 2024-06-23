import React from 'react';
import { Heart } from 'lucide-react';

const ApreciaxLanding = () => {
  return (
    <div className="min-h-screen bg-[#EDEAD0] text-[#1C3549] flex flex-col">
      <header className="bg-[#127880] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Apreciax</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-[#FFC556]">About</a></li>
              <li><a href="#product" className="hover:text-[#FFC556]">Product</a></li>
              <li><a href="#contact" className="hover:text-[#FFC556]">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-8">
        <section id="hero" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Cultivate Gratitude, Grow Your Business</h2>
          <p className="text-xl mb-8">Apreciax helps you harness the power of gratitude to transform your workplace and boost performance.</p>
          <button className="bg-[#A0E8AF] text-[#1C3549] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFC556] transition duration-300">Get Started</button>
        </section>

        <section id="about" className="mb-16">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p>At Apreciax, we're on a mission to help society by fostering gratitude in the workplace. Our innovative solutions are designed to create a positive impact on businesses and individuals alike.</p>
        </section>

        <section id="product" className="mb-16">
          <h3 className="text-2xl font-bold mb-4">Gratitude App for Salesforce</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="text-[#FFC556] w-12 h-12 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Enhance Your Salesforce Experience</h4>
            <p>Our Gratitude App, available on the AppExchange, seamlessly integrates with Salesforce to promote a culture of appreciation and recognition within your organization.</p>
            <ul className="mt-4 list-disc list-inside">
              <li>Boost team morale and productivity</li>
              <li>Improve customer relationships</li>
              <li>Drive better business outcomes</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="text-center">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-4">Ready to transform your workplace with gratitude? Contact us today!</p>
          <button className="bg-[#127880] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A0E8AF] hover:text-[#1C3549] transition duration-300">Contact Us</button>
        </section>
      </main>

      <footer className="bg-[#1C3549] text-white p-4 text-center">
        <p>&copy; 2024 Apreciax. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ApreciaxLanding;