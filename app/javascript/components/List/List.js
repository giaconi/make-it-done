import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Link } from  'react-router-dom'
import axios from "axios";

const List = (props) => {
  const [listName, setlistName] = useState("");
  const [listsArray, setlistsArray] = useState([]);

  const url = `/api/v1${props.history.location.pathname}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response)
        setlistName(response.data.data.attributes.title);
        setlistsArray(response.data.included);
      })
      .catch((response) => console.log(response));
  }, []);

  return (
    <div>
      <Link to={'/lists'}>
        <p>Back</p>
      </Link>
      <h2>{listName}</h2>
      <div>
        {listsArray.map((card) => {
          return (
            <div>
              <h3>{card.attributes.description}</h3>
              <h3>{
                (card.attributes.done) ? "done" : 'not done'
              }</h3>
              <h3>duration: {card.attributes.duration} minutes</h3>
            </div>
        );})}
      </div>
    </div>
  );
}

export default List