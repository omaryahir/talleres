require('dotenv').config()

const {GoogleAuth} = require('google-auth-library');
const {google} = require('googleapis');

async function main() {
  /*const auth = new GoogleAuth({
    scopes: [
      'https://www.googleapis.com/auth/admin.directory.user.readonly'
    ]
  })*/

  console.log('OYFLAG -- here we go ... ');
  //const client = await auth.getClient();
  //const projectId = await auth.getProjectId();  
  //console.log(await auth.getCredentials());
  //console.log(projectId);
  //const url = 'https://admin.googleapis.com/admin/directory/v1/users?customer=my_customer'
  //const url = 'https://admin.googleapis.com/admin/directory/v1/users?customer=C01xr78pl'

  console.log('OYFLAG -- credentials ...');
  //const res = await google.auth.getApplicationDefault();

  const authClient = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
  });
  //console.log({auth});
  
  /*const response = await compute.globalAddresses.insert({
    project: 'projectId',
    resource: { name: 'name' },
    auth: authClient,
  });*/


  //const credential = res.credential;
  /*let credential = res.credential;
  const client = credential.create({
    scope: 'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ]);
  console.log(res);
  console.log('ok ^^ ')*/
  const admin = google.admin({
    version: 'directory_v1',
    auth: authClient //credential //auth
  });
  console.log('OYFLAG -- get users ... ');
  const users = await admin.users.list({
    customer: process.env.customer
  }).then((response) => response.data.users);
  console.log(users);
  //const res = await client.request({ url });

  //console.log(res.data)
}

main().catch(console.error);



// const { google } = require('googleapis');
// 
// const admin = google.admin({
//   version: 'directory_v1',
//   auth: new google.auth.GoogleAuth({
//     // Replace with your Google Admin credentials
//     keyFile: '/path/to/service_account_key.json',
//   }),
// });
// 
// // Get all users
