const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}


BlogPost.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content:{
            type:DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        comments:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        UserName:{
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'userName',
            }

        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'BlogPost',

    }
);

module.exports = BlogPost;