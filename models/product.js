const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shadeSchema = new Schema({
    name: { type: String, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    size: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number }
})

const productSchema = new Schema({
    name: { type: String, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    size: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('Product', productSchema);