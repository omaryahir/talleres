
# https://accounts.google.com/o/oauth2/auth?client_id=[Application Client Id]&redirect_uri=http://127.0.0.1&scope=[Scopes]&response_type=code

curl -d "client_id=MY_CLIENT_ID&\
  client_secret=MY_SECRET_KEY&\
  redirect_uri=http://localhost/etc&\
  grant_type=authorization_code&\
  code=CODE" https://oauth2.googleapis.com/token