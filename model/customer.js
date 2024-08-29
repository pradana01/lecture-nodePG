const pool = require('../db/connection');

class Customer {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    };

    static async readCustomers() {
        const customerQuery = `SELECT * FROM "Customers"`;
        let {rows} = await pool.query(customerQuery);
        return rows.map(el => {
            return new Customer(el.id, el.name)
        })
    }
};

module.exports = Customer;