class View {
    static showAllCustomers(data) {
        console.log(data);
        console.table(data);
    };

    static showAllOrders(data) {
        console.log(data, "aksjdhfaisdfkajsb")
        data = data.map(el => {
            return {
                "Date": el.formattedDate,
                "Product Name": el.productName,
                "Qty": el.quantity,
                "Price": el.priceInUSD,
                "Customer": el.customer
            }
        })
        console.log(data);
        console.table(data);
    };

    static showOneOrder(data) {
        data = {
            "Date": data.formattedDate,
            "Product Name": data.priceInUSD,
            "Qty": data.quantity,
            "Price": data.productPrice,
            "Customer": data.customer
        }
        console.log(data);
        console.table(data);
    };

    static errorMessage(msg) {
        console.log(msg)
    };
}

module.exports = View;