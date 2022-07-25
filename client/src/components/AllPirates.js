import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';


const AllPirates = () => {
    let [pirateList, setPirateList] = useState([]);
    let [isDeleted, setIsDeleted] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates")
        .then(pirates => {
            console.log(pirates)
            let sortedPirates = pirates.data.pirates.sort(function(a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })
            setPirateList(sortedPirates)
        })
        .catch(err=>console.log(err))
    }, [isDeleted])

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
        .then(res=> console.log(res))
        .catch(err=>console.log(err))
        setIsDeleted(!isDeleted)

    }

    return (
        <div className="container">
            <div className="d-flex">
            <h1>Pirate Crew</h1>
            <Link to ="/pirates/new">Add Pirate</Link>

            </div>
            

            {pirateList.map((pirate)=>{
                    return(
                        <div className="d-flex" key={pirate._id}>
                            <img src={pirate.imageURL} alt={`image of ${pirate.name}`}/>
                            <div>
                                <h3>{pirate.name}</h3>
                                <Link to={`/pirates/${pirate._id}`}>View Pirate</Link>
                                <button className="btn btn-danger" onClick = {()=>deleteHandler(pirate._id)}>Walk the Plank</button>
                            </div>
                        </div>
                    )
            })}
        </div>
    );
};

export default AllPirates;