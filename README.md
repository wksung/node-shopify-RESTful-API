# shopify-api-node-endpoint

Setup:
- 
1. create an .env file with the .env_example file
2. go to Shopify > Create a private app. 
   * You can give READ/WRITE permission on products.
   * More info: https://help.shopify.com/en/manual/apps/private-apps
3. insert your API_KEY, SECRET_KEY and SHOPIFY_STORE to your .env file
4. run ``` npm install ```
5. run ``` nodemon server.js ```
   * if you do not have nodemon, run: ``` npm install nodemon ```
   * More info: https://www.npmjs.com/package/nodemon
6. If it is successfully, please go to the endpoint section.

Endpoints:
- 
GET Requests:
* /get_shopify_url
* /get_products

POST/PUT Requests: 
* /get_product_metafields
* /create_product_metafields
* /update_product_metafields
   * for parameters and requests: https://shopify.dev/docs/admin-api/rest/reference/metafield?api[version]=2020-07

DELETE Requests:
* /delete_product_metafields

More info: https://shopify.dev/docs/admin-api/rest/reference

Frontend Projects:
-
* https://github.com/wksung/shopify-cart-generator
* https://github.com/wksung/shopify-metafield-app

Both of these React Application has used the node-endpoints. Run ``` npm install ``` on the React project and start using your Shopify API!
