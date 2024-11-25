const userRepository = require('../data/userRepository');
const {hasRole} = require("../middlewares/authMiddleware");

class UserService {
  async getAllUsers() {
    return await userRepository.findAll();
  }

  async getUserById(id) {
    return await userRepository.findById(id);
  }

  async createUser(userData) {
    return await userRepository.create(userData);
  }

  async updateUser(id, userData, previousRole) {
    if (!hasRole('admin')) userData.role = previousRole;
    return await userRepository.update(id, userData);
  }

  async deleteUser(id) {
    return await userRepository.delete(id);
  }

}

module.exports = new UserService();
