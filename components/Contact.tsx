'use client'

import { ContactForm } from '@/components/ContactForm'

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-[#00A4CC] pl-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">Let&apos;s Ignite Growth</h2>
          <p className="text-lg text-gray-600">Get in touch with our team to discuss your recruitment needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#00A4CC] text-2xl">📧</span>
                  <div>
                    <p className="font-semibold text-[#003366]">Email</p>
                    <p className="text-gray-600">careerfusionconsulting@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00A4CC] text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-[#003366]">Phone</p>
                    <p className="text-gray-600">+91 9663479949</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00A4CC] text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-[#003366]">Office Address</p>
                    <p className="text-gray-600">No.1053, 2nd block, SMV Layout,</p>
                    <p className="text-gray-600">Bengaluru - 560060</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4717337123915!2d77.59711257482733!3d12.999216091520783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12f29de32d9f%3A0x9df4f60d4d7bf77f!2sSMV%20Layout%2C%20Bengaluru%2C%20Karnataka%20560060!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="h-60 w-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> Executive Search
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> Permanent Recruitment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> RPO Solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> Talent Mapping
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Why Partner With Us?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> 15+ years of expertise
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> Global talent network
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> Customized solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
