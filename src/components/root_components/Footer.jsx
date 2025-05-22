import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white px-8 py-12 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">


          <div>
            <h2 className="text-xl font-bold mb-2">HobbyHub</h2>
            <p className="text-sm">Connect with people who share your interests and passions.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/all-groups" className="hover:underline">All Groups</Link></li>
              <li><Link to="/create-group" className="hover:underline">Create Group</Link></li>
              <li><Link to="/my-groups" className="hover:underline">My Groups</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="space-y-1 text-sm">
              <li>Drawing & Painting</li>
              <li>Photography</li>
              <li>Video Gaming</li>
              <li>Cooking</li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li>support@hobbyhub.com</li>
              <li>1-800-HOBBY-HUB</li>
              <li>123 New Town Street</li>
              <li>New Town, HB 12345</li>
            </ul>
          </div>
        </div>


        <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
          © 2025 HobbyHub. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer