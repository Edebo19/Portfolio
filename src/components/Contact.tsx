import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react'

const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = () => {
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! I\'ll get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Let's Connect</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about frontend development. 
              Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:okelemupeaceedebo@gmail.com"
                className="flex items-center gap-3 text-slate-600 hover:text-blue-500 transition-colors duration-200"
              >
                <Mail size={20} />
                okelemupeaceedebo@gmail.com
              </a>
              <a
                href="https://github.com/Edebo19"
                className="flex items-center gap-3 text-slate-600 hover:text-blue-500 transition-colors duration-200"
              >
                <Github size={20} />
                github.com/Edebo19
              </a>
              <a
                href="https://www.linkedin.com/in/peace-okelemu-98856324"
                className="flex items-center gap-3 text-slate-600 hover:text-blue-500 transition-colors duration-200"
              >
                <Linkedin size={20} />
                linkedin.com/in/peace-okelemu-98856324
              </a>
            </div>
          </div>
          
          {/* <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
            >
              Send Message
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact
