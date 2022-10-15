const user = {
  name: 'Vitali',
  age: 36,
  sayHi() {
    console.log(`Hi! My name is ${this.name}`)
  }
};

module.exports = user;