import React, { useState } from 'react';

function truncateText(text, maxLength) {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none"
      >
        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.47604 20.1718C1.28737 15.4172 0.69304 13.0412 1.94127 11.4425C3.18812 9.84375 5.64026 9.84375 10.5404 9.84375H16.9547C21.8562 9.84375 24.3056 9.84375 25.5538 11.4425C26.8021 13.0398 26.2077 15.4186 25.0191 20.1718C24.2627 23.1961 23.8858 24.7076 22.7581 25.5887C21.6304 26.4684 20.0719 26.4684 16.9547 26.4684H10.5404C7.42326 26.4684 5.8647 26.4684 4.73699 25.5887C3.60928 24.7076 3.23107 23.1961 2.47604 20.1718Z" stroke="#111C2D" stroke-width="1.25" />
          <path opacity="0.5" d="M24.1392 10.5366L23.1556 6.92769C22.776 5.53538 22.5862 4.83991 22.1969 4.31485C21.8088 3.7932 21.2816 3.39135 20.6758 3.15528C20.0662 2.91699 19.3458 2.91699 17.905 2.91699M3.3584 10.5366L4.34202 6.92769C4.72162 5.53538 4.91142 4.83991 5.30071 4.31485C5.68887 3.7932 6.21602 3.39135 6.82187 3.15528C7.43144 2.91699 8.15184 2.91699 9.59265 2.91699" stroke="#111C2D" stroke-width="1.25" />
          <path d="M9.59229 2.91713C9.59229 2.5497 9.73825 2.19732 9.99806 1.93751C10.2579 1.6777 10.6102 1.53174 10.9777 1.53174H16.5192C16.8867 1.53174 17.239 1.6777 17.4988 1.93751C17.7587 2.19732 17.9046 2.5497 17.9046 2.91713C17.9046 3.28455 17.7587 3.63693 17.4988 3.89674C17.239 4.15656 16.8867 4.30252 16.5192 4.30252H10.9777C10.6102 4.30252 10.2579 4.15656 9.99806 3.89674C9.73825 3.63693 9.59229 3.28455 9.59229 2.91713Z" stroke="#111C2D" stroke-width="1.25" />
          <path opacity="0.5" d="M8.20557 15.3853V20.9268M19.2887 15.3853V20.9268M13.7471 15.3853V20.9268" stroke="#111C2D" stroke-width="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[400px] rounded-lg bg-white shadow-md p-2">
          <div class="grid grid-cols-3 gap-4 p-2">
            <div class="col-span-2">
              <span className='text-[20px]'>
                ตะกร้าสินค้าของคุณ
              </span>
            </div>
            <div class="text-end">
              <span className='text-[20px]'>
                1 ชิ้น
              </span>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr_auto] items-center p-4 gap-4 border-t">
            {/* Image */}
            <img
              src="https://mersiclinic-thailand.com/wp-content/uploads/2024/07/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-Q-Switch.jpg"
              alt=""
              className="object-cover w-[60px] h-[60px] shadow rounded-lg"
            />
            {/* Product Info */}
            <div className="flex flex-col">
              <a
                href="#"
                className="truncate max-w-[200px] text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
              >
                {truncateText('โปร CO2 Laser', 20)}
              </a>
              <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                ฿2,199
              </p>
            </div>
            {/* Quantity and Remove Button */}
            <div className="flex items-center justify-end gap-6">
              <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                x1
              </p>
              <button
                type="button"
                className="text-red-500 hover:text-red-600 flex items-center justify-end"
              >
                <span className="sr-only">Remove</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4 py-3 px-2 border-t">
            <div class="col-span-2">
              <span className='text-[20px]'>
                รวม
              </span>
            </div>
            <div class="text-end">
              <span className='text-[20px]'>
                ฿2,199
              </span>
            </div>
          </div>
          <button class="w-full items-center justify-center h-10 flex-1 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg text-sm font-medium shadow hover:opacity-90 transition">ดูตะกร้าสินค้า</button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
