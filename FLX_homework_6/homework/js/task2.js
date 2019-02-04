let price = prompt("Price without discount ");
let discount = prompt("Discount");

if (price < 0 || price > 9999999 || discount < 0 || discount > 99) {
    alert('Invalid input data');
} else {
    let finalPrice = (price - ((price / 100) * discount));
    let saved = price - finalPrice;
    let priceBefor = ('Price without discount: ' + price + "\n" + 'Discount: ' + discount + "\n");
    let priceAfter =('Price with discount: ' + finalPrice.toFixed(2) + "\n" + 'Saved: ' + saved.toFixed(2));
    alert(priceBefor+priceAfter);
}