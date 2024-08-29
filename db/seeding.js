const fs = require('fs');
const pool = require('./connection');

let customers = JSON.parse(fs.readFileSync('./data/customers.json', "utf-8"));
customers = customers.map(el => {
    return `('${el.name}')`
}).join(',\n');

const customerQuery = `
    INSERT INTO "Customers" ("name")
        VALUES ${customers}
    RETURNING *
`

let orders = JSON.parse(fs.readFileSync('./data/orders.json', "utf-8"));
orders = orders.map(el => {
    let {date, productName, quantity, productPrice, CustomerId} = el;
    return `('${date}', '${productName}', '${quantity}', '${productPrice}', '${CustomerId}')`
}).join(',\n');

const orderQuery = `
    INSERT INTO "Orders" ("date", "productName", "quantity", "productPrice", "CustomerId")
        VALUES ${orders}
    RETURNING *
`

// console.log(orderQuery)


async function seeding() {
    try {
        let customerRes = await pool.query(customerQuery);
        console.log(customerRes.rows);
        let orderRes = await pool.query(orderQuery);
        console.log(orderRes.rows);
    } catch (error) {
        console.log(error.message)
    };
};

seeding();