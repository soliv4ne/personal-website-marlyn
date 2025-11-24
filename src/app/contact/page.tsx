"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center px-6 py-20">
      {/* Title */}
      <h1 className="text-4xl font-bold text-pink-700 mb-10 tracking-wide">
        Contact Me
      </h1>

      {/* Card */}
      <div className="bg-white border border-pink-300 shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        
        <p className="text-lg font-semibold text-pink-700 mb-2">
          Email
        </p>
        <p className="text-gray-700 mb-6">
          mamisola@gbox.ncf.edu.ph
        </p>

        <p className="text-lg font-semibold text-pink-700 mb-2">
          Facebook
        </p>
        <p className="text-gray-700">
          Marlyn Amisola
        </p>
      </div>
    </div>
  );
}
