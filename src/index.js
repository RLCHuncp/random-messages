const messages = [
    "Ruth",
    "Lucy",
    "Rossy",
    "Ida",
    "Mary",
    "Lourdes",
    "Wilder",
    "Edgard",
    "Jhenry"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};

module.exports = { randomMsg };