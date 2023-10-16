'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('store', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,      
      },
      description:{
        type: Sequelize.STRING(60),        
        allowNull: false,
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false,
      }
      });
     
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('store');
 
  }
};
