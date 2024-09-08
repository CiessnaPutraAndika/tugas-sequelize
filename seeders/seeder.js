import Customer from "../models/CustomerModels.js";
import Order from "../models/OrderModels.js";
import Table from "../models/TableModels.js";

const createSeeder = async () => {
    const customer = await Customer.create({
        name: "Ciessna Putra Andika",
        reservation_time: new Date(),     
    });

    const table = await Table.create({
        number_table: "Meja 1",
        capacity: 4,
        location_table: "indoor",
        UserId: customer.dataValues.id,
    })
    
    const order1 = await Order.create({
        order_makanan: "Pecel Lele",
        order_date: new Date(),
        total_price: 15000,
        status: "di proses",
        UserId: customer.dataValues.id,
        TableId: table.dataValues.id,
    })

    const order2 = await Order.create({
        order_makanan: "Bebek Goreng",
        order_date: new Date(),
        total_price: 20000,
        status: "di proses",
        UserId: customer.dataValues.id,
        TableId: table.dataValues.id,
    })

    const findTableByCustomer = await Table.findAll({
        where: {
            UserId: customer.dataValues.id,
        },
        attributes: ["number_table", "capacity", "location_table", "UserId"],
        include: [
            {
                model: Customer,
                as: "Customer",
                required: true,
                attributes: ["id", "name", "reservation_time"],
            }
        ]
    })

    const findOrderByCustomer = await Table.findAll({
        where: {
            UserId: customer.dataValues.id,
        },
        attributes: ["number_table", "capacity", "location_table", "UserId"],
        include: [
            {
                model: Customer,
                as: "Customer",
                required: true,
                attributes: ["id", "name", "reservation_time"],
            }
        ]
    })

    return { customer, findTableByCustomer, findOrderByCustomer };
}

const { customers, findTableByCustomer : tables, findOrderByCustomer : orders } = await createSeeder();

console.log(customers, tables, orders);
// customers,orders,tables.map((a, i) => {
//     console.log(a);  
// })