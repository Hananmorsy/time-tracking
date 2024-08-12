import './Selection.css';

import SelectionItem from '../SelectionItem/SelectionItem';

import { useEffect, useState } from 'react';

function Selection() {
  const [arrayOfObject,setArrayOfObject] = useState([
    {
      selectionColor:"hsl(43, 84%, 65%)",
      selectionlogo: "/assets/icon-work.svg",
       selectionName:"Work" ,
        selectionName2 :"32hrs ",
        id: 1
          },
      {
        selectionColor:"hsl(195, 74%, 62%)",
        selectionlogo: "/assets/icon-play.svg",
        selectionName:"play",
        selectionName2:"10hrs",
         id : 2
      },
      {
        selectionColor:"hsl(348, 100%, 68%)",
        selectionlogo: "/assets/icon-study.svg",
        selectionName:"Study",
        selectionName2:"4hrs",
         id: 3
      },
      {
        selectionColor:"hsl(145, 58%, 55%)",
        selectionlogo: "/assets/icon-exercise.svg",
        selectionName:"Exercise",
       selectionName2 :"4hrs", 
         id : 4
      },
      {
        selectionColor:"hsl(264, 64%, 52%)",
        selectionlogo: "/assets/icon-social.svg",
        selectionName:"Social",
        selectionName2:"5hrs",
         id : 5
      },
      {
        selectionColor:"hsl(43, 84%, 65%)",
        selectionlogo: "/assets/icon-self-care.svg",
        selectionName:"SelfCare",
        selectionName2:"2hrs",
         id : 6
      }
  ])
 
  return (
   <div className='selectionWrapper'>
    {arrayOfObject.map((item)=>{
      return(
        <SelectionItem 
        selectionColor ={item.selectionColor}
        selectionlogo = {item.selectionlogo}
        selectionName={item.selectionName}
        selectionName2={item.selectionName2} 
        key = {item.id}
    ></SelectionItem>

      )
    })
    }

   </div>
  );
}

export default Selection
