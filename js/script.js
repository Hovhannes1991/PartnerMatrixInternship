let date = new Date();
let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
date = date.toLocaleDateString('en', options).replace(/,/g, '');

document.getElementById('last_login-date').innerText = date;

