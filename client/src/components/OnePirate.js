import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';


const OnePirate = () => {
    const {id} = useParams();
    let [pirate, setPirate] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirates/${id}`)
        .then(res => {
            setPirate(res.data.pirate);
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(()=>{
        axios.put(`http://localhost:8000/api/pirates/${id}`, pirate)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [pirate])
    
    
    const clickHandler = (e)=>{
        
        
        if(e.target.name === "pegLeg"){
            if(pirate.pegLeg == true){
                console.log("pegleg originally, should now be false")
                setPirate({...pirate, pegLeg: false})
                console.log(pirate)
            }else{
                console.log("no pegleg originally, should be true now")
                setPirate({...pirate, pegLeg: true})
            }

        
            
        }
        else if (e.target.name === "hookHand"){
            setPirate({...pirate, hookHand: !pirate.hookHand})
        }
        else if (e.target.name === "eyePatch"){
            setPirate({...pirate, eyePatch: !pirate.eyePatch})
        }
       
       
    
 

    }
    return (
        <div className="container justify-content-center">
            <h1>{pirate.name}</h1>
            <div className="d-flex justify-content-center">
                <div>
                    <img src={pirate.imgURL} alt="pirating"></img>
                    <h4>"{pirate.catchPhrase}"</h4>  
                </div>
            <div>
                <h3>About</h3>
                <p>Position: {pirate.crewPosition}</p>
                <p>Treasures: {pirate.numChests}</p>
                <p>Peg leg: <button name="pegLeg" onClick={clickHandler}>{pirate.pegLeg ? "Yes" : "No"}</button></p>
                <p>Eye patch: <button name="eyePatch" onClick={clickHandler}>{pirate.eyePatch ? "Yes" : "No"}</button></p>
                <p>Hook Hand: <button name="hookHand" onClick={clickHandler}>{pirate.hookHand ? "Yes" : "No"}</button></p>
            </div>
            </div>
        <Link to={`/pirates/${pirate._id}/edit`}>Edit Pirate</Link>
        <br></br>
        <Link to="/">Go Home</Link>
        </div>
    );
};

export default OnePirate;