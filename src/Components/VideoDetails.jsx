import React, { useState } from 'react'

const VideoDetails = (props) => {
    const { title,hashtags} = props
    const[likes,setLikes]=useState(0)
    const [views,setViews]=useState(props.views)

    const handleButton=()=>{
        setLikes(likes+1)
    }

    const handleViews=(e)=>{
        e.preventDefault();
        
        setViews(views+1)
    }

    return (
        <div>
            <fieldset>
                <legend><h1>  Video Information</h1></legend>

                <h2>{title}</h2>
                <h2>{views}</h2>
                <button onClick={handleViews}>{views}Increase Likes</button>
                {/* <h3>Hashtags:{hashtags}</h3> */}
                <ul>
                    {
                        hashtags.map((tag, index) => {
                            return (

                                <li> {index} {tag}</li>
                            )
                        })
                    }

                </ul>
                <button onClick={handleButton}>Add Likes{likes}</button>



            </fieldset>



        </div>
    )
}

export default VideoDetails
