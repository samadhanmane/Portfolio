import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:samadhanmane2324@gmail.com?subject=${encodeURIComponent(subject || 'AI Engineering Opportunity')}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F3F1EA]/10">
      <div className="flex items-center space-x-3 font-mono text-xs text-[#A7A59D] uppercase tracking-widest mb-4">
        <span className="text-[#E89A3C]">06</span>
        <span>//</span>
        <span>INITIALIZE CONNECTION</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct channels and statement */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h2 className="font-sans text-fluid-section font-bold tracking-tight text-[#F3F1EA]">
              Let’s build something intelligent.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A7A59D] leading-relaxed">
              I am open to AI/ML engineering roles, conversational AI and RAG pipeline engineering, research collaborations, and production systems development.
            </p>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <a
              href="mailto:samadhanmane2324@gmail.com"
              className="flex items-center justify-between p-4 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg hover:border-[#E89A3C] transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#E89A3C]" />
                <div>
                  <div className="text-[10px] text-[#6E6C65] uppercase">PRIMARY INBOX</div>
                  <div className="text-sm font-sans font-medium text-[#F3F1EA] group-hover:text-[#E89A3C] transition-colors">
                    samadhanmane2324@gmail.com
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#6E6C65] group-hover:text-[#E89A3C] transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/samadhan-mane"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg hover:border-[#E89A3C] transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <Linkedin size={16} className="text-[#E89A3C]" />
                <div>
                  <div className="text-[10px] text-[#6E6C65] uppercase">PROFESSIONAL NETWORK</div>
                  <div className="text-sm font-sans font-medium text-[#F3F1EA] group-hover:text-[#E89A3C] transition-colors">
                    linkedin.com/in/samadhan-mane
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#6E6C65] group-hover:text-[#E89A3C] transition-colors" />
            </a>

            <a
              href="https://github.com/samadhanmane"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg hover:border-[#E89A3C] transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <Github size={16} className="text-[#E89A3C]" />
                <div>
                  <div className="text-[10px] text-[#6E6C65] uppercase">SOURCE REPOSITORIES</div>
                  <div className="text-sm font-sans font-medium text-[#F3F1EA] group-hover:text-[#E89A3C] transition-colors">
                    github.com/samadhanmane
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#6E6C65] group-hover:text-[#E89A3C] transition-colors" />
            </a>

            <div className="flex items-center justify-between p-4 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#E89A3C]" />
                <div>
                  <div className="text-[10px] text-[#6E6C65] uppercase">LOCATION</div>
                  <div className="text-sm font-sans font-medium text-[#F3F1EA]">
                    Pune, Maharashtra, India
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-[#6E6C65] uppercase">IST (UTC+5:30)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Functional Message Dispatcher */}
        <div className="lg:col-span-6 bg-[#131311] border border-[#F3F1EA]/10 rounded-lg p-6 sm:p-8">
          <div className="font-mono text-xs text-[#E89A3C] uppercase tracking-wider mb-2">
            DISPATCH MESSAGE
          </div>
          <h3 className="font-sans text-xl font-bold text-[#F3F1EA] mb-6">
            Direct Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-[#A7A59D] uppercase mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Alex Smith"
                  className="w-full px-3.5 py-2.5 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-[#F3F1EA] focus:outline-none focus:border-[#E89A3C] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-[#A7A59D] uppercase mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-[#F3F1EA] focus:outline-none focus:border-[#E89A3C] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-mono text-[#A7A59D] uppercase mb-1.5">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="AI Engineering Role / Collaboration"
                className="w-full px-3.5 py-2.5 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-[#F3F1EA] focus:outline-none focus:border-[#E89A3C] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-[#A7A59D] uppercase mb-1.5">
                Brief / Context
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Describe your project, timeline, or engineering opportunity..."
                className="w-full px-3.5 py-2.5 bg-[#0C0C0B] border border-[#F3F1EA]/10 rounded text-[#F3F1EA] focus:outline-none focus:border-[#E89A3C] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#E89A3C] text-[#0C0C0B] font-mono font-semibold text-xs rounded hover:bg-[#F3F1EA] transition-colors flex items-center justify-center space-x-2"
            >
              <Send size={14} />
              <span>SEND VIA EMAIL CLIENT</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
