var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.contentType('application/json');
  var citizen = [
    { name: 'Rahul', location: 'Dallas', gender: 'Male', lat:'32.7200678087732', lng:'-97.1451006990263' },
    { name: 'Pragya', location: 'Orlando', gender: 'Female', lat:'28.5291206794802', lng:'-81.4042112447299' },
    { name: 'Guddu', location: 'Atlanta', gender: 'Female', lat:'33.8336681386855', lng:'-84.3835954158261' },
    { name: 'Alex', location: 'New York', gender: 'Male', lat:'40.7484213483159', lng:'-73.9958449626394' },
    { name: 'Allan', location: 'California', gender: 'Male', lat:'37.3657415338009', lng:'-121.821628361265' },
    { name: 'Scott', location: 'Wasington DC', gender: 'Male', lat:'38.9067286487176', lng:'-77.0311528560723' },
    { name: 'Sid', location: 'Miami', gender: 'Female', lat:'25.7824618', lng:'-80.3011209' },
    { name: 'Mark', location: 'Las vegas', gender: 'Male', lat:'36.1252285', lng:'-115.4551946' },
    { name: 'Alex', location: 'Houston', gender: 'Male', lat:'29.8174782', lng:'-95.6814892' },
    { name: 'Hall', location: 'Virginia', gender: 'Male', lat:'37.9863999', lng:'-81.7026383' }
  ];
  var citizenJSON = JSON.stringify(citizen);
  res.send(citizenJSON);

});

module.exports = router;
