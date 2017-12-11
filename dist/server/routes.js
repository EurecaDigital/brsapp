"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cat_1 = require("./controllers/cat");
var projeto_1 = require("./controllers/projeto");
var user_1 = require("./controllers/user");
function setRoutes(app) {
    var router = express.Router();
    var catCtrl = new cat_1.default();
    var projetoCtrl = new projeto_1.default();
    var userCtrl = new user_1.default();
    // Cats
    router.route('/cats').get(catCtrl.getAll);
    router.route('/cats/count').get(catCtrl.count);
    router.route('/cat').post(catCtrl.insert);
    router.route('/cat/:id').get(catCtrl.get);
    router.route('/cat/:id').put(catCtrl.update);
    router.route('/cat/:id').delete(catCtrl.delete);
    // Projetos
    router.route('/projetos').get(projetoCtrl.getAll);
    router.route('/projetos/count').get(projetoCtrl.count);
    router.route('/projeto').post(projetoCtrl.insert);
    router.route('/projeto/:id').get(projetoCtrl.get);
    router.route('/projeto/:id').put(projetoCtrl.update);
    router.route('/projeto/:id').delete(projetoCtrl.delete);
    // Users
    router.route('/login').post(userCtrl.login);
    router.route('/users').get(userCtrl.getAll);
    router.route('/users/count').get(userCtrl.count);
    router.route('/user').post(userCtrl.insert);
    router.route('/user/:id').get(userCtrl.get);
    router.route('/user/:id').put(userCtrl.update);
    router.route('/user/:id').delete(userCtrl.delete);
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map