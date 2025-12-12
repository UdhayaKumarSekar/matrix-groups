import React from "react";

interface CardProps {
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ title = "Card Title", description = "Card Description" }) => {
  return (
    <div className="border rounded-lg p-5 shadow-sm bg-white">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  );
};

export default Card;
