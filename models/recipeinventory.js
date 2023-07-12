'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeInventory extends Model {

    static associate(models) {
      // define association here
    }
  }
  RecipeInventory.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    ingredients: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RecipeInventory',
    modelName: 'RecipeManagement',
    tableName: 'recipe_management',// explicit snake cased table name
    underscored: true // this option converts camelCased columns to snake_case in the DB
  
  });
  return RecipeInventory;
};