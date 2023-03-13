const Category = require('../../models/category');
const Product = require('../../models/product')

module.exports = {
    index,
    show
};

async function index(req, res) {
    const categories = await Category.find({})
    // console.log(categories)
    res.json(categories);
}

async function show(req, res) {
    const products = await Category.find(req.params.id);


    // res.json(product);
}
