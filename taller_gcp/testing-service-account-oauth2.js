require('dotenv').config()

const { google } = require('googleapis');
//const { service_account } = require('google.oauth2');

async function main() {
  // Replace with the path to the service account key file
  const keyFile = process.env.service_account_json_file;

  // Create a service account client
  const serviceAccountClient = new google.oauth2.service_account.JWT({
    email: process.env.service_account_name,
    keyFile,
  });
  console.log(serviceAccountClient);

  // Create an OAuth2 client
  const oauth2Client = new google.auth.OAuth2(
    serviceAccountClient.email,
    serviceAccountClient.keyId,
    serviceAccountClient.key,
    'https://www.googleapis.com/auth/admin.directory.user'
  );

  // Create an Admin SDK client
  const admin = google.admin({
    version: 'directory_v1',
    auth: oauth2Client,
  });

  // Get all users
  const users = await admin.users.list().then((response) => response.data.users);

  // Print the users to the console
  console.log('Users:');
  users.forEach((user) => console.log(user.primaryEmail));
}

main().catch(console.error);
