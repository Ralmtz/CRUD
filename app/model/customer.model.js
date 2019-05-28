// module.exports = (sequelize, Sequelize) => {
//     const Customer = sequelize.define('customer', {
//       id: {
//       type: Sequelize.INTEGER
//       },
//       Nombre: {
//       type: Sequelize.STRING
//       },
//       email: {
//         type: Sequelize.STRING
//       },
//       Direccion:{
//           type: Sequelize.STRING
//       },
//       Telefono:{
//           type: Sequelize.STRING
//       }
//     });
    
//     return Customer;
//   }

module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
      firstname: {
      type: Sequelize.STRING
      },
      lastname: {
      type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      }
    });
    
    return Customer;
  }