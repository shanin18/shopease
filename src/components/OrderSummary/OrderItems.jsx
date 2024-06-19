import React from "react";

const OrderItems = ({ items }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Order Items</h3>
      <div className="space-y-5 h-[20vh] overflow-y-auto p-4 border rounded-md">
        {items?.map((item) => (
          <div
            key={item?._id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-14">
                <img alt="product image" src={item?.img} loading="lazy" />
              </div>
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600 font-medium">
                  Price: ${item.price}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Quantity: {item.quantity}</h3>
              <p className="text-sm text-gray-600 font-medium">
                Total: ${item.price * item?.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderItems;
