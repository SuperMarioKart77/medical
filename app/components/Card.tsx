import React from 'react';
import './card.css';

interface CardProps {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, color, icon }) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <div className="hlt_wedobox" style={{ borderColor: color }}>
        <span className="hlt_hexa">
          {icon}
        </span>
        <span className="hlt_hexabk"></span>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="169px" height="130px" className="hlt_wedobox_bgimg"
        >
          <path fillRule="evenodd" opacity="0.039" fill="rgb(0, 0, 0)"
            d="M2.703,1.596 C3.849,0.524 5.207,-0.012 6.777,-0.012 L111.072,-0.012 C112.641,-0.012 114.000,0.524 115.146,1.596 C116.293,2.668 116.867,3.940 116.867,5.407 L116.867,32.493 L131.352,32.493 C132.921,32.493 134.672,32.862 136.604,33.594 C138.534,34.328 140.074,35.230 141.220,36.303 L159.147,53.063 C160.293,54.135 161.258,55.575 162.043,57.378 C162.828,59.185 163.221,60.822 163.221,62.289 L163.221,97.504 C164.790,97.504 166.147,98.040 167.295,99.112 C168.441,100.185 169.014,101.453 169.014,102.921 C169.014,104.389 168.441,105.657 167.295,106.731 C166.146,107.802 164.789,108.339 163.221,108.339 L151.631,108.339 C151.631,114.322 149.369,119.427 144.842,123.660 C140.314,127.892 134.853,130.007 128.455,130.007 C122.056,130.007 116.595,127.892 112.068,123.660 C107.542,119.427 105.279,114.322 105.279,108.339 L70.514,108.339 C70.514,114.322 68.249,119.427 63.723,123.660 C59.196,127.892 53.737,130.007 47.337,130.007 C40.939,130.007 35.477,127.892 30.952,123.660 C26.426,119.427 24.162,114.322 24.162,108.339 L6.779,108.339 C5.209,108.339 3.851,107.802 2.706,106.731 C1.560,105.657 0.984,104.389 0.984,102.921 L0.984,5.407 C0.984,3.940 1.558,2.671 2.703,1.596 ZM120.262,115.999 C122.527,118.116 125.257,119.174 128.456,119.174 C131.655,119.174 134.386,118.116 136.650,115.999 C138.912,113.883 140.045,111.329 140.045,108.339 C140.045,105.348 138.913,102.795 136.650,100.678 C134.385,98.562 131.655,97.504 128.456,97.504 C125.257,97.504 122.526,98.562 120.262,100.678 C118.000,102.795 116.868,105.348 116.868,108.339 C116.868,111.329 117.999,113.883 120.262,115.999 ZM116.867,64.998 L151.631,64.998 L151.631,62.459 C151.511,61.897 151.239,61.273 150.816,60.598 L133.163,44.091 C132.681,43.697 132.017,43.442 131.172,43.331 L116.867,43.331 L116.867,64.998 ZM39.145,115.999 C41.409,118.116 44.139,119.174 47.337,119.174 C50.537,119.174 53.267,118.116 55.531,115.999 C57.794,113.883 58.927,111.329 58.927,108.339 C58.927,105.348 57.794,102.795 55.531,100.678 C53.267,98.562 50.537,97.504 47.337,97.504 C44.139,97.504 41.409,98.562 39.145,100.678 C36.881,102.795 35.751,105.348 35.751,108.339 C35.751,111.329 36.881,113.883 39.145,115.999 ZM24.161,51.454 C24.161,52.245 24.432,52.895 24.975,53.403 C25.519,53.911 26.214,54.163 27.058,54.163 L47.337,54.163 L47.337,73.123 C47.337,73.916 47.608,74.563 48.150,75.073 C48.694,75.578 49.387,75.831 50.232,75.831 L67.617,75.831 C68.461,75.831 69.155,75.578 69.698,75.073 C70.243,74.563 70.512,73.916 70.512,73.123 L70.512,54.163 L90.791,54.163 C91.637,54.163 92.331,53.911 92.875,53.403 C93.416,52.895 93.689,52.245 93.689,51.454 L93.689,35.202 C93.689,34.411 93.417,33.764 92.875,33.256 C92.331,32.748 91.637,32.493 90.791,32.493 L70.512,32.493 L70.512,13.532 C70.512,12.743 70.243,12.093 69.698,11.586 C69.155,11.078 68.461,10.825 67.617,10.825 L50.232,10.825 C49.387,10.825 48.694,11.078 48.150,11.586 C47.608,12.093 47.337,12.743 47.337,13.532 L47.337,32.493 L27.058,32.493 C26.214,32.493 25.519,32.748 24.975,33.256 C24.432,33.764 24.161,34.411 24.161,35.202 L24.161,51.454 Z"
          />
        </svg>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>
  );
};

export default Card;