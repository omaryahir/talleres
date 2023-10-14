const {GoogleAuth} = require('google-auth-library');

async function main() {
  const auth = new GoogleAuth({
    scopes: [
      'https://www.googleapis.com/auth/admin.directory.user.readonly'
    ]
  })

  const client = await auth.getClient();
  const projectId = await auth.getProjectId();
  const url = 'https://admin.googleapis.com/admin/directory/v1/users?customer=my_customer'
  const res = await client.request({ url });

  console.log(res.data)
}

main().catch(console.error);
