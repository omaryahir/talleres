require('dotenv').config()

// load library
const { google } = require('googleapis');

// configure a JWT auth client
const privatekey = require("./" + process.env.service_account_json_file);

const jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    [
        //'https://www.googleapis.com/auth/drive.readonly',
        //'https://www.googleapis.com/auth/drive.metadata.readonly'
        'https://www.googleapis.com/auth/admin.directory.user'
    ]
);

jwtClient.authorize()
    .then(function (tokens) {
        // console.log(tokens);
        console.log("Authentication successfull.\n");

        // list the files once authenticated
        //listFiles(jwtClient);
        listUsers(jwtClient);
    })
    .catch(function (error) {
        throw (error);
    });

function listUsers(auth) {
    // Create an Admin SDK client
    const admin = google.admin({
      version: 'directory_v1',
      auth
    });

    admin.users.list({
      customer: process.env.customer
    }).then(res => {
      console.log(res.data);
    }).catch(err => console.log(err));
  
    // Get all users
    //const users = await admin.users.list().then((response) => response.data.users);
  
    // Print the users to the console
    //console.log('Users:');
    //users.forEach((user) => console.log(user.primaryEmail));
}


function listFiles(auth) {
    const drive = google.drive({ version: 'v3', auth });
    drive.files.list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
        // q: "name contains 'foo'"
    })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));

}
