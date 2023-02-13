import express from "express";
import { getUsers,
        getUserById,
        createUser,
        updateUser,
        deleteUser,
        getUsersKelas,
        getUserKelasById,
        createUserKelas,
        updateUserKelas,
        deleteUserKelas,
        getUserKelasByKelasId
    } 
        from "../controller/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.get("/kelasId/:id", getUsersKelas);
router.get("/kelas/:id", getUserKelasById);
router.get("/kelasId/:id", getUserKelasByKelasId);
router.post("/kelas", createUserKelas);
router.patch("/kelas/:id", updateUserKelas);
router.delete("/kelas/:id", deleteUserKelas);


export default router;



