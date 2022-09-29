function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hoursToMinutes = convertHoursToMinutes(3);
console.log('convertHoursToMinutes Exercise:', hoursToMinutes);

function getGreeting(name) {
  return 'Hello, my name is ' + name + '.';
}

var greeting = getGreeting('Josh');
console.log('getGreeting exercise:', greeting);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var sumTimes5 = addAndMultiplyBy5(1, 2);
console.log('addAndMultiplyBy5 exercise:', sumTimes5);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var productDividedBy5 = multiplyAndDivideBy5(50, 2);
console.log('multiplyAndDivideBy5 exercise:', productDividedBy5);

function subtractTwoNumbers(x, y) {
  return x - y;
}

var differnce = subtractTwoNumbers(10, 5);
console.log('subtractTwoNumbers exercise:', differnce);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius; // Wasn't sure whether to use Math.Pi or 3.14
}

var circumference = getCircleCircumference(3);
console.log('getCircleCircumference exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Joshua', 'Beh');
console.log('getFullName exercise:', fullName);

function cube(x) {
  return x * x * x;
}

var cubeRoot = cube(4);
console.log('cube exercise:', cubeRoot);
