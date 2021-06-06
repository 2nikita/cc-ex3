module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(productID, respond) {
        for (var i = 0; i < mockData.length; i++) {
            var product = mockData[i];
            if (product.product_id == productID.productId) {
                var foundPrice = product.product_price;
            }
        }
        respond(null, { result: foundPrice });
    }
}