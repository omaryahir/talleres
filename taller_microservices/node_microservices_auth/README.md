
# Install the project

Just run:
```
npm install
```

# How to run the project

```
node api/index.js
```

# How to test it 

if you use the httpie you can just use:
```
$ http http://127.0.0.1:3000/api/user
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 51
Content-Type: application/json; charset=utf-8
Date: Sun, 10 Jul 2022 00:03:14 GMT
ETag: W/"33-72t5QysoC8kQMtTl8e9X7zfPCGY"
X-Powered-By: Express

{
    "body": "Todo correcto",
    "error": false,
    "status": 200
}
```


