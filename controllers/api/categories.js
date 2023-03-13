const Category = require('../../models/category');
const Product = require('../../models/product');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const categories = await Category.find({})
    res.json(categories);
}

async function show(req, res) {
    const data = await Category.aggregate(
        [
            {
                $match: { $expr: { $eq: ['$_id', { $toObjectId: req.params.id }] } }
            },
            {
                $lookup: {
                    from: 'products',
                    localField: '_id',
                    foreignField: 'category',
                    as: 'products'
                }
            }
        ]
    )
    res.json(data);
}
