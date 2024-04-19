import React from 'react'

const EnrolledCourse = () => {
  return (
    <div >
        <div className="bg-blue-800 p-4 rounded shadow-md mt-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-100">Intro to web dev</h3>
        <p className="text-neutral-300 mb-2">Progress: 50%</p>
        <div className="bg-gray-200 h-4 rounded">
          <div
            className="bg-blue-500 h-full rounded"
            style={{ width: `50%` }}
          ></div>
        </div>
      </div>
        <div className="bg-blue-800 p-4 rounded shadow-md mt-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-100">Data Science Essentials</h3>
        <p className="text-neutral-300 mb-2">Progress: 20%</p>
        <div className="bg-gray-200 h-4 rounded">
          <div
            className="bg-blue-500 h-full rounded"
            style={{ width: `20%` }}
          ></div>
        </div>
      </div>
        <div className="bg-blue-800 p-4 rounded shadow-md mt-4 mb-4">
        <h3 className="text-lg font-semibold mb-2 text-neutral-100">Digital Marketing Fundamentals"</h3>
        <p className="text-neutral-300 mb-2">Progress: 80%</p>
        <div className="bg-gray-200 h-4 rounded">
          <div
            className="bg-blue-500 h-full rounded"
            style={{ width: `80%` }}
          ></div>
        </div>
      </div>

    </div>
  )
}

export default EnrolledCourse