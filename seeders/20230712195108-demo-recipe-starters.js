"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {

up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('recipes', [{
title:"angel food cake",
description: "so light and fluffy",
ingredients: "flour, egg whites, vanilla bean, baking soda",
instructions: "put it in a bowl and mix",
created_at: new Date(),
updated_at: new Date()

  }, 
  {
    title:"devils food cake",
    description: "so dense and rich",
    ingredients: "flour, eggs, vanilla bean, baking soda, cocoa powder, chocolate",
    instructions: "put it in a bowl and mix",
    created_at: new Date(),
    updated_at: new Date()
      }], {});
},

down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('recipes', null, {});
}

};