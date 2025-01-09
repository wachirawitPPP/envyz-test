import React, { useState } from 'react';
const data = [
  {
    id: 1,
    imgSrc: 'https://pribta-tangerine.com/wp-content/uploads/2024/08/Pro1500.png',
    title: 'ตรวจโรคติดต่อทางเพศสัมพันธ์',
    price: '2,820',
    oldPrice: '3,200',
    rating: '★★★★★',
    link: '#',
  },
  {
    id: 2,
    imgSrc:
      'https://mersiclinic-thailand.com/wp-content/uploads/2024/07/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-Q-Switch.jpg',
    title: 'โปร CO2 Laser',
    price: '2,199',
    oldPrice: '2,500',
    rating: '★★★★☆',
    link: '#',
  },
  {
    id: 3,
    imgSrc:
      'https://image.makewebcdn.com/makeweb/m_1920x0/gR8C8Iimd/DefaultData/358691738_668603541975095_3511059683635981845_n.jpg',
    title: 'กายภาพบำบัด',
    price: '900',
    oldPrice: '1,200',
    rating: '★★★★☆',
    link: '#',
  },
  {
    id: 4,
    imgSrc: 'https://api.ruamjairak.com/media/2023/12/27/_eqqr1zO3QfJGlcCOE6jK6HfKR8sxx.jpg',
    title: 'ตรวจสุขภาพหัวใจ',
    price: '1,999',
    oldPrice: '2,500',
    rating: '★★★★★',
    link: '#',
  },
];
const OfferCard = ({ imgSrc, title, price, oldPrice, rating, id, handleForMoreClick }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl`}
    >
      <div className="flex flex-row -space-x-8">
        <img src={imgSrc} alt={title} className="   object-cover w-full" />
        <div className="pt-2 text-white bg-teal-500 h-16 rounded-b-md ">
          <div className="hover:-translate-y-2 transition-transform">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shield-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12.462 20.87c-.153 .047 -.307 .09 -.462 .13a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .11 6.37" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-user-star"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
                <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <div className="flex flex-row mt-2">
          <div className="border-2 p-1 border-gray-200 rounded-md flex items-center">
            <img
              className=" w-10 h-10"
              src="https://www.apsth.com/assets/images/logo/logo.svg"
              alt="รูทส์ ฟิสิโอ คลินิกกายภาพบำบัด"
            />
          </div>
          <div className="flex-1 ml-2  items-center">
            <h3 className=" flex items-center">เอพีเอสทีเอช คลินิกกายภาพบำบัด</h3>
          </div>
        </div>

        <p className="text-sm text-gray-600 py-2">พบกับข้อเสนอสุดพิเศษประจำฤดูกาลนี้ ไม่ควรพลาด!</p>
        <div className="flex justify-between items-center mt-2">
          <div className="text-xl font-bold text-red-400">฿{price}</div>
          <span className="ml-2 text-sm font-medium text-gray-400 line-through">฿{oldPrice}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <div className="text-sm font-slim  text-red-400">ซื้อแล้ว</div>
            <span className="ml-1 text-sm font-slim  text-gray-400">3,200</span>
            <div className="text-sm  ml-1 font-slim  text-red-400">ครั้ง</div>
          </div>
          <div className="text-yellow-500 text-sm">{rating}</div>
        </div>
        <div className="flex gap-2 mt-2">
          {/* View Details Button */}
          <button
            onClick={() => {
              handleForMoreClick(id);
            }}
            className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg text-sm font-medium shadow hover:opacity-90 transition"
          >
            ดูรายละเอียด
          </button>
          {/* Add to Cart Button */}
          <div className="relative group">
            <button
              onClick={() => {
                // Add to cart logic
                console.log(`Added ${title} to cart`);
              }}
              className="p-2 bg-gradient-to-r from-teal-500 to-blue-400 text-white rounded-lg text-sm font-medium shadow hover:bg-accent transition"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-basket-plus"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 10l-2 -6" />
                  <path d="M7 10l2 -6" />
                  <path d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.359 2.043" />
                  <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M16 19h6" />
                  <path d="M19 16v6" />
                </svg>
              </div>
            </button>
            {/* Tooltip */}
            <div className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-2 min-w-max max-w-xs px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemsSuggestion = ({ locale }) => {
  const itemsPerPage = 8; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const handleForMoreClick = (id) => {
    return (window.location.href = `/${locale}/product/detail/${id}`);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-full mx-8 mt-6 mb-6">
      <div className="lg:flex">
        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Sort Bar */}

          {/* Offers Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentItems.map((offer) => (
              <OfferCard key={offer.id} handleForMoreClick={handleForMoreClick} {...offer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsSuggestion;
