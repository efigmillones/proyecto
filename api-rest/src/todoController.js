// import Todo Model
const  Todo = require("./todoModel.js");

// DEFINE CONTROLLER FUNCTIONS

// Listar todos los productos
exports.listAllTodos = (req, res) => {
Todo.find({}, (err, todo) => {
if (err) {
res.status(500).send(err);
}
console.log(todo);
res.status(200).json(todo);
});
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

// Obtener las categorias de los productos
exports.listarCategorias = (req, res) => {
    Todo.find().distinct('CATEGORIA', function(error, todo) {
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