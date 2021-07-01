import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRoad } from '../../JS/actions/road'
import { ToastContainer, toast } from 'react-toastify';
import {useHistory} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';


function RoadForm() {
    const history=useHistory()
    const dispatch = useDispatch()
    const user_id = localStorage.getItem("user")
    const [dest, setDest] = useState(true)
    const [arr, setArr] = useState(false)
    const [place, setPlace] = useState(false)
    const [date, setDate] = useState(false)

    // useState for the input of road field
    const [road, setRoad] = useState({
        departure: "",
        arrive: "",
        nbplace: "",
        price: "", 
        date:""
    })
    //handleChange for the input of road fields
    const handleChange = (e) => {
        setRoad({ ...road, [e.target.name]: e.target.value })
    }
    //handleDest for destination field
    const handleDest = (e) => {
        e.preventDefault()
        if (road.departure === "") {
            toast.error("Ce champ est obligatoire")
        } else {
            setDest(false);
            setArr(true);
        }
    }
    //handleArr for Arrive field
    const handleArr = (e) => {
        e.preventDefault()
        if (road.arrive === "") {
            toast.error("Ce champ est obligatoire")
        } else {
            setArr(false);
            setPlace(true)
        }
    }
    //handleP for price and place fields
    const handleP = (e) => {
        e.preventDefault()
        if((road.place === "") && (road.price === ""))   {
            toast.error("Ce champ est obligatoire")
        } else if((road.place === "") || (road.price === "")) {
            toast.error("Ces champs est obligatoire")
        } else {
            setPlace(false);
            setDate(true)
        }
    }
    //handleClick to add a New road
    const handleClick = (e) => {
        e.preventDefault()
        if (road.date === "") {
            toast.error("Ce champ est obligatoire")
        } else {
            toast.success("Le trajet est ajouté")
            dispatch(addRoad(user_id, road))
            setDate(false)
            setDest(true)
            setRoad({
                departure: "",
                arrive: "",
                nbplace: "",
                price: ""
            })
            window.setTimeout(function () {
                history.push('/')
            }, 1000);
            
        }
    }

    return (
        <div>
            <form>
                {dest ?
                    <div className="road_field">
                        <h2 className="title">D’où partez-vous ?</h2>
                        <input type="text" placeholder="destination" name="departure" onChange={handleChange} />
                        <button className="btn"
                            onClick={handleDest}
                        >Continuer</button>
                    </div> : null}
                {arr ?
                    <div className="road_field">
                        <h2 className="title">Où allez vous ?</h2>
                        <input type="text" placeholder="arrivee" name="arrive" onChange={handleChange} />
                        <button className="btn"
                            onClick={handleArr}
                        >Continuer</button>
                    </div>
                    : null}
                {place ?
                    <div className="road_field">
                        <h2 className="title">Combien de place  ? Prix ?</h2>
                        <select onChange={handleChange} name="nbplace">
                            <option>places</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <input type="text" placeholder="prix" name="price" onChange={handleChange} />
                        <button className="btn"
                            onClick={handleP}
                        >Continuer</button>
                    </div>
                    : null
                }
                {date ?
                    <div className="road_field">
                        <h2 className="title">Quand vous partez ? </h2>
                        <input type="time" />
                        <input type="date" onChange={handleChange} name="date" />
                        <button type="submit" onClick={handleClick} className="btn">Finish</button>
                    </div> : null}
            </form>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default RoadForm
