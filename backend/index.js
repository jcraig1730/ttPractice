const app = require("./server");
require("dotenv").config();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`FoodSaver API running on ${port}`));
