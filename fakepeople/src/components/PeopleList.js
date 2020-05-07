import React, { useEffect } from "react";
import Person from "./Person";
import { connect } from "react-redux";
import { getPerson } from "../actions";

const PeopleList = (props) => {
   
  

  console.log(props.users.length);

  if (props.users.length > 0) {
    return (
        <div>
          <h1>These Are Fake People:</h1>
          <div>
              
            {props.users.map((user, index) => {
              return (<Person user={user} key={index} />);
            })}
          </div>
        </div>
      );
  } else  {
    return (<div>No one here yet</div>);
  }  
  
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { getPerson })(PeopleList);
