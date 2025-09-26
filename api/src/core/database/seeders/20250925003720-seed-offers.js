'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'offers',
      [
        {
          id: 1,
          currentPrice: 2613.6,
          originalPrice: 4752.0,
          installments: `[
            { "months": 1, "value": 2613.6 },
            { "months": 3, "value": 900.9 },
            { "months": 6, "value": 465.3 },
            { "months": 9, "value": 320.1 },
            { "months": 12, "value": 247.5 },
            { "months": 15, "value": 200.96 },
            { "months": 18, "value": 169.95 }
          ]`,
          modality: 'PRESENCIAL',
          shift: 'MORNING',
          unit: 'Campinas - Vila Industrial',
          address:
            'Rua Dr. Sales de Oliveira, Nº 1661 - Vila industrial - Campinas',
          active: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id: 2,
          modality: 'EAD',
          details:
            'Inscreva-se para saber tudo sobre os valores e garantir a sua vaga!',
          unit: 'Barra da Tijuca - Tom Jobim',
          address: 'Av. Das Américas, 4.200, Bloco 11 - Barra da Tijuca',
          active: true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('offers', null, {});
  },
};
