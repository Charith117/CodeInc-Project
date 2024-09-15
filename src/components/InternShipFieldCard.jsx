import React from 'react';

function InternshipFieldCard({ title, description, image }) {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <img src={image} alt={title} className="object-cover w-full h-48" />
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default InternshipFieldCard;