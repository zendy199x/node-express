const express = require("express");

// Start app
const app = express()

// Start express middleware
app.use(express.json())

const PORT = 5000;

app.listen(PORT, () => console.log(`Server run start at port ${PORT}`))