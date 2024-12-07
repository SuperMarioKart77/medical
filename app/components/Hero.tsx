import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section bg-white py-20">
      <div className="container mx-auto flex items-center">
      <div className="w-full md:w-1/2 px-4 md:px-0">
  <h1 className="text-4xl font-bold mb-4">Your health goes first</h1>
  <p className="mb-8">
    Meet <b>Julia</b>, your virtual assistant dedicated to providing top-notch blood analysis, microbiology, and other related healthcare services. We are committed to delivering accurate results and personalized care to ensure your well-being.
  </p>
  <div className="flex space-x-4">
    <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Login
    </a>
    <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Discover
    </a>
  </div>
</div>
        <div className="w-1/2">
          <img src="/julia.png" alt="Doctor" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;