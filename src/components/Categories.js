import { plantList } from "../datas/plantList"

function Categories({filterCategory, updateFilterCategory}){
  const categories = plantList.reduce(
    (acc, plant)=>
      !acc.includes(plant.category) ? [...acc, plant.category] : acc,
    new Array()
  );

  return <div className="lmj-categories">
    <label> Choisissez une catégorie:
      <select name='category' onChange={(e)=>updateFilterCategory(e.target.value)}>
        <option value="">Toutes les catégories</option>
        {categories.map((categorie, index)=> <option key={`${categorie}-${index}`} value={categorie}>{categorie}</option>) }
      </select>
    </label>
  </div>
}

export default Categories
