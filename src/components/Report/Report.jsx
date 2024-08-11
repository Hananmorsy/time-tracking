import './Report.css';
import jeremy from  "../../../public/assets/image-jeremy.png";
function Report() {
  
    return (
     <div id='child'>
        <div id='child2'>
        <img  id='photo1' src={jeremy} />
        <div>
        <p>Report for</p>
        <div id="text">
          <h1>Jeremy</h1>
        <h1>Robson</h1>
        </div>
       
        </div>
       
        </div>
        <div id='child3'>
        <button className='button button1'> Daily</button>
        <button className='button button1'>Weekly</button>
        <button className='button button1'>Monthly</button>
        </div>
       
     </div>
    )
  }
  

  export default Report
