const express = require("express");
const path = require("path");

const app = express();

app.set('view engine' , 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const hostrouter = require("./routes/hostrouter")();
const userrouter = require("./routes/userrouter")();
const error_control = require('./controllers/404controller');
app.use("/",userrouter);
app.use("/host", hostrouter);


app.use(error_control.error_c);

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
