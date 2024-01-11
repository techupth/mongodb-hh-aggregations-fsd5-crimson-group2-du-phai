// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      totalPrice: { $sum: "$total_price" },
      totalQuantity: { $sum: "$total_quantity" },
    },
  },
  { $sort: { totalPrice: -1 } },
]);
