import React from 'react';
import { FaHeartbeat, FaTooth, FaHeart, FaVial } from 'react-icons/fa';
import Card from './Card';
import './whatwedo.css';

const WhatWeDo: React.FC = () => {
  return (
    <div id="whatwedo" className="hlt_whitebg hlt_wedo relative py-12">
      <img src="/images/service/wedobg.png" alt="..." className="hlt_bgimg absolute inset-0 w-full h-full object-cover opacity-10 z-0" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">What We Do</h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
            <br />
            do eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card
            title="Emergency Care"
            description="Lorem ipsum dolor sit ametsicing elit sed do eiusmod temp."
            color="#ac69d8"
            icon={<FaHeartbeat size={24} color="#ac69d8" />}
          />
          <Card
            title="Dental Care"
            description="Lorem ipsum dolor sit ametsicing elit sed do eiusmod temp."
            color="#36c777"
            icon={<FaTooth size={24} color="#36c777" />}
          />
          <Card
            title="Heart Disease"
            description="Lorem ipsum dolor sit ametsicing elit sed do eiusmod temp."
            color="#d46b9a"
            icon={<FaHeart size={24} color="#d46b9a" />}
          />
          <Card
            title="Blood Test"
            description="Lorem ipsum dolor sit ametsicing elit sed do eiusmod temp."
            color="#e78970"
            icon={<FaVial size={24} color="#e78970" />}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;