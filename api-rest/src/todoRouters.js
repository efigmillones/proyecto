'use strict';

// create App function
    module.exports = function(app) {
        var todoList = require('./todoController.js');

// todoList Routes

// get and post request for /todos endpoints
        app
        .route("/todos")
        .get(todoList.listAllTodos)
        // .post(todoList.createNewTodo);

// obtiene filtros

        app.route("/categorias")
        .get(todoList.listarCategorias);

        app.route("/marcas")
        .get(todoList.listarMarcas);

// put and delete request for /todos endpoints
        app
        .route("/todo/:id")
        .get(todoList.ListOne)
        // .put(todoList.updateTodo)
        // .delete(todoList.deleteTodo);

// busqueda filtro
        app.route("/filtrar/categorias/:nombre")
        .get(todoList.listCategories);

        app.route("/filtrar/marca/:nombre")
        .get(todoList.listMarcas);

    };
    