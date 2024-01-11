// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { month: { $month: "$created_at" }, year: { $year: "$created_at" } },
      totalPrice: { $sum: "$total_price" },
    },
  },
  { $sort: { "_id.month": -1, "_id.year": -1 } },
]);
