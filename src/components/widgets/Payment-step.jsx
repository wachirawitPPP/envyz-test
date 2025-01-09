import React, { useEffect, useState } from 'react';

const userData = {
  pay_later_credit: 100000000,
};

const PaymentStep = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [products, setProducts] = useState([
    {
      image: 'https://pribta-tangerine.com/wp-content/uploads/2024/08/Pro1500.png',
      name: 'ยกกระชับด้วย HIFU ทั่วใบหน้า',
      clinic: 'APS Clinic',
      price: 3500,
      quantity: 1,
      selected: true,
    },
    {
      image: 'https://pribta-tangerine.com/wp-content/uploads/2024/08/Pro1500.png',
      name: 'โปรแกรมโบท็อกซ์หน้า Allergan 50 ยูนิต',
      clinic: 'APS Clinic',
      price: 1000,
      quantity: 3,
      selected: true,
    },
  ]);

  const [discountCode, setDiscountCode] = useState('');
  const [selectedDiscountCode, setSelectedDiscountCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [paymentModal, setPaymentModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const discountCodes = {
    SAVE10: 10, // 10% discount
    SAVE20: 20, // 20% discount
    FREESHIP: 5, // Flat 5% discount
  };
  useEffect(() => {
    console.log(currentStep);
    console.log(paymentModal);
  });

  const steps = [
    { id: 1, label: 'Select Products' },
    { id: 2, label: 'Add Payment Details' },
    { id: 3, label: 'Confirm Payment' },
  ];

  const handleNext = () => {
    if (currentStep === 2) {
      setPaymentModal(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handlePaymentSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      alert('payment successfully submitted');
      setPaymentModal(false);
      setCurrentStep(3);
      setLoading(false);
    }, 2000); // 2-second delay before closing the modal and proceeding
  };

  const handleToggleSelect = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].selected = !updatedProducts[index].selected;
    setProducts(updatedProducts);
  };

  const handleIncrease = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;
    setProducts(updatedProducts);
  };

  const handleDecrease = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      setProducts(updatedProducts);
    }
  };

  const handleInputChange = (index, value) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = Math.max(1, parseInt(value) || 1);
    setProducts(updatedProducts);
  };

  const handleApplyDiscount = () => {
    const discount = discountCodes[discountCode.toUpperCase()] || 0;
    if (discount === 0) {
      window.alert('Invalid discount code. Please try again.');
    } else {
      setDiscountAmount(discount);
      setSelectedDiscountCode(discountCode.toUpperCase());
      window.alert(`Discount code applied! You get ${discount}% off.`);
    }
  };

  const selectedProducts = products.filter((product) => product.selected);

  const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const totalItems = selectedProducts.reduce((sum, product) => sum + product.quantity, 0);

  const discountedPrice = totalPrice - (totalPrice * discountAmount) / 100;

  useEffect(() => {
    setFinalPrice(totalPrice);
    if (discountAmount > 0) {
      setFinalPrice(discountedPrice);
    }
  }, [discountAmount, totalPrice]);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Payment Process</h1>

      <div className="relative w-full mb-6 flex items-center">
        {/* Progress Line Background */}

        {/* Progress Line Active */}
        {/* <div
    className="absolute h-1 bg-primary rounded transition-all duration-500"
    style={{
      width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
      marginLeft: '1.25rem',
      marginRight: '1.25rem',
    }}
  ></div> */}

        {/* Steps */}
        <div className="relative flex justify-between w-full">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex-1 flex flex-col items-center">
              {/* Step Number */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold shadow-lg transition-all duration-500 ${
                  currentStep >= step.id ? 'bg-primary text-white scale-110' : 'bg-gray-300 text-gray-600 scale-100'
                }`}
              >
                {step.id}
              </div>
              {/* Step Label */}
              <p className={`mt-2 text-sm ${currentStep >= step.id ? 'text-primary font-semibold' : 'text-gray-500'}`}>
                {step.label}
              </p>
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-1/2 -right-1/2 -mt-4 w-full h-1 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-gray-300'
                  } transition-all duration-500`}
                  style={{ zIndex: -1 }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content for Each Step */}
      <div className=" shadow-md rounded-lg p-6 overflow-auto  border-4 border-primary">
        {currentStep === 1 && (
          <div>
            <table className="w-full text-sm mb-4">
              <thead className="border-b border-gray-300">
                <tr>
                  <th className="text-left p-4 font-medium"></th>
                  <th className="text-left p-4 font-medium">สินค้า/บริการ</th>
                  <th className="text-center p-4 font-medium">จำนวน</th>
                  <th className="text-right p-4 font-medium">ราคา</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr className="border-b" key={index}>
                    <td className="p-4 text-center">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={product.selected}
                          onChange={() => handleToggleSelect(index)}
                        />
                        <span
                          className={`w-5 h-5 flex items-center justify-center border-2 ${product.selected ? ` border-primary` : `border-gray-300`} rounded-md`}
                        >
                          {product.selected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                      </label>
                    </td>

                    <td className="p-4 flex flex-row gap-2 whitespace-nowrap">
                      <div>
                        <img src={product.image} alt={product.name} width={100} />
                      </div>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-gray-500 text-xs">{product.clinic}</div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="inline-flex items-center border rounded">
                        <button className="px-3 py-1 bg-gray-100" onClick={() => handleDecrease(index)}>
                          -
                        </button>
                        <input
                          type="number"
                          value={product.quantity}
                          onChange={(e) => handleInputChange(index, e.target.value)}
                          className="w-12 text-center outline-none"
                        />
                        <button className="px-3 py-1 bg-gray-100" onClick={() => handleIncrease(index)}>
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-right">฿{product.price * product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* <div className="mb-4">
              <input
                type="text"
                placeholder="ระบุรหัสส่วนลด"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
              <button
                onClick={handleApplyDiscount}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
              >
                ใช้ส่วนลด
              </button>
            </div> */}
            {discountAmount > 0 && (
              <div className="p-4 bg-green-100 border border-green-300 rounded mb-4">
                <h3 className="text-lg font-medium text-green-800">ใช้โค้ดส่วนลดแล้ว: {discountAmount}% Off 🎉</h3>
                <h3 className="text-sm text-green-600">
                  ประหยัดไป ฿{((totalPrice * discountAmount) / 100).toFixed(2)}
                </h3>
              </div>
            )}
            <div className="flex justify-end gap-2 items-center mt-4">
              <h3 className="text-lg font-medium">ยอดที่ต้องชำระ</h3>
              <div className="flex flex-row items-baseline gap-2">
                {discountAmount > 0 && <h3 className="text-red-500 line-through">฿{totalPrice}</h3>}

                <h3 className="text-lg text-primary font-medium">฿{discountedPrice.toFixed(2)}</h3>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <>
            {/* <div className="border-2 rounded-md p-4 w-4/12 my-2">
              <h2 className="text-xl font-semibold mb-4">รายละเอียดการจัดส่ง</h2>
              <div></div>
            </div>{' '} */}
            <div className="overflow-auto">
              <h2 className="text-xl font-semibold mb-4">รายการสินค้า/บริการ</h2>
              <ul className="mb-4">
                {selectedProducts.map((product, index) => (
                  <li key={index} className="flex justify-between mb-2 border-2">
                    <span className="flex flex-row gap-2">
                      <img src={product.image} alt={product.name} width={100} />
                      <div className=" flex flex-col">
                        <span className=" text-lg text-primary">{product.name}</span>
                        <span>
                          ราคา <span className="text-primary font-medium"> ฿ {product.price.toLocaleString()} </span>
                        </span>
                        <span>
                          จำนวน <span className="text-primary font-medium">{product.quantity}</span>
                        </span>
                      </div>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end items-center gap-6">
                <h3 className="text-lg">สินค้า/บริการทั้งหมด:</h3>
                <h3 className="text-primary">{totalItems} รายการ</h3>
              </div>
              <div className="flex justify-end items-center gap-6">
                <h3 className="text-lg ">ยอดทั้งหมด:</h3>
                <h3 className="text-primary">฿ {totalPrice.toLocaleString()}</h3>
              </div>
              <div className="flex justify-end items-center gap-6 ">
                <h3 className="text-lg ">ส่วนลด</h3>
                <h3 className="text-red-500">฿ {(totalPrice - discountedPrice).toLocaleString()}</h3>
              </div>
              <div className="flex justify-end items-center gap-6">
                <h2 className="text-lg font-bold">ยอดที่ต้องชำระ</h2>
                <h2 className="text-lg font-bold text-primary">฿ {finalPrice.toLocaleString()}</h2>
              </div>
            </div>
            {/* <h2 className="text-xl font-semibold mb-4">วิธีการชำระเงิน</h2>
            <div className="flex flex-row gap-4">
              {paymentMethods.map((method) => (
                <label
                  key={method.value}
                  className={`p-4 border w-4/12 rounded-lg cursor-pointer transition-all flex flex-col items-center gap-2 ${
                    selectedPaymentMethod === method.value ? 'border-primary border-2 ' : 'border-gray-300 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.value}
                    checked={selectedPaymentMethod === method.value}
                    onChange={() => handlePaymentMethodChange(method.value)}
                    className="hidden"
                  />
                  <img src={method.img} alt={method.label} className="w-20 h-10 object-contain" />
                  <div className="flex flex-row gap-2 items-baseline">
                    <span className="text-sm font-medium">{method.label}</span>
                    {method.value === 'paylater' && userData.pay_later_credit && (
                      <span className="text-primary">฿ {userData?.pay_later_credit.toLocaleString()}</span>
                    )}
                  </div>
                </label>
              ))}
            </div> */}
          </>
        )}

        {currentStep === 3 && (
          <div className="flex flex-col items-center justify-center py-8 px-4 text-center space-y-6">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-green-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Success Message */}
            <h2 className="text-2xl font-bold text-green-600">การชำระเงินสำเร็จ!</h2>
            <p className="text-gray-600">
              ขอบคุณสำหรับการชำระเงินของคุณ <br />
              ยอดเงินทั้งหมด ฿ <span className="text-primary font-semibold">{finalPrice.toLocaleString()}</span>{' '}
              ได้รับการดำเนินการแล้ว
            </p>

            {/* Summary of Payment */}
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4 text-left">
              <h3 className="text-lg font-semibold mb-4">สรุปการชำระเงิน</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">จำนวนรายการ:</span>
                <span className="font-medium">{totalItems} รายการ</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">ยอดทั้งหมด:</span>
                <span className="font-medium">฿ {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">ส่วนลด:</span>
                <span className="text-red-500">-฿ {(totalPrice - discountedPrice).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-t pt-2">
                <span className="text-gray-700 font-semibold">ยอดชำระทั้งหมด:</span>
                <span className="text-primary font-semibold">฿ {finalPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* Back to Home Button */}

            <button
              onClick={() => alert('กลับไปยังหน้าหลัก!')}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition duration-200"
            >
              จองบริการเลย!
            </button>
            <button
              onClick={() => (window.location.href = '/en/wellness')}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition duration-200"
            >
              กลับไปยังหน้าหลัก
            </button>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {currentStep === 1 ||
          (currentStep === 2 && (
            <button
              onClick={handlePrevious}
              className={`px-4 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 ${
                currentStep === 1 && 'opacity-50 pointer-events-none'
              }`}
              disabled={currentStep === 1}
            >
              ย้อนกลับ
            </button>
          ))}

        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark ${
            currentStep === steps.length && 'opacity-50 pointer-events-none'
          }`}
          disabled={currentStep === steps.length}
        >
          {currentStep === 1 ? 'Next' : currentStep === 2 ? 'ชำระเงิน' : 'เสร็จสิ้น'}
        </button>
      </div>

      {paymentModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl mx-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-primary p-4 rounded-t-lg">
              <h2 className="text-xl text-white font-bold">ยืนยันการชำระเงิน</h2>
              <button
                onClick={() => setPaymentModal(false)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-4">
              {/* Check if finalPrice is greater than available credit */}
              {finalPrice > userData.pay_later_credit ? (
                <div className="bg-red-50 border border-red-300 p-4 rounded-lg mb-4 flex items-center gap-3">
                  <span className="text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="icon icon-tabler icons-tabler-filled icon-tabler-alert-triangle"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-red-700 font-medium">
                      ยอดที่ต้องชำระ <span className="text-primary">฿ {finalPrice.toLocaleString()}</span>{' '}
                      มากกว่ายอดเครดิตที่มีในระบบ
                    </p>
                    <p>
                      เครดิตปัจจุบัน:{' '}
                      <span className="text-primary">฿ {userData.pay_later_credit.toLocaleString()}</span>{' '}
                      <a href="/en/wellness" className="mt-2 text-medium text-primary underline ">
                        เติมเครดิต ?
                      </a>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-coin"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                        <path d="M12 7v10" />
                      </svg>
                    </span>
                    <p className="font-medium">
                      จำนวนเครดิตในระบบ:{' '}
                      <span className="text-primary font-semibold">฿ {userData.pay_later_credit.toLocaleString()}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-credit-card-pay"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
                        <path d="M3 10h18" />
                        <path d="M16 19h6" />
                        <path d="M19 16l3 3l-3 3" />
                        <path d="M7.005 15h.005" />
                        <path d="M11 15h2" />
                      </svg>
                    </span>
                    <p className="font-medium">
                      ยอดที่ต้องชำระ:{' '}
                      <span className="text-yellow-500 font-semibold">฿ {finalPrice.toLocaleString()}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <span className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.1 0-2 .9-2 2v4h-1.79c-.45 0-.67.54-.35.85L12 17.71l3.14-3.14c.31-.31.09-.85-.36-.85H14v-4c0-1.1-.9-2-2-2z"
                        />
                      </svg>
                    </span> */}
                    <div className="flex justify-end w-full">
                      <p className="font-medium ">
                        เครดิตคงเหลือ:{' '}
                        <span className="text-primary font-semibold">
                          {' '}
                          ฿ {(userData.pay_later_credit - finalPrice).toLocaleString()}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-4 p-4 border-t">
              <button
                disabled={loading}
                onClick={() => setPaymentModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 transition-all duration-200"
              >
                ยกเลิก
              </button>
              <button
                onClick={finalPrice <= userData.pay_later_credit ? handlePaymentSubmit : undefined}
                disabled={finalPrice > userData.pay_later_credit || loading}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  finalPrice > userData.pay_later_credit || loading
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                ยืนยันการชำระเงิน
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentStep;
