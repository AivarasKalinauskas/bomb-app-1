var path = require("path");
var express = require("express");
var cors = require("cors");
var app = express();

// Then use it before your routes are set up:
app.use(cors());
app.use(express.static("app"));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "app") + "/index.html");
});

let port = 3000;
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
