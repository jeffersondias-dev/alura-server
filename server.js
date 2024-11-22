import express from "express";

const posts = [
    {
        descricao: "Uma foto teste",
        image: "https://placecats.com/millie/300/150",
    },
    {
        descricao: "Uma foto teste2",
        image: "https://placecats.com/millie/300/150",
    },
    {
        descricao: "Uma foto teste3",
        image: "https://placecats.com/millie/300/150",
    },
    {
        descricao: "Uma foto teste4",
        image: "https://placecats.com/millie/300/150",
    },
    {
        descricao: "Uma foto teste5",
        image: "https://placecats.com/millie/300/150",
    },
    {
        descricao: "Uma foto teste6",
        image: "https://placecats.com/millie/300/150",
    },
    {
        descricao: "Uma foto teste7",
        image: "https://placecats.com/millie/300/150",
    },
    {
        descricao: "Uma foto teste8",
        image: "https://placecats.com/millie/300/150",
    },
    {
        descricao: "Uma foto teste9",
        image: "https://placecats.com/millie/300/150",
    },
];

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/post", (req, res) => {
    var random = getRandomInt(posts.length);
    res.status(200).json(posts[random]);
});

