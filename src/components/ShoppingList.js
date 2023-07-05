import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"
import Categories from "./Categories";

function ShoppingList({cart, updateCart, filterCategory}) {


  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      const cartWithoutItem=cart.filter((plant) => plant.name !== name);
      updateCart([
        ...cartWithoutItem,
        { name, price, quantity: currentPlantAdded.quantity + 1 }
      ])
    } else {
      updateCart([...cart, {name: name, price: price, quantity: 1}])
    }
  }

  const plantListDisplayed = filterCategory === "" ? plantList : plantList.filter((plant)=> plant.category == filterCategory);

	return (
		<div>
      <p>Filtercategory : {filterCategory}</p>
      <ul className='lmj-plant-list'>
        {plantListDisplayed.map((plant) => (
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
