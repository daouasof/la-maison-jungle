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
  let attribute = "";
  let type = "";
  switch ( scaleValue ) {
    case 1 :
      attribute = "peu";
      break;
    case 2:
      attribute = "modérement";
      break;
    case 3:
      attribute = "beaucoup";
      break;
    default:
      attribute = "no match";
      break;
    }

    switch ( careType ) {
      case 'light' :
        type = "de lumière";
        break;
      case 'water' :
        type = "d'arrosage";
        break;
      default:
        attribute = "no match";
        break;
  }

  alert(`Cette plante requiert ${attribute} ${type}`);
}

export default CareScale
