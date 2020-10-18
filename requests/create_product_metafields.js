const fetch = require('node-fetch');

const create_product_metafields = async (api_key, secret_key, shopify_site, body) => {
    return await fetch(`https://${ api_key }:${ secret_key }@${ shopify_site }.myshopify.com/admin/api/2020-04/products/${ body.id }/metafields.json`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "metafield": {
                  "namespace": body.params.namespace,
                  "key": body.params.key,
                  "value": body.params.value,
                  "value_type": body.params.value_type
                }
            })
        }
    )
    .then((res) => res.json())
    .then((json) => json);
};

exports.create_product_metafields = create_product_metafields;