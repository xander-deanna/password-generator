//DOM Elements
var generateBtn = document.getElementById("generateBtn");
var resultEL = document.getElementById("password");
var lengthToggleEl = document.getElementById("length");
var lowerToggleEl = document.getElementById("lower");
var capsToggleEl = document.getElementById("caps");
var numbersToggleEl = document.getElementById("numbers");
var specialToggleEl = document.getElementById("special");

var random = {
  lower: getLower,
  caps: getCaps,
  number: getNum,
  special: getSpecial,
};

// Generate Password Event Listener
generateBtn.addEventListener("click", () => {
  var finalPassword = ""
  var length = +lengthToggleEl.value;
  var hasLower = lowerToggleEl.checked;
  var hasCaps = capsToggleEl.checked;
  var hasNum = numbersToggleEl.checked;
  var hasSpec = specialToggleEl.checked;
  console.log(hasLower, hasCaps, hasNum, hasSpec, length);
  resultEL.innerText = generatePassword(hasLower, hasCaps, hasNum, hasSpec, length);
});

//Generate Password Funtion
function generatePassword(lower, caps, number, special, length) {
  var finalPassword = ""
  for (var i = 0; i < 200; i++) {
    if (lower === true && finalPassword.length <= length-1) {
      finalPassword += getLower();
    };
    
    if (caps === true && finalPassword.length <= length-1) {
      finalPassword += getCaps();
    };
    
    if (number === true && finalPassword.length <= length-1) {
      finalPassword += getNum();
    };
            
    if (special === true && finalPassword.length <= length-1) {
      finalPassword += getSpecial();
    };
    console.log("Final Password: " + finalPassword);
  };
  return finalPassword;
};

//--------------Generator functions-------------------//
//----------- https://theasciicode.com.ar/ ---------- //

//lowercase
function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getLower());

//uppercase
function getCaps() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getCaps());

//numbers
function getNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getNum());

//symbols
function getSpecial() {
  var spec = "!#$%&*+<>?@^~";
  return spec [Math.floor(Math.random () * spec.length)];
}
console.log(getSpecial());