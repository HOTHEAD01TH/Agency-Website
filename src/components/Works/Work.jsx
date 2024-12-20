import React from 'react';

const statsData = [
  { label: 'Projects Completed', value: '600+' },
  { label: 'Satisfied Clients', value: '95%' },
  { label: 'Years of Experience', value: '10+' },
  { label: 'Awards Won', value: '15' },
];

const Stats = () => {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md text-center"
              style={{
                backgroundImage: "linear-gradient(45deg, #6b0fbb, #aa4fff 50%, #ff66c4)",
                color: "white",
              }}
            >
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="mt-2 text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
