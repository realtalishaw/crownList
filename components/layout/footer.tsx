import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Crown, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-50 text-purple-800 mt-auto">
      {/* Rest of the footer code remains the same until the Explore section */}
      <div className="container mx-auto px-4 py-8">
        {/* Top row with logo, social icons, and email signup */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and Crown Icon */}
          <div className="flex items-center mb-4 md:mb-0">
            <Crown size={24} className="text-purple-700 mr-2" />
            <span className="font-bold text-xl">The Crown List</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Linkedin} />
          </div>

          {/* Email Signup Form */}
          <div className="w-full md:w-auto">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-purple-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-700 text-white px-4 py-2 rounded-r-md hover:bg-purple-800 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm mb-4">
              Your dream pageant made stress-free. Our experienced planners offer
              personalized services tailored to you. From venues to entertainment, we
              handle the details. Contact us to start planning today!
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/media-kit" className="hover:underline">Media Kit</Link></li>
              <li><Link href="/help" className="hover:underline">Help</Link></li>
              <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/resources" className="hover:underline">All Resources</Link></li>
              <li><Link href="/resources/pageant-tips" className="hover:underline">Pageant Tips</Link></li>
              <li><Link href="/resources/interview-prep" className="hover:underline">Interview Prep</Link></li>
              <li><Link href="/resources/fitness-nutrition" className="hover:underline">Fitness & Nutrition</Link></li>
              <li><Link href="/resources/wardrobe-styling" className="hover:underline">Wardrobe & Styling</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/directory/categories/pageants" className="hover:underline">Pageants</Link></li>
              <li><Link href="/forum" className="hover:underline">Forum</Link></li> 
              <li><Link href="/for-directors" className="hover:underline">For Directors</Link></li>
              <li><Link href="/for-businesses" className="hover:underline">For Businesses</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-purple-700 text-white py-4 text-center text-sm">
        <p>Copyright © 2024 - All rights reserved | Design By The Crown List</p>
        <div className="mt-2">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }) => (
  <a href="#" className="bg-purple-200 p-2 rounded-full hover:bg-purple-300 transition-colors">
    <Icon size={20} className="text-purple-700" />
  </a>
);

export default Footer;