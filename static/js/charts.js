/* ==========================================
   SMART SALES ANALYTICS SYSTEM
   charts.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Sales by Region
    // ===============================

    const regionChart = document.getElementById("salesRegion");

    if (regionChart) {

        new Chart(regionChart, {

            type: "bar",

            data: {

                labels: ["West", "East", "Central", "South"],

                datasets: [{

                    label: "Sales",

                    data: [725000, 610000, 540000, 430000],

                    backgroundColor: [

                        "#0d6efd",

                        "#198754",

                        "#ffc107",

                        "#dc3545"

                    ]

                }]

            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        display: false

                    }

                }

            }

        });

    }

    // ===============================
    // Profit by Category
    // ===============================

    const categoryChart = document.getElementById("profitCategory");

    if (categoryChart) {

        new Chart(categoryChart, {

            type: "pie",

            data: {

                labels: [

                    "Technology",

                    "Furniture",

                    "Office Supplies"

                ],

                datasets: [{

                    data: [42, 25, 33],

                    backgroundColor: [

                        "#0d6efd",

                        "#198754",

                        "#ffc107"

                    ]

                }]

            }

        });

    }

    // ===============================
    // Monthly Sales
    // ===============================

    const monthlyChart = document.getElementById("monthlySales");

    if (monthlyChart) {

        new Chart(monthlyChart, {

            type: "line",

            data: {

                labels: [

                    "Jan","Feb","Mar","Apr",

                    "May","Jun","Jul","Aug",

                    "Sep","Oct","Nov","Dec"

                ],

                datasets: [{

                    label: "Sales",

                    data: [

                        120,145,160,175,

                        200,215,240,255,

                        275,290,310,345

                    ],

                    fill: false,

                    borderColor: "#0d6efd",

                    tension: .4

                }]

            }

        });

    }

    // ===============================
    // Customer Segment
    // ===============================

    const segmentChart = document.getElementById("segmentChart");

    if (segmentChart) {

        new Chart(segmentChart, {

            type: "doughnut",

            data: {

                labels: [

                    "Consumer",

                    "Corporate",

                    "Home Office"

                ],

                datasets: [{

                    data: [52,30,18],

                    backgroundColor: [

                        "#0d6efd",

                        "#198754",

                        "#ffc107"

                    ]

                }]

            }

        });

    }

    // ===============================
    // Top Products
    // ===============================

    const productChart = document.getElementById("topProducts");

    if (productChart) {

        new Chart(productChart, {

            type: "bar",

            data: {

                labels: [

                    "Phones",

                    "Chairs",

                    "Binders",

                    "Storage",

                    "Tables"

                ],

                datasets: [{

                    label: "Sales",

                    data: [

                        96000,

                        83000,

                        72000,

                        65000,

                        61000

                    ],

                    backgroundColor: "#198754"

                }]

            }

        });

    }

    // ===============================
    // Discount vs Profit
    // ===============================

    const discountChart = document.getElementById("discountProfit");

    if (discountChart) {

        new Chart(discountChart, {

            type: "scatter",

            data: {

                datasets: [{

                    label: "Discount vs Profit",

                    data: [

                        {x:5,y:95},

                        {x:10,y:85},

                        {x:15,y:74},

                        {x:20,y:60},

                        {x:30,y:42},

                        {x:40,y:18}

                    ],

                    backgroundColor: "#dc3545"

                }]

            },

            options: {

                scales: {

                    x: {

                        title: {

                            display: true,

                            text: "Discount %"

                        }

                    },

                    y: {

                        title: {

                            display: true,

                            text: "Profit"

                        }

                    }

                }

            }

        });

    }

});