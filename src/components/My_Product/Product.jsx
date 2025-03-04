import React from "react";

function Product() {
  const data = [
    {
      img: "/assets/HANGINGPACKOF310.webp",
      name: "Mens clothing",
      type: "t-shirts",
    },
    {
      img: "/assets/sweatshirts.webp",
      name: "Sweat-shirts",
      type: "Men/Women",
    },

    {
      img: "/assets/shopping.webp",
      name: "Red Sweater",
      type: "Women"
    }

  ];

  return (
    <>
      {/* My Products */}
      <div className="mt-8 ml-4 w-[750px] h-[150px]">
        <h2 className="text-xl font-bold text-gray-800 mb-4">My Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Product Cards */}
          {data.map((product, index) => (
            <div key={index} className="border bg-gray-300 rounded-lg p-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-48 h-58 object-cover rounded-lg mb-4"
              />
              
              <p className="text-white bg-blue-500 text-left px-2 py-1 rounded mb-2 w-[120px]   ">{product.name}</p>
              <p className="text-white bg-blue-500 text-left px-2 py-1 rounded inline-block">{product.type}</p>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;