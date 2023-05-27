import express from "express"
import errorChecked from "../Middlewares/errorChecker.js"

const router= express.Router()

import {
    RegisterUser,
    PerfilUser
} from "../Controllers/UserController.js"

router.post("/login",errorChecked(RegisterUser))
router.get("/profile/:id",errorChecked(PerfilUser))
