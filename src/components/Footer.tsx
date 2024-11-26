import React from "react";
import { Utensils, Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Social Media */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Utensils className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-2xl font-semibold text-rose-300">
              Fusion
            </span>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-lg hover:bg-rose-500 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-lg hover:bg-rose-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-lg hover:bg-rose-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-lg hover:bg-rose-500 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-rose-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              OPEN HOURS
            </h3>
            <ul className="space-y-3">
              <li>Mon-Fri 6 PM - 4 AM</li>
              <li>Sat-Sun 6 PM - 6 AM</li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              QUICK LINK
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-rose-300 transition-colors">
                  Share Location
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition-colors">
                  Orders Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p>Copyright © {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
