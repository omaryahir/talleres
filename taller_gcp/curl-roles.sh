curl -H "X-Goog-User-Project: fakesi-testproject-dev" -H \
"Authorization: Bearer $(gcloud auth print-access-token)" \
https://admin.googleapis.com/admin/directory/v1/customer/my_customer/roles