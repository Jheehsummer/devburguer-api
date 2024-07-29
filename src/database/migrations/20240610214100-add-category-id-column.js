/** @type {import('sequelize-cli').Migration} */ 
module.exports = { 
  async up(queryInterface, Sequelize) { 
    const tableDescription = await queryInterface.describeTable('Products'); 
    if (!tableDescription['category_id']) 
      { await queryInterface.addColumn('Products', 'category_id', { 
      type: Sequelize.INTEGER, 
        references: { 
          model: 'Categories', 
          key: 'id', 
      }, 
      onUpdate: 'CASCADE', 
      onDelete: 'SET NULL', 
      allowNull: true, 
    }); 
  } 
}, async down(queryInterface) { 
  const tableDescription = await queryInterface.describeTable('Products'); 
    if (tableDescription['category_id']) 
  { 
    await queryInterface.removeColumn('Products', 'category_id'); 
  } 
  } 
}
;