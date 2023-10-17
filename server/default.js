
const products=require('./constant/product')
const Product = require('./models/product.model');
const DefaultData = async() => {
    try {
        await Product.insertMany(products);
        console.log("Data inserted successfully");
    } catch (error) {
        console.log('Error at inserting the default data: ', error.message);
    }
}

module.exports = DefaultData;