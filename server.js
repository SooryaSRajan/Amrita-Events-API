const Express = require("express");
const app = Express();
const register = require("./routes/register");
const login = require("./routes/login");
const adminRegister = require("./routes/admin_register");
const adminLogin = require("./routes/admin_login");
const verifyToken = require("./routes/verify_token");
const changePassword = require("./routes/change_password");
require("./config/database_connection")();

app.use(Express.json());

app.get("/", (request, response) => {
    response.status(200).send("Welcome to Amrita Events API");
});

app.use("/register", register);
app.use("/admin_register", adminRegister);
app.use("/login", login);
app.use("/admin_login", adminLogin);
app.use("/verify_token", verifyToken);
app.use("/change_password", changePassword);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
