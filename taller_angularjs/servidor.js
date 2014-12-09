var connect = require('connect'),
		serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("pruebas_angular"));
app.listen(3000);
