const CartPage = () => {
    const cartItems = [
      { id: 1, name: "Men's Winter Jacket", price: 99, quantity: 1, image: "/path-to-image.jpg" },
    ];
  
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
  
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 border p-4 rounded-lg">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div className="flex-1">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-500">Price: ${item.price}</p>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md">Remove</button>
            </div>
          ))}
        </div>
  
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-bold">Total: ${totalPrice}</p>
          <button className="px-4 py-2 bg-black text-white rounded-md">Checkout</button>
        </div>
      </div>
    );
  };
  
  export default CartPage;
  