const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let products = [];

app.post('/products', (req, res) => {
    const { name, price, description, image } = req.body;
    if (!name || !price || !description || !image) {
        return res.status(400).send('All product fields are required');
    }
    const product = { id: products.length + 1, name, price, description, image };
    products.push(product);

    return res.status(201).send("product added successfully" + products[0].name);
});

const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});