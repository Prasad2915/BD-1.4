const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome to our service!';
}
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreet(name) {
  return name;
}

app.get('/greet', (req, res) => {
  let name = req.query.name;
  res.send('Hello, ' + getGreet(name));
});

function checkPassword(pass) {
  if (pass.length > 5) return 'Password is Strong';
  else return 'Password is Weak';
}

app.get('/password', (req, res) => {
  let pass = req.query.pass;

  res.send(checkPassword(pass));
});

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(addTwoNumbers(num1, num2).toString());
});

function status(name, sub) {
  if (sub == 'true') return name + ' is subscribed!';
  else return name + ' is not subscribed!';
}

app.get('/subscription', (req, res) => {
  let name = req.query.name;
  let sub = req.query.sub;
  res.send(status(name, sub));
});

function discount(price, discountP) {
  let discountedPrice, afterDiscount;
  discountedPrice = (price * discountP) / 100;
  afterDiscount = price - discountedPrice;
  return afterDiscount;
}

app.get('/discount', (req, res) => {
  let price = parseFloat(req.query.price);
  let discountP = parseFloat(req.query.discountP);
  res.send(discount(price, discountP).toString());
});

function personalisedGreeting(name, age, gender) {
  let message = 'Hello, ' + name + '! you are ' + age + ' years old ' + gender;
  return message;
}

app.get('/greeting', (req, res) => {
  let name = 'Nani';
  let age = '25';
  let gender = 'male';
  res.send(personalisedGreeting(name, age, gender));
});

function excercise(running, swimming, cycling) {
  let totalTime = running + swimming + cycling;
  return totalTime;
}

app.get('/excer', (req, res) => {
  let running = 30;
  let swimming = 60;
  let cycling = 45;
  res.send(excercise(running, swimming, cycling).toString());
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
