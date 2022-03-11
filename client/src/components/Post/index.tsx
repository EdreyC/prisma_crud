import { useEffect, useState } from "react"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import "./styles.css"

type Props = {
    children:string
}

export default function Post(props:Props) {
    const [like, setLike] = useState(true)
    const [countLike,setCountLike] = useState(0)

    function handleButtonLike() {
        setLike(!like)
        if(like==true){
            setCountLike(1)
        }
        else{
            setCountLike(0)
        }
    }
   

    return (
        <div className="container-post">
            {props.children}
            <div className="like-post">
                {like? (<AiOutlineLike onClick={handleButtonLike} className='like' size={23} />) : (<AiFillLike
                    onClick={handleButtonLike} className='like' size={23} /> )}
                 <span>
                    {countLike}
                </span>
            </div>
          
        </div>
    )
}