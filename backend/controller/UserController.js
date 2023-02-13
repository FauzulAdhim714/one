import User from "../models/UserModel.js";
import UserKelas from "../models/KelasUser.js";

export const getUsers = async(req, res) =>{
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    } 
    catch (error){
        console.log(error.message);
    }
}

export const getUsersKelas = async(req, res) =>{
    try{
        const response = await UserKelas.findAll({
            where:{
                kelasId: req.params.id
            }
        });
        res.status(200).json(response);
    } 
    catch (error){
        console.log(error.message);
    }
}


export const getUserById = async(req, res) =>{
    try{
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } 
    catch (error){
        console.log(error.message);
    }
}

export const getUserKelasById = async(req, res) =>{
    try{
        const response = await UserKelas.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } 
    catch (error){
        console.log(error.message);
    }
}

export const getUserKelasByKelasId = async(req, res) =>{
    try{
        const response = await UserKelas.findAll({
            where:{
                kelasId: req.params.id
            }
        });
        res.status(200).json(response);
    } 
    catch (error){
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    try{
        await User.create(req.body);
        res.status(201).json({msg:"Data Bru ditambahkan"});
    } 
    catch (error){
        console.log(error.message);
    }
}

export const createUserKelas = async(req, res) =>{
    try{
        await UserKelas.create(req.body);
        res.status(201).json({msg:"Data Bru ditambahkan"});
    } 
    catch (error){
        console.log(error.message);
    }
}

export const updateUser = async(req, res) =>{
    try{
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({msg:"Data Update"});
    } 
    catch (error){
        console.log(error.message);
    }
}

export const updateUserKelas = async(req, res) =>{
    try{
        await UserKelaser.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({msg:"Data Update"});
    } 
    catch (error){
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({msg:"Data Delete"});
    } 
    catch (error){
        console.log(error.message);
    }
}

export const deleteUserKelas = async(req, res) =>{
    try{
        await UserKelas.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({msg:"Data Delete"});
    } 
    catch (error){
        console.log(error.message);
    }
}

