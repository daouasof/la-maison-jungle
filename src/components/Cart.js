import '../styles/Cart.css'

function Cart () {
  const monsteraPrice = 8;
  const ivyPrice = 10;
  const flowerPrice = 15;
  return (<div className='lmj-cart'>
    <h3>Cart</h3>
    <ul>
      <li>Monstera: { monsteraPrice }€</li>
      <li>Ivy: { ivyPrice }€</li>
      <li>Flower: { flowerPrice }€</li>
    </ul>
    <p>Total: { monsteraPrice + ivyPrice + flowerPrice }€</p>
  </div>
  );
}

export default Cart;
