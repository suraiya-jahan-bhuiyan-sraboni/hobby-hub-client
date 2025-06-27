import React from 'react'
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
      <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-6">
          <Helmet>
              <title>Contact us</title>
          </Helmet>
          <h1 className='text-4xl font-bold p-4'>Contact us</h1>
          <motion.div
              className="max-w-5xl w-full bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
          >
              {/* Contact Info */}
              <div className="bg-blue-600 text-white p-10 flex flex-col justify-between">
                  <div>
                      <h2 className="text-4xl font-bold mb-4">Let's talk</h2>
                      <p className="text-blue-100">
                          Reach out and we’ll get back to you shortly.
                      </p>
                  </div>
                  <div className="mt-10 space-y-4 text-sm text-blue-100">
                      <div>
                          <div className="font-semibold">Email</div>
                          support@hobbyhub.com
                      </div>
                      <div>
                          <div className="font-semibold">Phone</div>
                          +1 (123) 456-7890
                      </div>
                      <div>
                          <div className="font-semibold">Address</div>
                          123 New Town Street
                          New Town, HB 12345
                      </div>
                  </div>
              </div>

              {/* Contact Form */}
              <div className="p-10 space-y-6 bg-white">
                  <div>
                      <label className="text-gray-700 font-medium">Your Name</label>
                      <input
                          type="text"
                          className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                          placeholder="John Doe"
                      />
                  </div>
                  <div>
                      <label className="text-gray-700 font-medium">Email</label>
                      <input
                          type="email"
                          className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                          placeholder="you@example.com"
                      />
                  </div>
                  <div>
                      <label className="text-gray-700 font-medium">Message</label>
                      <textarea
                          rows={4}
                          className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                          placeholder="Write your message here..."
                      ></textarea>
                  </div>
                  <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                      Send Message
                  </button>
              </div>
          </motion.div>
      </div>
  )
}

export default Contact