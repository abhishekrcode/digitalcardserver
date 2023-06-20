import express from "express";
import { SignupUser, SigninUser } from "../controllers/user-controller.js";
import { uploadImage, getImage,} from "../controllers/image-controller.js";
import UpdateInformation from "../controllers/update-controller.js";

import upload from '../utils/upload.js'

const router = express.Router();


router.post('/signup',SignupUser);
router.post('/signin',SigninUser)

router.post('/file/upload', upload.single('file'),uploadImage);
router.get('/file/:filename',getImage);
router.put('/update',UpdateInformation)


export default router;