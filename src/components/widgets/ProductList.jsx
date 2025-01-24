import React, { useState } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Show the first page
    if (currentPage > 3) {
      pageNumbers.push(1);
      if (currentPage > 4) {
        pageNumbers.push('...');
      }
    }

    // Show the current page and nearby pages
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      pageNumbers.push(i);
    }

    // Show the last page
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg text-sm font-medium ${
          currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary'
        }`}
      >
        Previous
      </button>
      {renderPageNumbers().map((page, index) =>
        page === '...' ? (
          <span key={index} className="px-4 py-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              currentPage === page
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-primary hover:text-white'
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg text-sm font-medium ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-primary text-white hover:bg-primary'
        }`}
      >
        Next
      </button>
    </div>
  );
};

const FilterSection = () => {
  const [isPromotionOpen, setPromotionOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(true);
  const [isReviewScoreOpen, setReviewScoreOpen] = useState(true);
  const [isShowPromotion, setShowPromotion] = useState(true);

  return (
    <aside className="hidden lg:block w-64 p-4 rounded-lg bg-white shadow-lg lg:mr-6 transition-transform duration-300 hover:scale-105">
      <h4 className="text-2xl font-bold mb-6 text-gray-700 border-b pb-2">Filter by:</h4>

      {/* Promotion Filter */}
      <div className="mb-6">
        {/* Header with Icon */}
        <div
          className="flex justify-between items-center cursor-pointer p-3 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
          onClick={() => setPromotionOpen(!isPromotionOpen)}
        >
          <h4 className="font-semibold text-lg text-gray-700 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-teal-500 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a3 3 0 00-3 3H5a3 3 0 100 6h10a3 3 0 100-6h-2a3 3 0 00-3-3zm3 5h2a1 1 0 110 2h-2V7zm-3-3a1 1 0 110 2H9a1 1 0 110-2h1zm-4 3h2v2H6a1 1 0 110-2zm2 4H5a3 3 0 01-3-3v8a2 2 0 002 2h12a2 2 0 002-2v-8a3 3 0 01-3 3h-3v4a1 1 0 11-2 0v-4H8v4a1 1 0 11-2 0v-4z"
                clipRule="evenodd"
              />
            </svg>
            Promotions
          </h4>
          <span
            className={`text-sm font-bold transform transition-transform duration-300 ${
              isPromotionOpen ? 'rotate-180 text-teal-600' : 'rotate-0 text-gray-500'
            }`}
          >
            {isPromotionOpen ? '▲' : '▼'}
          </span>
        </div>

        {/* Collapsible Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isPromotionOpen ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <label className="flex items-center cursor-pointer mt-4 p-2 rounded-lg bg-white shadow-sm hover:bg-blue-50 transition duration-300">
            <input
              type="checkbox"
              className="hidden peer"
              checked={isShowPromotion}
              onChange={(e) => setShowPromotion(e.target.checked)}
            />
            <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:bg-teal-500 peer-checked:border-teal-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white hidden peer-checked:block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="ml-3 text-gray-700 text-sm font-medium hover:text-teal-500">Only show promotions</span>
          </label>
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        {/* Header */}
        <div
          className="flex justify-between items-center cursor-pointer p-3 bg-gradient-to-r from-green-50 via-white to-green-50 rounded-lg shadow-md hover:bg-green-100 transition duration-300"
          onClick={() => setCategoryOpen(!isCategoryOpen)}
        >
          <h4 className="font-semibold text-lg text-gray-700 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-teal-500 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 3h4a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 9h4a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-4a1 1 0 011-1zm9-9h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4a1 1 0 011-1zm0 9h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1z" />
            </svg>
            Category
          </h4>
          <span
            className={`text-sm font-bold transform transition-transform duration-300 ${
              isCategoryOpen ? 'rotate-180 text-teal-600' : 'rotate-0 text-gray-500'
            }`}
          >
            {isCategoryOpen ? '▲' : '▼'}
          </span>
        </div>

        {/* Dropdown Content */}
        <div
          className={`overflow-auto transition-all duration-500 ease-in-out ${
            isCategoryOpen ? 'max-h-56 animate-slideDown' : 'max-h-0 animate-slideUp'
          }`}
        >
          <ul className="space-y-3 mt-3 p-2 bg-white rounded-lg shadow-sm border border-gray-200">
            {['All', 'Make', 'Skin', 'Hair', 'Bath & Body', 'Fragrance', 'Health & Wellness'].map((category, index) => (
              <li
                key={category}
                className="opacity-0 transform translate-y-4 transition-all duration-300 ease-out"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isCategoryOpen ? 1 : 0,
                  transform: isCategoryOpen ? 'translateY(0)' : 'translateY(10px)',
                }}
              >
                <button className="flex items-center text-gray-600 hover:text-teal-500 hover:bg-teal-100 px-3 py-2 rounded-lg transition duration-300 w-full text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-teal-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Review Score */}
      <div className="mb-6">
        {/* Header */}
        <div
          className="flex justify-between items-center cursor-pointer p-3 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
          onClick={() => setReviewScoreOpen(!isReviewScoreOpen)}
        >
          <h4 className="font-semibold text-lg text-gray-700 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-teal-500 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.367 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118l-3.367-2.448a1 1 0 00-1.175 0l-3.367 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.32 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
            Review Score
          </h4>
          <span
            className={`text-sm font-bold transform transition-transform duration-300 ${
              isReviewScoreOpen ? 'rotate-180 text-teal-600' : 'rotate-0 text-gray-500'
            }`}
          >
            {isReviewScoreOpen ? '▲' : '▼'}
          </span>
        </div>

        {/* Dropdown Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isReviewScoreOpen ? 'max-h-56' : 'max-h-0'
          }`}
        >
          <ul className="space-y-3 mt-3 p-2">
            {[
              { stars: '★★★★★', color: 'text-yellow-400', value: 5 },
              { stars: '★★★★☆', color: 'text-yellow-400', value: 4 },
              { stars: '★★★☆☆', color: 'text-yellow-400', value: 3 },
              { stars: '★★☆☆☆', color: 'text-yellow-400', value: 2 },
              { stars: '★☆☆☆☆', color: 'text-yellow-400', value: 1 },
            ].map((rating, idx) => (
              <li key={idx} className="flex items-center space-x-3 hover:bg-teal-50 px-2 py-1 rounded-lg transition">
                <input
                  type="radio"
                  id={`rating-${rating.value}`}
                  name="review-score"
                  value={rating.value}
                  className="hidden peer"
                />
                <label htmlFor={`rating-${rating.value}`} className="cursor-pointer flex items-center space-x-2 w-full">
                  {/* ปุ่มวงกลม */}
                  <span
                    className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center
              peer-checked:bg-teal-500 peer-checked:border-teal-500
              hover:bg-teal-500 hover:border-teal-500 transition"
                  ></span>
                  {/* ดาวสีเหลือง */}
                  <span className={`text-2xl leading-none ${rating.color}`}>{rating.stars}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

const OfferCard = ({ imgSrc, title, price, oldPrice, rating, id, handleForMoreClick, locale }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl`}
    >
      <div className="flex flex-row -space-x-8">
        <a href={`/${locale}/product/detail/${id}`} title={title} className="object-cover w-full">
          <img src={imgSrc} alt={title} className="" />
        </a>
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
        <a href={`/${locale}/product/detail/${id}`} title={title}>
          <h3 className="text-lg font-medium text-primary text-gray-900">{title}</h3>
        </a>

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

const ProductList = ({ header, subHeader, locale, data }) => {
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
        {/* Filters */}
        <FilterSection />

        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Sort Bar */}
          <div className="flex flex-wrap justify-between items-center mb-6">
            <div className="w-full lg:w-auto mb-4 lg:mb-0">
              <h2 className="text-2xl font-bold">{header}</h2>
              <span className="text-gray-600">{subHeader}</span>
            </div>
            <div className="flex flex-wrap w-full lg:w-auto gap-4">
              <input type="text" placeholder="Search" className="border rounded-2xl px-3 py-2 text-sm w-full lg:w-64" />
              <select className="border rounded-2xl px-3 py-2 text-sm w-full lg:w-auto">
                <option value="most-recent">Most recent</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Offers Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentItems.map((offer) => (
              <OfferCard key={offer.id} locale={locale} handleForMoreClick={handleForMoreClick} {...offer} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
