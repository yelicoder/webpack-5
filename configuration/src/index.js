const cart = [];

function log(message) {
    console.log(message + message);
}

function addToCart(item) {
    cart.push(item);
    log("added item again: " + item);
}

function removedFromCart(idx) {
    cart.splice(idx,1);
    log("removed: " + idx);
}

addToCart("Waterproof Boots");