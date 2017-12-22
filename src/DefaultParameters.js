function getDefaultDiscount() {
    return .10;
}

function applyDiscount(cost, discount = getDefaultDiscount()) {
// ----------------- OR ------------------------------------------
// function applyDiscount(cost, discount = .10) {
    return cost - (cost * discount);
}

console.log('Apply default 10% Discount and Cost becomes : ' + applyDiscount(100));

console.log('Apply custom 40% Discount and Cost becomes : ' + applyDiscount(100, .40));