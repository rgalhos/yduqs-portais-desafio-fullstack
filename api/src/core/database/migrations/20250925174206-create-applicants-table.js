'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('applicants', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      birthDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(14),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      graduationYear: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      whatsappOptIn: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      offerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'offers',
          key: 'id',
        },
      },
      noInstallments: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      installmentValue: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('applicants');
  },
};
