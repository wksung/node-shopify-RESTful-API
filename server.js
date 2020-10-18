require('dotenv').config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const get_products = require("./requests/get_products");
const get_shopify_url = require("./requests/get_shopify_url");
const get_product_metafields = require("./requests/get_product_metafields");
const create_product_metafields = require("./requests/create_product_metafields");
const update_product_metafields = require("./requests/update_product_metafields");
const delete_product_metafields = require("./requests/delete_product_metafields");

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to Shopify API endpoint. Visit here for the full documentation.")
});

app.get("/get_shopify_url", (req, res) => {
    get_shopify_url.get_shopify_url(process.env.API_KEY, process.env.SECRET_KEY, process.env.SHOPIFY_SITE)
    .then((json) => {
        res.status(200).send(json);
    });
});

app.get("/get_products", (req, res) => {
    get_products.get_products(process.env.API_KEY, process.env.SECRET_KEY, process.env.SHOPIFY_SITE)
    .then((json) => {
        res.status(200).send(json);
    });
});

app.post("/get_product_metafields", (req, res) => {
    get_product_metafields.get_product_metafields(process.env.API_KEY, process.env.SECRET_KEY, 
                                                  process.env.SHOPIFY_SITE, req.body)
    .then((json) => {
        res.status(200).send(json);
    });
});

app.post("/create_product_metafields", (req, res) => {
    create_product_metafields.create_product_metafields(process.env.API_KEY, process.env.SECRET_KEY, 
                                                        process.env.SHOPIFY_SITE, req.body)
    .then((json) => {
        res.status(200).send(json);
    });
});

app.put("/update_product_metafields", (req, res) => {
    update_product_metafields.update_product_metafields(process.env.API_KEY, process.env.SECRET_KEY, 
                                                        process.env.SHOPIFY_SITE, req.body)
    .then((json) => {
        res.status(200).send(json);
    });
});

app.delete("/delete_product_metafields", (req, res) => {
    delete_product_metafields.delete_product_metafields(process.env.API_KEY, process.env.SECRET_KEY, 
        process.env.SHOPIFY_SITE, req.body)
    .then((json) => {
        res.status(200).send(json);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${ port }`);
});