import React from 'react'

function WidgetButton({setModelOpen}) {
  return (
    <div>
        <button
          onClick={() => setModelOpen(true)}
          className="bg-gray-200 text-black border-2 border-gray-300 px-4 py-2 rounded ml-4 flex items-center hover:bg-gray-300 hover:border-gray-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add Widget
        </button>
    </div>
  )
}

export default WidgetButton
