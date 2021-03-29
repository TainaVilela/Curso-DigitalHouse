'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('recipes', { 
       id: {
         type: Sequelize.INTEGER, 
         primaryKey: true,
         autoIncremente: true,
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      messenger: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      
    });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
   
  }
};
