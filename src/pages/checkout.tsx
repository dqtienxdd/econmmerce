import { useState } from "react";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Step Indicator */}
      <div className="flex justify-center items-center space-x-4 mb-8">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 1 ? "bg-black text-white" : "bg-gray-300"}`}>1</div>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 2 ? "bg-black text-white" : "bg-gray-300"}`}>2</div>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 3 ? "bg-black text-white" : "bg-gray-300"}`}>3</div>
      </div>

      {/* Form Steps */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-bold mb-4">Address Information</h2>
          <form>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Country"
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-lg font-bold mb-4">Shipping Options</h2>
          <div className="flex flex-col space-y-4">
            <label className="flex items-center space-x-4">
              <input type="radio" name="shipping" className="w-4 h-4" />
              <span>Standard Shipping (4-7 Business Days)</span>
            </label>
            <label className="flex items-center space-x-4">
              <input type="radio" name="shipping" className="w-4 h-4" />
              <span>Express Shipping (2-3 Business Days)</span>
            </label>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-lg font-bold mb-4">Payment Information</h2>
          <form>
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </form>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded-md"
            onClick={prevStep}
          >
            Back
          </button>
        )}
        {step < 3 && (
          <button
            className="px-4 py-2 bg-black text-white rounded-md"
            onClick={nextStep}
          >
            Next
          </button>
        )}
        {step === 3 && (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={() => alert("Order placed!")}
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
