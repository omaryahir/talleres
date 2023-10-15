require('dotenv').config()

const {GoogleAuth} = require('google-auth-library');

console.log(process.env.key);
async function main() {
  const auth = new GoogleAuth({
    /*scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/admin.directory.user.readonly',
      'https://www.googleapis.com/auth/admin.directory.user.security'
    ],*/
    //keyFile: "fakesi-testproject-dev-50828083a2bd.json"
    version: 'v3',
    key: process.env.key
  });
  console.log('OYFLAG -- auth');
  console.log(auth);
  const client = await auth.getClient();
  console.log(client);
  //const projectId = await auth.getProjectId();
  // List all buckets in a project.
  //const url = `https://storage.googleapis.com/storage/v1/b?project=${projectId}`;
  //const res = await client.request({ url });

  //const url = 'https://admin.googleapis.com/admin/directory/v1/users?customer=my_customer'
  const url = 'https://admin.googleapis.com/admin/directory/v1/users?customer=' + process.env.customer
  const res = await client.request({ url });
  console.log(res.data);
}

main().catch(console.error);
