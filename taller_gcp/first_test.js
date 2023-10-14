
const { google } = require('googleapis');

console.log("ok let's do it!!");

const admin = google.admin({
  version: 'directory_v1',
  auth: new google.auth.GoogleAuth({
    // Replace with your Google Admin credentials
    keyFile: '/path/to/service_account_key.json',
  }),
});

// Get all users
const users = await admin.users.list().then((response) => response.data.users);

// Get all roles
const roles = await admin.roles.list().then((response) => response.data.roles);

// Print the users and roles to the console
console.log('Users:');
users.forEach((user) => console.log(user.primaryEmail));

console.log('\nRoles:');
roles.forEach((role) => console.log(role.name));



