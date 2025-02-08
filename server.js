const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let likes = {};

// Route to like a restaurant
app.post("/like", (req, res) => {
    const { restaurant } = req.body;
    likes[restaurant] = (likes[restaurant] || 0) + 1;
    res.json({ restaurant, likes: likes[restaurant] });
});

// Route to get all likes
app.get("/likes", (req, res) => {
    res.json(likes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


