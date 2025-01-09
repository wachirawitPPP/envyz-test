import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
const PaymentHistoryTabs = () => {
  const [activeTab, setActiveTab] = useState('unusedCourses'); // Default tab
  const [transitioning, setTransitioning] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null); // To hold the selected course
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal visibility state
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointment, setAppointment] = useState(null); // Appointment visibility state
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventListModal, setEventListModal] = useState(true)
  const doctors = [
    {
      id: 1,
      name: 'Dr. Smith',
      doctor_app: [
        { title: 'Appointment with Dr. Smith', start: '2025-01-10' },
        { title: 'Follow-up with Dr. Brown', start: '2025-01-15' },
        { title: 'Consultation with Dr. Lee', start: '2025-01-20' },
      ],
    },
    { id: 2, name: 'Dr. Brown' },
    { id: 3, name: 'Dr. Lee' },
  ];

  const availableDates = [
    { id: 1, date: '2025-01-10', title: 'Available' },
    { id: 2, date: '2025-01-15', title: 'Available' },
  ];

  const availableTimes = [
    { doctorId: 1, id: 1, time: ['10:00 AM', '10:00 AM'] },
    { doctorId: 2, id: 2, time: '1:00 PM' },
    { doctorId: 3, id: 3, time: '3:00 PM' },
  ];

  const calendarEvents = [
    { title: 'Appointment with Dr. Smith', start: '2025-01-10' },
    { title: 'Follow-up with Dr. Brown', start: '2025-01-15' },
    { title: 'Consultation with Dr. Lee', start: '2025-01-20' },
  ];

  // Mock data
  const unusedCourses = [
    {
      id: 1,
      image: 'https://pribta-tangerine.com/wp-content/uploads/2024/08/Pro1500.png',
      name: 'ยกกระชับด้วย HIFU ทั่วใบหน้า',
      clinic: 'APS Clinic',
      price: 3500,
      quantity: 1,
      expiry: '2025-12-31',
    },
    {
      id: 2,
      image: 'https://pribta-tangerine.com/wp-content/uploads/2024/08/Pro1500.png',
      name: 'โปรแกรมโบท็อกซ์หน้า Allergan 50 ยูนิต',
      clinic: 'APS Clinic',
      price: 1000,
      quantity: 3,
      expiry: '2025-11-30',
    },
  ];

  const paymentHistory = [
    {
      id: 1,
      date: '2025-01-05',
      total: 4500,
      items: ['HIFU Face Treatment', 'Botox Allergan 50 Units x 3'],
    },
    {
      id: 2,
      date: '2024-12-15',
      total: 1000,
      items: ['Facial Cleaning Treatment'],
    },
  ];

  const handleTabChange = (tab) => {
    setTransitioning(true); // Start transition
    setTimeout(() => {
      setActiveTab(tab);
      setTransitioning(false); // End transition
    }, 300); // Match transition duration
  };

  const handleUseNow = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null); // Clear selected course
  };

  const handleDateSelect = (info) => {
    setSelectedDate(info.startStr); // Save the selected date
    console.log('Selected date:', info);
  };

  return (
    <div className="flex h-screen mx-auto py-8 px-4">
      {/* Sidebar Tabs */}
      <div className="w-1/4 border-r">
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleTabChange('unusedCourses')}
            className={`py-2 px-4 text-left text-lg font-medium ${
              activeTab === 'unusedCourses' ? 'text-primary border-l-4 border-primary bg-gray-100' : 'text-gray-700'
            }`}
          >
            Unused Courses
          </button>
          <button
            onClick={() => handleTabChange('paymentHistory')}
            className={`py-2 px-4 text-left text-lg font-medium ${
              activeTab === 'paymentHistory' ? 'text-primary border-l-4 border-primary bg-gray-100' : 'text-gray-700'
            }`}
          >
            Payment History
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-3/4 px-6">
        <div className={`transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
          {activeTab === 'unusedCourses' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Unused Courses</h2>
              <div className="space-y-4">
                {unusedCourses.map((course) => (
                  <div
                    key={course.id}
                    className="border rounded-lg shadow-lg p-4 flex flex-col sm:flex-row items-center sm:items-start text-left"
                  >
                    {/* Course Image */}
                    <img src={course.image} alt={course.name} className="w-32 h-32 object-cover mb-4 sm:mb-0 sm:mr-4" />

                    {/* Course Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">{course.name}</h3>
                      <p className="text-md font-medium text-gray-500 mb-2">{course.clinic}</p>
                      <p className="text-sm text-gray-500">
                        Details: Enhance your beauty with this premium course designed for effective results.
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="flex gap-4 items-center">
                      <span>
                        <span className="text-primary">คงเหลือ: {course.quantity}</span>
                      </span>
                      <button
                        onClick={() => handleUseNow(course)}
                        className="mt-4 sm:mt-0 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                      >
                        Use Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'paymentHistory' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment History</h2>
              <div className="overflow-auto border rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="text-left p-4 font-medium">Date</th>
                      <th className="text-left p-4 font-medium">Items</th>
                      <th className="text-right p-4 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory.map((history) => (
                      <tr key={history.id} className="border-b">
                        <td className="p-4">{history.date}</td>
                        <td className="p-4">
                          <ul className="list-disc list-inside">
                            {history.items.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-4 text-right">฿ {history.total.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}


      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6 w-full max-w-7xl">
            <div className="flex flex-row gap-4">
              {/* Doctor Selection */}
              <div className="border-2 w-4/12 h-72 p-4">
                <h3 className="text-lg font-medium mb-4">Select a Doctor</h3>
                <div className="flex flex-col gap-2">
                  {doctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      onClick={() => {
                        setSelectedDoctor(doctor.name);
                        setAppointment(doctor.doctor_app);
                      }}
                      className={`cursor-pointer p-4 border rounded-lg ${
                        selectedDoctor === doctor.name
                          ? 'bg-primary text-white border-primary'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {doctor.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar */}
              <div className="w-8/12">
                {selectedDoctor ? (
                  <FullCalendar
                    selectable={true}
                    events={appointment}
                    plugins={[dayGridPlugin,interactionPlugin]}
                    initialView="dayGridMonth"
                    height="400px" // Set height explicitly
                    select={handleDateSelect}
                  />
                ) : (
                  <div className="w-full">
                    <span className="items-center justify-center flex flex-row">please Select Dotor</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-4">
              <button onClick={closeModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                disabled={!selectedDoctor} // Disable if no doctor is selected
              >
                Confirm Use
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentHistoryTabs;
