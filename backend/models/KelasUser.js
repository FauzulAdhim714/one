import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const UserKelas = db.define("kelas_user",{
    name: DataTypes.STRING,
    alamat: DataTypes.STRING,
    indonesia: DataTypes.STRING,
    inggris: DataTypes.STRING,
    matematika: DataTypes.STRING,
    ipa: DataTypes.STRING,
    ips: DataTypes.STRING,
    olahraga: DataTypes.STRING,
    sunda: DataTypes.STRING,
    kesenian: DataTypes.STRING,
    extra: DataTypes.STRING,
    kelas: DataTypes.STRING,
    kelasId: DataTypes.INTEGER


},{
    freezeTableName:true
});


export default UserKelas;

(async()=> {
    await db.sync();
})();
