
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.addColumn('Products', 'offer', { 
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  
  });
     
  },

  async down (queryInterface) {
   queryInterface.removeColumn('Products', 'offer');
     
  },
};
