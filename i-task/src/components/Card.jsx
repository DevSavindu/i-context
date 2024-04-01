import React from "react";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    color: "gray", // Red color
  },
  {
    id: 2,
    name: "Premium Tee",
    color: "gray", // Blue color
  },
  {
    id: 3,
    name: "Casual Tee",
    color: "gray", // Green color
  },
  {
    id: 4,
    name: "Formal Shirt",
    color: "gray", // Orange color
  },
  {
    id: 5,
    name: "Formald Shirt",
    color: "gray", // Orange color
  },
  {
    id: 6,
    name: "Formaldf Shirt",
    color: "gray", // Orange color
  },
];

export default function Example() {

  return (
    <div className="relative bg-white rounded-md">
      <div className="mx-auto max-w-[250px] sm:max-w-screen-xl px-4 py-8 sm:px-6 md:px-8">
        <div className="sm:ml-64 transition-all duration-300 ml-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="w-full sm:w-1/2 md:w-full h-48 sm:h-64 md:h-72 bg-gray-200 flex flex-col justify-center items-center p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                </div>
                <div className="flex justify-center items-center p-4">
                  <br />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
