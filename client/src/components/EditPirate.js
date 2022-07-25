import React, {useState, useEffect} from 'react';
import axios from 'axios';
import{Link, useNavigate} from 'react-router-dom';
import {useParams} from 'react-router'


const EditPirate = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    let [pirate, setPirate] = useState({});
    let [formErrors, setFormErrors] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirates/${id}`)
        .then(res => {
            setPirate(res.data.pirate);
        })
        .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        if (e.target.type == "checkbox") {
            setPirate({
                ...pirate, [e.target.name]: e.target.checked
            })
        }
        else {
            setPirate({
                ...pirate, [e.target.name]: e.target.value
            })
        }
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pirates/${id}`, pirate)
            .then(res => {
                if(res.data.error){
                    
                    setFormErrors(res.data.error.errors)
                }
                else{
                    
                    navigate("/");
            }
                
            })
            .catch(err => console.log(err))
    }

   


    return (
        <div>
            <>edit page</>
            <h1>Edit Pirate</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Pirate name:</label>
                    <input name="name" type="text" onChange={changeHandler} value={pirate.name}></input>
                    <p className="text-danger">{formErrors?.name?.message}</p>
                </div>
                <div>
                    <label>Image URL:</label>
                    <input name="imageURL" type="text" onChange={changeHandler} value={pirate.imageURL}></input>
                    <p className="text-danger">{formErrors?.imageURL?.message}</p>
                </div>
                <div>
                    <label>Number of treasure chests:</label>
                    <input name="numChests" type="number" onChange={changeHandler} value={pirate.numChests}></input>
                    <p className="text-danger">{formErrors?.numChests?.message}</p>
                </div>
                <div>
                    <label>Pirate catch phrase:</label>
                    <input name="catchPhrase" type="text" onChange={changeHandler} value={pirate.catchPhrase}></input>
                    <p className="text-danger">{formErrors?.catchPhrase?.message}</p>
                </div>
                <div>
                    <label>Crew Position:</label>
                    <select name="crewPosition" value={pirate.crewPosition}onChange={changeHandler}>
                        <option>Captain</option>
                        <option>First Mate</option>
                        <option>Quarter Master</option>
                        <option>Boatswain</option>
                        <option>Powder Monkey</option>
                    </select>
                    <p className="text-danger">{formErrors?.crewPosition?.message}</p>
                </div>
                <div>
                    <input name="pegLeg" type="checkbox" onChange={changeHandler} checked={pirate.pegLeg}></input>
                    <label>Peg Leg:</label>
                </div>
                <div>
                    <input name="eyePatch" type="checkbox" onChange={changeHandler} checked={pirate.eyePatch}></input>
                    <label>Eye Patch:</label>
                </div>
                <div>
                    <input name="hookHand" type="checkbox" onChange={changeHandler} checked={pirate.hookHand}></input>
                    <label>Hook Hand:</label>
                </div>
                <button className="btn btn-success">Add Pirate</button>

            </form>
        <Link to="/">Go Back</Link>
        </div>
    );
};

export default EditPirate;