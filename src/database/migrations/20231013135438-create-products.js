'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('products', { 
      
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
      cost_price: {
        type: Sequelize.DECIMAL(13,3),
        allowNull: false,

      }, 
      path: {
        type: Sequelize.STRING,
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

  async down (queryInterface) {
    await queryInterface.dropTable('products');
   
  }
};
