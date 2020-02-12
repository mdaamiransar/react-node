const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CategorySchema = Schema({
    categoryId: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model("category", CategorySchema);