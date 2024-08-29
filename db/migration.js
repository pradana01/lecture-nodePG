const pool = require("./connection");

const customerQuery = `
    CREATE TABLE IF NOT EXISTS "Customers" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(50) NOT NULL
    )
`;

const orderQuery = `
    CREATE TABLE IF NOT EXISTS "Orders" (
        "id" SERIAL PRIMARY KEY,
        "date" DATE NOT NULL,
        "productName" VARCHAR(50) NOT NULL,
        "quantity" INT NOT NULL,
        "productPrice" INT NOT NULL,
        "CustomerId" INT NOT NULL REFERENCES "Customers" ("id")
            ON DELETE CASCADE
            ON UPDATE CASCADE
    )
`;

async function migrate() {
    try {
        await pool.query(`DROP TABLE IF EXISTS "Orders", "Customers"`);
        console.log("Successfully drop tables");
        await pool.query(customerQuery);
        console.log("Successfully create customer table");
        await pool.query(orderQuery);
        console.log("Successfully create order table");
    } catch (error) {
        console.log(error.message)
    };
};

migrate();