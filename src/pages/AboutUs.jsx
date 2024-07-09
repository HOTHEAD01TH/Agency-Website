import React from 'react';

const AboutUs = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[700px] text-center lg:mb-20">
              <h2 className="mb-4 text-4xl font-bold text-[#483285] dark:text-[#483285] sm:text-5xl">
                About Us
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We are a team of dedicated professionals committed to providing top-notch services to our clients. With years of experience in the industry, we strive to deliver excellence and satisfaction in all our projects. Our mission is to innovate and lead in our field, ensuring that our clients achieve their goals.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <div className="w-full px-4 lg:w-1/3">
            <div className="mb-8 rounded-lg bg-black p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-[#483285]">
                Our Mission
              </h3>
              <p className="text-base text-gray-300">
                Our mission is to provide innovative and effective solutions that help our clients achieve their business goals.
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <div className="mb-8 rounded-lg bg-black p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-[#483285]">
                Our Vision
              </h3>
              <p className="text-base text-gray-300">
                Our vision is to be the leading provider of high-quality solutions in our industry, known for our commitment to excellence and innovation.
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <div className="mb-8 rounded-lg bg-black p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-[#483285]">
                Our Values
              </h3>
              <p className="text-base text-gray-300">
                We believe in integrity, innovation, and customer satisfaction. These values guide us in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#483285" stopOpacity="0.36" />
              <stop offset="1" stopColor="rgba(72, 50,133, 0)" stopOpacity="0" />
              <stop offset="1" stopColor="rgba(72, 50,133, 0)" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;
