const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Admin extends Model {
  checkPassword (loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Admin.init(
  {
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  },
  {
    hooks: {
      beforeCreate: async (newAdminData) => {
        newAdminData.password = await bcrypt.hash(newAdminData.password, 10);
        return newAdminData;
      },
      beforeUpdate: async (updatedAdminData) => {
        updatedAdminData.password = await bcrypt.hash(
          updatedAdminData.password,
          10
        );
        return updatedAdminData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'admin'
  }
);

module.exports = Admin;
