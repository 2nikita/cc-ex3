module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(productID, respond) {
        for (var i = 0; i < mockData.length; i++) {
            var product = mockData[i];
            if (product.product_id == productID) {
                respond(null, { result: product.product_url });
            }
        }
    }

    function productName(productID, respond) {
        for (var i = 0; i < mockData.length; i++) {
            var product = mockData[i];
            if (product.product_id == productID) {
                respond(null, { result: product.product_name });
            }
        }
    }
}