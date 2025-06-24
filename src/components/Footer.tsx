import React from 'react'

const Footer: React.FC = () => {
    const date = new Date().getFullYear()
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-300">
            © {date} Peace Edebo. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer
