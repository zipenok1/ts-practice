import sequelize from "../db.js";
import { DataTypes, Model } from 'sequelize'
import { IEvent, IPhoto } from './typeModels.js';


const Event = sequelize.define<Model<IEvent>>('event', {
    id_event: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: true,
    },
    description:{
        type: DataTypes.STRING(250),
        allowNull: true,
    }
}, {
    tableName: 'event',
    timestamps: false  
})

const Photo = sequelize.define<Model<IPhoto>>('photo', {
    id_photo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    link_img: {
        type: DataTypes.STRING(500),
        allowNull: true,
    }
}, {
    tableName: 'photo',
    timestamps: false  
})

export default{
    Event,
    Photo
}