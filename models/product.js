const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shadeSchema = new Schema({
    name: { type: String, required: true },
    color_alt_names: { type: String, required: true },
    description: { type: String, required: true },
    color_story: { type: String, required: true },
    color_support_info: { type: String, required: true },
    // (swatch_img, 5 different images)
})

const productSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    img: { type: String, required: true },
    swatch_img: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    shades: [shadeSchema],
    description: { type: String },
    usage: { type: String },
    ingredients: { type: String }
});

module.exports = mongoose.model('Product', productSchema);