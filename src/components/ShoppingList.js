import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"

function ShoppingList({cart, updateCart}) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
      new Array()
    )

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      const cartWithoutItem=cart.filter((plant) => plant.name !== name);
      updateCart([
        ...cartWithoutItem,
        { name, price, quantity: currentPlantAdded.quantity + 1 }
      ])
    } else {
      updateCart([...cart, {name, price, quantity: 1}])
    }
  }

	return (
		<div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className='lmj-plant-list'>
        {plantList.map((plant) => (
          <div key={plant.id}>
            <PlantItem
              key={ plant.id }
              name={plant.name}
              light={plant.light}
              water={plant.water}
              cover={plant.cover} />
              <button onClick={()=>addToCart(plant.name, plant.price)}>Ajouter au panier</button>
          </div>
        ))}
      </ul>
    </div>
	)
}



export default ShoppingList
