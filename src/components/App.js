import Banner from './Banner';
import Cart from './Cart';
import Categories from './Categories';
import Footer from './Footer';
import ShoppingList from './ShoppingList';

import logo from '../assets/logo.png';

import '../styles/Layout.css'

import { useState } from 'react'


function App() {
	const [cart, updateCart] = useState([]);
  const [filterCategory, updateFilterCategory] = useState("");

  return <div>
      <Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart}/>
				<div>
          <Categories filterCategory={filterCategory} updateFilterCategory={updateFilterCategory} />
          <ShoppingList cart={cart} updateCart={updateCart} filterCategory={filterCategory}/>
        </div>
			</div>
			<Footer />
    </div>
}

export default App;
