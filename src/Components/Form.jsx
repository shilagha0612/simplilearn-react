import React, { useState } from 'react'

const darkMode={
    backgroundColor:'black',
    color:'white'
}

const lightMode={
    backgroundColor:'white',
    color:'black'
}
const Form = () => {

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [age, setAge] = useState("")
    const [img, setImg] = useState("")

    let [listOfPets, setlistOfPets] = useState([])

    let[light,setLight]=useState(true)

    const lightSwitch=()=> {
        setLight(!light)
    }


    const createPets = (e) => {
        e.preventDefault();
        console.log("form submitted", name, age, type, img)
        let petObj = { name, type, age, img }
        setlistOfPets([...listOfPets, petObj])
        

    }


    return (
        <div style={light?  lightMode : darkMode}>
            <form onSubmit={createPets}>
                {/* <button onClick={lightSwitch} >{light ? 'Dark Mode': 'Light Mode'}</button> */}
                <div>
                    <label>Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                </div>
                <div>
                    <label>Type: </label>
                    <input type="text" onChange={(e) => setType(e.target.value)} value={type}/>
                </div>
                <div>
                    <label>Age: </label>
                    <input type="number" onChange={(e) => setAge(e.target.value)} value={age}/>
                </div>
                <div>
                    <label>Image: </label>
                    <input type="text" onChange={(e) => setImg(e.target.value)} value={img} />
                </div>
                <button onClick={lightSwitch}>{light?"SUBMIT":"Thanks for submit"}</button>



                <input type="submit" value="Create User" />
            </form>
            <hr />
            {
                listOfPets.map((pet, index) => {
                    return (
                        <div>
                            <h1>{pet.name}
                            </h1>
                            <h2>{pet.type}
                            </h2>
                            <h2>{pet.age}</h2>
                            <img src={pet.img} alt='pic ' height="200px" />
                        </div>
                    )
                })

            }



        </div>
    )
}

export default Form
