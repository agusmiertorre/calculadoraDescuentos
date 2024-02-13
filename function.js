function calcularDescuento() {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);

    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;

    document.getElementById('result').innerHTML = `
        <p>Descuento: $${discountAmount.toFixed(2)}</p>
        <p>Total a pagar: $${finalPrice.toFixed(2)}</p>
    `;
}
