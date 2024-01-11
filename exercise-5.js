// Paste the complete MQL here
db.pizzaOrders
  .aggregate([
    {
      $group: {
        _id: {
          year: { $year: { $toDate: "$created_at" } },
          month: { $month: { $toDate: "$created_at" } },
        },
        total_sales: { $sum: "$total_price" },
      },
    },
  ])
  .sort({ _id: -1 });
