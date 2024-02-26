export const data = {
  accounting: {
    "revenue": 150000,
    "expenses": 100000,
    "profit": 50000,
    "assets": 300000,
    "liabilities": 100000,
    "equity": 200000
  },
  sales: {
    "total_sales": 500000,
    "top_products": [
      {
        "name": "Product A",
        "sales": 150000
      },
      {
        "name": "Product B",
        "sales": 120000
      },
      {
        "name": "Product C",
        "sales": 100000
      },
      {
        "name": "Product D",
        "sales": 90000
      },
      {
        "name": "Product E",
        "sales": 80000
      },
      {
        "name": "Product F",
        "sales": 70000
      }
    ]
  },
  marketing: {
    "total_campaigns": 10,
    "campaigns": [
      {
        "name": "Campaign X",
        "cost": 50000,
        "impact": "High"
      },
      {
        "name": "Campaign Y",
        "cost": 30000,
        "impact": "Medium"
      },
      {
        "name": "Campaign Z",
        "cost": 20000,
        "impact": "Low"
      },
      {
        "name": "Campaign W",
        "cost": 40000,
        "impact": "High"
      },
      {
        "name": "Campaign V",
        "cost": 25000,
        "impact": "Medium"
      }
    ]
  }
}

export const summary = {
  accounting: {
    text: "The sales report indicates a diverse range of product performance. Product A leads the pack with sales reaching 150,000 units, closely followed by Product B at 120,000 units. Product C maintains a solid position with 100,000 units sold. Additionally, Product D, Product E, and Product F contribute significantly to the overall sales, with 90,000, 80,000, and 70,000 units sold, respectively.",
    highlighted: [   // 150,000
      {start: 112, end: 119},
      {start: 153, end: 160},
      {start: 203, end: 210},
      {start: 256, end: 265}
    ]
  },
  sales: {
    text: "The sales report indicates a diverse range of product performance. Product A leads the pack with sales reaching 150,000 units, closely followed by Product B at 120,000 units. Product C maintains a solid position with 100,000 units sold. Additionally, Product D, Product E, and Product F contribute significantly to the overall sales, with 90,000, 80,000, and 70,000 units sold, respectively.",
    highlighted: [   // 150,000
      {start: 112, end: 119},
      {start: 153, end: 160},
      {start: 203, end: 210},
      {start: 256, end: 265}
    ]
  },
  marketing: {
    text: "The sales report indicates a diverse range of product performance. Product A leads the pack with sales reaching 150,000 units, closely followed by Product B at 120,000 units. Product C maintains a solid position with 100,000 units sold. Additionally, Product D, Product E, and Product F contribute significantly to the overall sales, with 90,000, 80,000, and 70,000 units sold, respectively.",
    highlighted: [   // 150,000
      {start: 112, end: 119},
      {start: 153, end: 160},
      {start: 203, end: 210},
      {start: 256, end: 265}
    ]
  }
}

