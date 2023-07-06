import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({ name, cover, light, water, price}) {
  return <li className='lmj-plant-item' >
    <span className='lmj-plant-item-price'>{price}€</span>
    <img src={cover} alt={ name } className='lmj-plant-item-cover' />
    <div className="lmj-plant-item-description">
      { name }
      <div className="lmj-plant-carescale">
        <CareScale scaleValue={water} careType='water'/>
        <CareScale scaleValue={light} careType='light'/>
      </div>
    </div>
  </li>
}


export default PlantItem
