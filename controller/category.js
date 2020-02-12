const Category = require('../models/category.js');

exports.create = (req, res) => {

    //Validation
    if (!req.body) {
        return res.status(400).send({ message: "Category cannot be empty !" });
    }

    //Create a form
    const category = new Category({
        name: req.body.name || "No Category Name "
    });

    //save in database
    category.save()
        .then(result => { res.send(result); })
        .catch(err => { res.status(500).send({ message: err.message || "Something wrong while creating the category." }) });
};

exports.findAll = (req, res) => {
    Category.find()
        .then(result => { res.send(result); })
        .catch(err => { res.status(500).send({ message: err.message || "Something wrong while creating the category." }) });
};

// Find a single Category with a categoryId
exports.findOne = (req, res) => {
    Category.findById(req.params.categoryId)
        .then(result => {
            if (!result) {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.categoryId
                });
            }
            res.send(result);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.categoryId
                });
            }
            return res.status(500).send({
                message: "Something wrong retrieving category with id " + req.params.categoryId
            });
        });
};