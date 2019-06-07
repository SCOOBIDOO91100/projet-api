const express = require("express");
const app = express();
const mongoose = require("mongoose");

const question = require("./routes/question");

mongoose.connect(
	"mongodb+srv://Nabil:monmdp@jcvd91jcvd-s94ia.mongodb.net/test?retryWrites=true&w=majority",
	{ userNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
	console.log("Connecté à Mongodb Atlas");
});

//MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/question", question);

app.listen(3000, () => {
	console.log("le serveur fonctionne");
});
