// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { $year: "$created_at" },
      totalPrice: { $sum: "$total_price" },
    },
  },
  { $sort: { _id: -1 } },
]);
