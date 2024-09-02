import express from "express"
import { Registeruser, verifyuser} from "../controller/userControl.js"

const router = express.Router();
router.post('/user/registration',Registeruser);
router.post('/user/signup',verifyuser)
// router.post('/user/email',emailverify)
// router.post('/user/number',numberverify)


export default router;
