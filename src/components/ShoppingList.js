import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
      new Array()
     )

	return (
		<div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className='lmj-plant-list'>
        {plantList.map((plant) => (
          <PlantItem
            key={ plant.id }
            name={plant.name}
            light={plant.light}
            water={plant.water} />
        ))}
      </ul>
    </div>
	)
}



export default ShoppingList
