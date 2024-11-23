class UserService {
  // Other methods...

  async updateUser(id, userData) {
    return await userRepository.update(id, userData);
  }
}

module.exports = new UserService();
