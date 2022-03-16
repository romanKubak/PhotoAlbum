module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Albums', [
       {
        title: "Еда",
        photo: '/photo/IMG_2194.JPG',
        body: 'Хуета',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
       }]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Albums', null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};
