const Controller = require("./controller");

const [command, opt1] = process.argv.slice(2);

switch (command) {
    case "customers":
        Controller.allCustomers();
        break;
    case "orders":
        console.log("Ini koneksi ke controller all orders")
        Controller.allOrders();
        break;
    case "order":
        console.log("Ini koneksi ke controller one order with id")
        Controller.oneOrder(opt1)
        break;

    default:
        console.log("Invalid command")
        break;
}