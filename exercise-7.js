// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $match: {
      created_at: {
        $gte: ISODate("2021-01-01T00:00:00.000Z"),
        $lt: ISODate("2022-01-01T00:00:00.000Z"),
      },
    },
  },
  {
    $group: {
      _id: {
        month: { $month: "$created_at" },
        year: { $year: "$created_at" },
      },
      totalPrice: { $sum: "$total_price" },
    },
  },
  { $sort: { totalPrice: 1 } },
  { $limit: 1 },
]);
