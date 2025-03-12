// src/pages/AccountSecurity.js
import React from "react";

const AccountSecurity = () => {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Account Security</h2>
      <p className="text-gray-700">Enable Two-Factor Authentication (2FA) for extra security.</p>
      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md mt-4">Enable 2FA</button>
    </div>
  );
};

export default AccountSecurity;
