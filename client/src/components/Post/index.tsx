import axios from "axios"
import { useEffect, useState } from "react"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import {AiFillDelete} from"react-icons/ai"


type Props = {
    children:any
    deletePost:()=>void;
} 


export function Post(props:Props) {
    const [Like, setLike] = useState(false)
   
    function handleLike(){
        setLike(!Like)
    }
   return (
    <div className="container-post">
    {props?.children}


    <AiFillDelete className="delete-post" color="#2e2e2e" onClick={props.deletePost}/>

    <div className="like-post">
        {Like==false? (<AiOutlineLike onClick={handleLike} className='like' size={23} />) : (<AiFillLike
            onClick={handleLike} className='like' size={23} /> )}
         <span>
            {Like ===false? "" : 1}
        </span>
    </div>
  
</div>
   )
    
  
}