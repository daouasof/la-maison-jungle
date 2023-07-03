import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
      <div>
        <textarea
          value={inputValue}
          onChange= {(e)=>setInputValue(e.target.value)}
          onBlur={()=>checkValue(inputValue)}/>
      </div>
		</footer>
	)
}

function checkValue(value){
  if (!value.includes('@')){
    return alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
  }
}

export default Footer;
