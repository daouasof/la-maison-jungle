import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? (<img src={Sun} alt="sun" />) : (<img src={Water} alt="water" />)

	return (
		<div onClick={ ()=> handleClick(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}


function handleClick (scaleValue, careType) {
  const attribute = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
  };

  alert(`Cette plante requiert ${attribute[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`);
}

export default CareScale
