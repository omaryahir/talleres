const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = (
    origin: "https://localhost:8081"
);

app.use(cors(corsOptions));
// parse request to json
app.use(express.json());
// parse application/x-www-form-encoded
app.use(express.urlencoded({ extended: true });

app.get("/", (req, res) => {
 res.json({ message: "welcome my friend!" });
});

const PORT=process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server running on PORT ${PORT}.'); 
});

