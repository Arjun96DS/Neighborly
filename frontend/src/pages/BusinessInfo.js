// src/pages/BusinessInfo.js
import React from "react";

const BusinessInfo = () => {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Business Information</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
          <input type="text" id="businessName" className="mt-1 block w-full border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700">Business Email</label>
          <input type="email" id="businessEmail" className="mt-1 block w-full border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md mt-4">Update Business Info</button>
      </form>
    </div>
  );
};

export default BusinessInfo;
