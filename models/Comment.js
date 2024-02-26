const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}


Comment.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: new Date()
        },
        authorName:{
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'User',
                key: 'userName'
            }

        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',

    }
);

module.exports = Comment;