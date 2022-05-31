// Declares and store possible characters in a variable called chars
const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Declares a variable called passwordLength and assign its value to 12
const passwordLength = 8;

// Stores the password1-el paragraph in a variable called password1EL
const password1El = document.getElementById('password1-el');
const password2El = document.getElementById('password2-el');
const password3El = document.getElementById('password3-el');
const password4El = document.getElementById('password4-el');

// eslint-disable-next-line max-len
// Creates a function generatePasswords() that return a random password composed of passwordLength characters
function generatePasswords() {
  // Declares a variable called password and assign its value to an empty string
  let password = '';
  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < passwordLength; j++) {
    const randomIndex = Math.floor(Math.random() * chars.length);

    // Adds the new random chars to the password string
    password += chars[randomIndex];
  }
  return password;
}

// Creates a function getGeneratePasswords() that displays generated passwords in HTML document
// eslint-disable-next-line no-unused-vars
function getGeneratePasswords() {
  // Displays the message in the messageEl using messageEl.textContent
  password1El.textContent = generatePasswords();
  password2El.textContent = generatePasswords();
  password3El.textContent = generatePasswords();
  password4El.textContent = generatePasswords();
  // Call changeColorPasswords() function
  // eslint-disable-next-line no-use-before-define
  changeColorPasswords();
}

// Creates a function changeColorPasswords() that changes color to passwords
function changeColorPasswords() {
  // Gets and stores all elements with generatedPassword class in allPassword variable
  const allPasswords = document.getElementsByClassName('generatedPassword');
  // Changes color to var(--clr-bright-green) for every passwords in allPasswords
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < allPasswords.length; i++) {
    allPasswords[i].style.color = 'var(--clr-bright-green)';
  }
}
