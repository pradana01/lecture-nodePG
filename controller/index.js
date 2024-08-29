const Customer = require("../model/customer");
const Order = require("../model/order");
const View = require("../view");

class Controller {
    static async allCustomers() {
        // Ini akan konek ke Model dan view
        try {
            let customers = await Customer.readCustomers();
            View.showAllCustomers(customers);
        } catch (error) {
            View.errorMessage(error.message)
        }
    }

    static async allOrders() {
        // Ini akan konek ke model dan view
        try {
            let orders = await Order.readOrders();
            View.showAllOrders(orders);
        } catch (error) {
            View.errorMessage(error.message)
        }
    }

    static async oneOrder(id) {
        // Ini akan konek ke model dan view
        try {
            let order = await Order.readOneOrder(id);
            View.showOneOrder(order);
        } catch (error) {
            View.errorMessage(error.message)
        }
    };
};

module.exports = Controller;