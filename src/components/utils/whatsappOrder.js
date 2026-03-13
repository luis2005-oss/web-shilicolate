export const sendOrderToWhatsApp = (cartItems, total) => {

  const phone = "51914622689"; 

  let message = "Hola, quisiera realizar el siguiente pedido:%0A%0A";

  cartItems.forEach((item) => {
    message += `• ${item.name} x${item.quantity} - $${item.price}%0A`;
  });

  message += `%0ATotal: $${total.toFixed(2)}`;

  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");
};