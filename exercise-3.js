// Paste the complete MQL here
db.pizzaOrders.aggregate([
  { $match: { size: "medium" } },
  {
    $group: {
      _id: "$size",
      totalPrice: { $sum: "$total_price" },
      totalQuantity: { $sum: "$total_quantity" },
    },
  },
]);
