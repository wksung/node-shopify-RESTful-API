const fetch = require('node-fetch');

const update_product_metafields = async (api_key, secret_key, shopify_site, body) => {
    return await fetch(`https://${ api_key }:${ secret_key }@${ shopify_site }.myshopify.com/admin/api/2020-04/metafields/${ body.id }.json`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "metafield": {
                  "id": body.id,
                  "value": body.value,
                  "value_type": body.value_type
                }
            })
        }
    )
    .then((res) => res.json())
    .then((json) => json);
};

exports.update_product_metafields = update_product_metafields;