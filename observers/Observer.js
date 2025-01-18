class Observer {
  update(data) {
    throw new Error('Observer subclasses must implement the update method');
  }
}

module.exports = Observer;
