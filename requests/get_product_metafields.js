const fetch = require('node-fetch');

const get_product_metafields = async (api_key, secret_key, shopify_site, body) => {
    return await fetch(
        `https://${ api_key }:${ secret_key }@${ shopify_site }.myshopify.com/admin/api/2020-04/products/${ body.id }/metafields.json`
    )
    .then((res) => res.json())
    .then((json) => json);
};

exports.get_product_metafields = get_product_metafields;