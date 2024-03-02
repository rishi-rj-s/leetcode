/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    let x, y, z;
    x = Math.floor(purchaseAmount/10);
    y = purchaseAmount%10;
    z = y>=5 ? 10 : 0;
    console.log(x, y , z)
    return 100 -( x*10 + z);
};