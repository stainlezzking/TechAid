"use client"

import { useState } from 'react';
import Image from "next/image";

export default function InputWithImageAndText() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
    <div className="relative w-full max-w-xs">
      {/* Custom Label as a placeholder with Image and Text */}
      <div className={`font-extralight absolute left-3 top-1/2 transform -translate-y-1/2 ${value && 'hidden'}`}>
        <img
          src="/path/to/your/image.png" // Replace with your image path
          alt="icon"
          className="inline-block w-5 h-5 mr-2"
        />
        Search...
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="pl-10 py-2 px-4 border rounded-md w-full focus:outline-none"
      />
    </div>

<div className="relative w-full max-w-xs">
{/* Custom "placeholder" with image and text */}
<div
  className={`absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center ${
    value ? "hidden" : ""
  }`}
>
  {/* Use Next.js Image component */}
  <Image
    src="/path/to/your/image.png" // Path to your image
    alt="search icon"
    width={20} // Set width
    height={20} // Set height
    className="mr-2"
  />
  <span>Search...</span>
</div>

{/* Input Field */}
<input
  type="text"
  value={value}
  onChange={handleChange}
  className="pl-10 py-2 px-4 border rounded-md w-full focus:outline-none"
/>
</div>
</div>
  );
}