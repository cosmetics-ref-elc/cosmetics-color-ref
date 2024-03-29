const Category = require('../../models/category');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const categories = await Category.find({})
    res.setHeader("Content-Type", "application/json");
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
    res.setHeader("Content-Type", "application/json");
    res.json(data);
}
