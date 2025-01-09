import React, { useState } from 'react';

const CourseBooking = ({ courseId }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const courseData = {
    image: 'https://pribta-tangerine.com/wp-content/uploads/2024/08/Pro1500.png',
    name: 'ยกกระชับด้วย HIFU ทั่วใบหน้า',
    clinic: 'APS Clinic',
    price: 3500,
    quantity: 1,
    selected: true,
  };

  const doctors = [
    { id: 1, name: 'Dr. Alice Smith' },
    { id: 2, name: 'Dr. Bob Johnson' },
    { id: 3, name: 'Dr. Clara Brown' },
  ];

  const dates = [
    { day: '31', weekday: 'Fri', times: ['9:00 AM', '10:30 AM', '1:00 PM', '3:00 PM'] },
    { day: '1', weekday: 'Sat', times: [] },
    { day: '2', weekday: 'Sun', times: [] },
    { day: '3', weekday: 'Mon', times: ['9:00 AM', '10:30 AM', '1:00 PM', '3:00 PM'] },
    { day: '4', weekday: 'Tue', times: ['9:00 AM', '10:30 AM', '1:00 PM', '3:00 PM'] },
  ];

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="flex flex-wrap w-full h-screen">
      {/* Left Card */}
      <div className="w-full md:w-1/2 p-4 border-r-2 border-gray-300">
        <div className="border rounded-lg shadow-lg p-6">
          <img src={courseData.image} alt={courseData.name} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-4">{courseData.name}</h2>
          <p className="text-gray-600 mt-2">Clinic: {courseData.clinic}</p>
          <p className="text-gray-600 mt-2">Price: {courseData.price.toLocaleString()} THB</p>
          <p className="text-gray-600 mt-2">Quantity: {courseData.quantity}</p>
        </div>
      </div>

      {/* Right Card */}
      <div className="w-full md:w-1/2 p-4">
        <div className="border rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Booking Details</h2>
          <label className="block mb-2 font-medium text-gray-700">Select Doctor:</label>
          <select
            value={selectedDoctor}
            onChange={handleDoctorChange}
            className="w-full p-2 border rounded-lg mb-4"
          >
            <option value="">Choose a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>

          <label className="block mb-2 font-medium text-gray-700">Select Date:</label>
          <div className="flex space-x-2 mb-4">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateChange(date.day)}
                className={`p-2 rounded-lg border ${
                  selectedDate === date.day ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                <div>{date.weekday}</div>
                <div>{date.day}</div>
              </button>
            ))}
          </div>

          <label className="block mb-2 font-medium text-gray-700">Select Time:</label>
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedDate &&
              dates
                .find((date) => date.day === selectedDate)
                ?.times.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimeChange(time)}
                    className={`p-2 rounded-lg border ${
                      selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBooking;
