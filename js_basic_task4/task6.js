let email = "daniel.abrams@gmail.com";

let emailParts = email.split('@');

emailParts.splice(1, 1, 'changed.com');

let changedEmail = emailParts.join('@');

console.log(changedEmail);