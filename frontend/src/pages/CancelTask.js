import React, { useState } from "react";

const CancelTask = () => {
  const [isCanceled, setIsCanceled] = useState(false);

  const handleCancel = () => {
    setIsCanceled(true);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cancel Task</h2>
      <button
        onClick={handleCancel}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Cancel Task
      </button>
      {isCanceled && <p className="text-green-500 mt-4">Task has been canceled.</p>}
    </div>
  );
};

export default CancelTask;
