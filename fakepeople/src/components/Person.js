import React from 'react'
import { connect } from "react-redux";
import { deletePerson } from "../actions";

const Person = props => {
    const handleDelete = () => {
        props.deletePerson(props.user.id)
    };

    const gender = () => {
        const ranNum = Math.floor(Math.random() * 100)
        if (ranNum > 50) {
            return "women"
        } else {
            return "men"
        }
    }
    console.log("gender", gender())
    const randomPerson = () => {
        return Math.floor(Math.random() * 99 )
    }
    console.log(randomPerson())
    const randomImageURL = () => {
        return `https://randomuser.me/portraits/${gender()}/${randomPerson()}.jpg`
    }
    console.log(randomImageURL())

    return (
        <div>
            <h2>{props.user.name}</h2>
            <p>Bio: {props.user.bio}</p>
            <img src={randomImageURL()} />
            <p>
                <button 
                    onClick={handleDelete}
                >
                    Remove Person
                </button>
            </p>
        </div>
    )
}

export default connect(null, { deletePerson })(Person);