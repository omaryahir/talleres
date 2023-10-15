const {GoogleAuth} = require('google-auth-library');

async function main() {
  const auth = new GoogleAuth({
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/admin.directory.user.readonly',
      'https://www.googleapis.com/auth/admin.directory.user.security'
    ]
  });
  const client = await auth.getClient();
  const projectId = await auth.getProjectId();
  // List all buckets in a project.
  //const url = `https://storage.googleapis.com/storage/v1/b?project=${projectId}`;
  //const res = await client.request({ url });

  //const url = 'https://admin.googleapis.com/admin/directory/v1/users?customer=my_customer'
  const url = 'https://admin.googleapis.com/admin/directory/v1/users?customer=C01xr78pl'
  const res = await client.request({ url });
  console.log(res.data);
}

main().catch(console.error);