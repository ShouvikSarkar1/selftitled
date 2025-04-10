const express = require("express");
const app = express();
let dbConnect = require('./dbConnect');
let userRoutes = require('./routes/userRoutes')
const cors = require('cors');

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Selftitled" });
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});