import React from "react";

const Notifications = () => {
  const notifications = [
    "Your account balance has been updated.",
    "New transaction of $100 completed.",
    "Your password was successfully changed.",
  ];

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="mb-2 p-2 bg-gray-100 rounded">
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
