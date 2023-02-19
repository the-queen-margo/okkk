import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import {React,useState} from "react";


export const Collection =({name, images})=> {
   const [plaginVis,setPlagin] = useState(false);
   const picClickEvent =( ) =>{
    setPlagin(!plaginVis)
   }
return (

    <>
    {!plaginVis?

    <div className="collection" onClick={picClickEvent} >
    <img  className="collection__big" src={images[0]} alt="Item" />
    <div className="collection__bottom">
    <img  className="collection__mini" src={images[1]} alt="Item" />
    <img  className="collection__mini" src={images[2]} alt="Item" />
    <img  className="collection__mini" src={images[3]} alt="Item" />
 
    </div>
    <h4>{name}</h4>
</div>
: <Lightbox images={images} alt="item" onClose ={picClickEvent}/>
}
</>
);
}