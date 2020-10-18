const fetch = require('node-fetch');

const delete_product_metafields = async (api_key, secret_key, shopify_site, body) => {
    return await fetch(`https://${ api_key }:${ secret_key }@${ shopify_site }.myshopify.com/admin/api/2020-04/metafields/${ body.id }.json`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => res.json())
    .then((json) => json);
};

exports.delete_product_metafields = delete_product_metafields;