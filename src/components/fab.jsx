import React, { useState } from 'react';
import { HiOutlineCalendar } from 'react-icons/hi';
import { InlineWidget } from 'react-calendly';

const FabButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyle = {
    background: 'linear-gradient(to right, #8A2BE2, #FF1493)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '999px', // large enough to make it circular
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    border: 'none',
    transition: 'background 0.3s ease',
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed bottom-8 right-8 z-50">
        <button style={buttonStyle} onClick={handleButtonClick}>
          <HiOutlineCalendar className="text-xl mr-2" />
          Book an Appointment
        </button>
      </div>
      {isOpen && (
        <div className="fixed bottom-20 right-8 z-50 bg-white p-4 rounded shadow-lg">
          <InlineWidget url="https://calendly.com/hothead01th"/>
        </div>
      )}
    </div>
  );
};

export default FabButton;
