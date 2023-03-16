const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shadeSchema = new Schema({
    name: { type: String, required: true },
    color_alt_names: { type: String, required: true },
    description: { type: Array, required: true },
    color_story: { type: String, required: true },
    color_support_info: { type: Array, required: true },
    swatch_img: { type: String, required: true },
    img_urls: { type: Array, required: true }
})

const productSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    img: { type: String, required: true },
    swatch_img: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    shades: [shadeSchema],
    description: { type: Array, required: true },
    usage: { type: Array, required: true },
    ingredients: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);