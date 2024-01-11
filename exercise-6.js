// Paste the complete MQL here
db.pizzaOrders
  .aggregate([
    {
      $group: {
        _id: {
          year: { $year: { $toDate: "$created_at" } },
          month: { $month: { $toDate: "$created_at" } },
        },
        total_price_by_month: { $sum: "$total_price" },
      },
    },
    { $match: { "_id.month": 7, "_id.year": 2021 } },
  ])
  .sort({ _id: -1 });
