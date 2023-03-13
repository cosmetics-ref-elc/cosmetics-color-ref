const Category = require('../../models/category');
const Product = require('../../models/product')

module.exports = {
    index,
    show
};

async function index(req, res) {
    const categories = await Category.find({})
    res.json(categories);
}

async function show(req, res) {
    console.log(req.params)
    const data = await Category.aggregate(
        [
            {
                $lookup: {
                    from: Product,
                    localField: req.params.id,
                    foreignField: 'category',
                    as: 'products'
                }
            }
        ]
    )
    console.log(data)
    // res.json(product);
}
