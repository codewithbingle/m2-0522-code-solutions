/* exported student */

var student = {
  firstName: 'Bingle',
  lastName: 'Padilla',
  subject: 'Javascript',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
