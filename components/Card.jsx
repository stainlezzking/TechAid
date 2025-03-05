import React from 'react'

export const Card = ({ title, value }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-center">
      <h3 className="text-gray-600 text-lg">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

