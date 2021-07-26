// import Todo Model
const  Todo = require("./todoModel.js");

// DEFINE CONTROLLER FUNCTIONS

// Listar todos los productos
exports.productos = (req, res) => {

    let query = [];
    if (req.query.hasOwnProperty("nombre") && req.query.nombre.length > 0) query.push({ NOMBRE: {$regex:req.query.nombre.toUpperCase()}});
    if (req.query.hasOwnProperty("marca") && req.query.marca.length > 0) query.push({ MARCA: req.query.marca });
    if (req.query.hasOwnProperty("categoria") && req.query.categoria.length > 0) query.push({ CATEGORIA: req.query.categoria });
    if (query && query.length > 0){

        Todo.find({$and:query}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
            console.log(todo);
            res.status(200).json(todo);
        });
    } else {
        Todo.find({}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
            console.log(todo);
            res.status(200).json(todo);
        });
    }
};

// Obtener un producto en base a su identificador
exports.ListOne = (req, res) => {
    console.log(req.params.id);
    Todo.findById(req.params.id, function (err, todo) {
        res.status(200).json(todo);
    });
};

// Obtener un producto en base a su categoria
exports.listCategories = (req, res) => {
    // console.log(req.params.nombre);
    Todo.find({ CATEGORIA: req.params.nombre}, function (err, todo) {
        res.status(200).json(todo);
    });
};

// Obtener un producto en base a su codigo
exports.getProductoxCodigo = (req, res) => {
    // console.log(req.params.nombre);
    Todo.find({ CODIGO: req.params.codigo}, function (err, todo) {
        res.status(200).json(todo);
    });
};

// Obtener las categorias de los productos
exports.listarCategorias = (req, res) => {
    Todo.find().distinct('CATEGORIA', function(error, todo) {
        res.status(200).json(todo);
    });
};

exports.listarFiltroProductos = (req, res) => {
    Todo.find({ CATEGORIA: req.params.categoria}, function (err, todo) {
        res.status(200).json(todo);
    });
};

// obtener las marcas de los productos
exports.listarMarcas = (req, res) => {
    Todo.find().distinct('MARCA', function(error, todo) {
        res.status(200).json(todo);
    });
};

exports.listMarcas = (req, res) => {
    // console.log(req.params.nombre);
    Todo.find({ MARCA: req.params.nombre}, function (err, todo) {
        res.status(200).json(todo);
    });
};










// /////////////////////////

// // Actualizar la información de un producto
// exports.updateTodo = (req, res) => {
// Todo.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, todo) => {
// if (err) {
// res.status(500).send(err);
// }
// res.status(200).json(todo);
// });
// };

// // Eliminar un producto
// exports.deleteTodo = async ( req, res) => {
// await  Todo.deleteOne({ _id:req.params.id }, (err) => {
// if (err) {
// return res.status(404).send(err);
// }
// res.status(200).json({ message:"Todo successfully deleted"});
// });
// };