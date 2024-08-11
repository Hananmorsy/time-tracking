import './SelectionItem.css';
import Ellipsis from "../../../public/assets/icon-ellipsis.svg";

function SelectionItem(prpos) {
  
  return (
    <div className='child4' style={{backgroundColor : prpos.selectionColor}}>
      <img id='photo' src={prpos.selectionlogo} />
        < div className='child5'>
            <div className='point'>
            <h3>{prpos.selectionName}</h3>
            <img src={Ellipsis}/>
            
            </div>
            <div className='hours'>
            <h1>{prpos.selectionName2} </h1>
            <p>Last week-36 hrs</p>
            </div>
            
           
            
            
        </div>

    </div>
  
   
  )
}

export default SelectionItem