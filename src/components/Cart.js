import '../styles/Cart.css';
import { useState } from 'react';

function Cart({cart, updateCart}) {
  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
    (acc, plantType) => acc = acc + plantType.price * plantType.quantity,
    0)

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
      {cart.map(({name, price, quantity}, index) => (
        <div key={`${name}-${index}`}>
          {name} {price}€ x {quantity}
        </div>
      ))}
      <h3>Total : {total}€</h3>
      <button onClick={()=>updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}


export default Cart;
