const fetch = require('node-fetch');

const get_products = async (api_key, secret_key, shopify_site) => {
    return await fetch(
        `https://${ api_key }:${ secret_key }@${ shopify_site }.myshopify.com/admin/api/2020-04/products.json`
    )
    .then((res) => res.json())
    .then((json) => json);
};

exports.get_products = get_products;