'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        login: 'Loh',
        email: 'loh@loh.loh',
        password: 'loh',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};
