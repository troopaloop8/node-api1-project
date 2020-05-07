import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addNewPerson, getPerson } from "../actions";

const AddPerson = (props) => {

    const [ user, setUser ] = useState({});

    

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addNewPerson(user);
        setUser({
            name: "",
            bio: "",
            
        })  
        props.getPerson();
    }

    useEffect(() => {
        props.getPerson();
      }, []);

    return (
        <div>
      <h1 className="subtitle">MAKE FAKE PERSON</h1>
      <form>
        <div className="field">
          <div className="control">
            <input
              className="input is-info"
              placeholder="Name"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-info"
              placeholder="Bio"
              type="text"
              name="bio"
              value={user.bio}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* <select value={user.gender}>Gender
            <option value="men">men</option>
            <option value="women">women</option>
        </select> */}
        <input
          className="button is-small is-info is-bold"
          type="submit"
          value="Add Fake Person"
          onClick={handleSubmit}
        />
      </form>
    </div>
    )
}

export default connect(null, { addNewPerson, getPerson })(AddPerson);