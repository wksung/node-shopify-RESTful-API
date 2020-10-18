const fetch = require('node-fetch');

const get_shopify_url = async (api_key, secret_key, shopify_site) => {
    return await fetch(
        `https://${ api_key }:${ secret_key }@${ shopify_site }.myshopify.com/admin/api/2020-04/shop.json`
    )
    .then((res) => res.json())
    .then((json) => json);
};

exports.get_shopify_url = get_shopify_url;