module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [
      {
        title: 'Какой-то текст',
        photo: '/photo/IMG_2195.JPG',
        body: 'Какой-то текст связанный с едой',
        album_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Какой-то текст',
        photo: '/photo/IMG_2196.JPG',
        body: 'Какой-то текст связанный с едой',
        album_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Какой-то текст',
        photo: '/photo/IMG_2197.JPG',
        body: 'Какой-то текст связанный с едой',
        album_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Какой-то текст',
        photo: '/photo/IMG_2198.JPG',
        body: 'Какой-то текст связанный с едой',
        album_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Какой-то текст',
        photo: '/photo/IMG_2199.JPG',
        body: 'Какой-то текст связанный с едой',
        album_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Какой-то текст',
        photo: '/photo/IMG_2200.JPG',
        body: 'Какой-то текст связанный с едой',
        album_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Какой-то текст',
        photo: '/photo/IMG_2201.JPG',
        body: 'Какой-то текст связанный с едой',
        album_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);


  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};
