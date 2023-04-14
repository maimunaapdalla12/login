import Express from "express";
import { delUser, getUser, posUser, Ptuser } from "../contollers/usercontroller.js";

const router = Express.Router()

router.route('/').get(getUser).post(posUser);
router.route('/:id').put(Ptuser).delete(delUser);


export default router