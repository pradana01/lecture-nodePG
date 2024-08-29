const pool = require('../db/connection');

class Order {
    constructor(id, date, productName, quantity, productPrice, CustomerId, customer) {
        this.id = id;
        this.date = date;
        this.productName = productName;
        this.quantity = quantity;
        this.productPrice = productPrice;
        this.CustomerId = CustomerId;
        this.customer = customer;
    };

    get formattedDate() {
        return this.date.toLocaleString("id-ID", {
            dateStyle: "short"
        })
    }

    get priceInUSD() {
        return this.productPrice.toLocaleString("en-US", {style:"currency", currency:"USD"});
    }

    static async readOrders() {
        const orderQuery = `
            SELECT * 
            FROM "Orders" o
            JOIN "Customers" c ON c."id" = o."CustomerId"
            ORDER BY "productPrice" ASC
        `;
        let {rows} = await pool.query(orderQuery);
        console.log(rows, "<<<<<<<")
        return rows.map(el => {
            let {id, date, productName, quantity, productPrice, CustomerId, name} = el;
            return new Order(id, date, productName, quantity, productPrice, CustomerId, name)
        })
    }

    static async readOneOrder(param) {
        const orderQuery = `
            SELECT 
            o.*,
            c."name" AS "customerName"
            FROM "Orders" o
            JOIN "Customers" c ON c."id" = o."CustomerId"
            WHERE o."id" = ${param}
        `;
        let {rows} = await pool.query(orderQuery);
        let {id, date, productName, quantity, productPrice, CustomerId, customerName} = rows[0];
        return new Order(id, date, productName, quantity, productPrice, CustomerId, customerName)   
    }


};

module.exports = Order;