import Express from "express";
import { delUser, getUser, login, posUser, Ptuser } from "../contollers/usercontroller.js";

const router = Express.Router()

router.route('/').get(getUser).post(posUser);
router.route('/:id').put(Ptuser).delete(delUser);
router.route('/login').post(login);


export default router