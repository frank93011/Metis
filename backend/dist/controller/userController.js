"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepo_1 = require("../repository/userRepo");
class UserController {
    getAll(req, res) {
        userRepo_1.getUsers().then((result) => {
            console.log("Result id : " + result.id);
            return res.status(200).json(result);
        });
    }
    createOne(req, res) {
        const data = req.body;
        userRepo_1.createUser(data).then(result => {
            console.log("Result id : " + result.id);
            return res.status(200).json(result);
        });
    }
    getOne(req, res) {
        const id = req.params.id;
        userRepo_1.getUser(id).then(result => {
            if (result)
                return res.status(200).json(result);
            else
                return res.status(404).json({ msg: 'error' });
        });
    }
    updateOne(req, res) {
        const id = req.params.id;
        const data = req.body;
        userRepo_1.updateUser(id, data).then(result => {
            if (result)
                return res.status(200).json(result);
            else
                return res.status(404).json({ msg: 'error' });
        });
    }
    deleteOne(req, res) {
        const id = req.params.id;
        userRepo_1.deleteUser(id).then(result => {
            console.log(result);
            if (result)
                return res.status(200).json({ msg: 'success' });
            else
                return res.status(404).json({ msg: 'error' });
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map