const Category = require('../../models/category');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const categories = await Category.find({})
    console.log(categories)
    res.json(categories);
}

async function show(req, res) {
    // const product = await Product.findById(req.params.id);
    // res.json(product);
}
