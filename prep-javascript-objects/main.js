var person = {
  firstName: 'Joshua',
  lastName: 'Beh',
  hobby: 'Watching Anime'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName + '.';
console.log("The person's name is:", fullName);
person.job = null;
console.log("The person's current job is:", person.job + '.');
person.previousJob = 'Student';
console.log("The person's pervious job was:", person.previousJob + '.');
console.log('The complete person object:', person);
