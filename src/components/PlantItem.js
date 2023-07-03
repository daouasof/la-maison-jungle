import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({ name, cover, light, water}) {
  return <li className='lmj-plant-item' >
    <img src={cover} alt={ name } className='lmj-plant-item-cover' />
    { name }
    <CareScale scaleValue={light} careType='light'/>
    <CareScale scaleValue={water} careType='water'/>
  </li>
}


export default PlantItem
