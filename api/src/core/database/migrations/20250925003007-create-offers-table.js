'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      modality: {
        type: Sequelize.ENUM('PRESENCIAL', 'EAD', 'SEMIPRESENCIAL'),
        allowNull: false,
      },
      shift: {
        type: Sequelize.ENUM('MORNING', 'AFTERNOON', 'EVENING', 'FULL_TIME'),
        allowNull: true,
      },
      originalPrice: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      currentPrice: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      installments: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      details: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('offers');
  },
};
