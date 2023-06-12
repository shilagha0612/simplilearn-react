import React,{useState} from 'react'

const MenuItem = (props) => {
    let {dish,price,likes,children}=props
    
    const[like,setLikes]=useState(likes)

    const handleClick=(e)=>{
        e.preventDefault();
        
        
        setLikes(like+1)
        

    }
   

  return (
    <div>MenuItem
        <h1>Dish:{dish}</h1>
        <h1>Price:{price}</h1>
        <h1>Likes{like}</h1>
        <h2>{children}</h2>
        <button onClick={handleClick}>Click</button>
    </div>
    
    
  )
}

export default MenuItem