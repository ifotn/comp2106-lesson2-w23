const http = require('http');
const accounting = require('accounting');

http.createServer((req, res) => {
    res.writeHead(200);
    res.write('<h3>Tax Calculator</h3>');

    // create a subtotal var for calculation
    let subTotal = 48.99;

    // calc the tax
    let tax = subTotal * 0.13;

    // calc the total
    let total = subTotal + tax;

    // display our values
    res.write(`<h5>Sub-Total: ${accounting.formatMoney(subTotal)}</h5>`);
    res.write(`<h5>Tax: ${accounting.formatMoney(tax)}</h5>`);
    res.write(`<h5>Total: ${accounting.formatMoney(total)}</h5>`);

    res.end();
}).listen(3000);

console.log('Server running');