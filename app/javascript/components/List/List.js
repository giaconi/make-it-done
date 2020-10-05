import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Link } from  'react-router-dom'
import axios from "axios";

const List = (props) => {
  const [listName, setlistName] = useState("");
  const [listsArray, setlistsArray] = useState([]);

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/lists/${slug}`
    
    axios
      .get(url)
      .then((response) => {
        setlistName(response.data.data.attributes.title);
        setlistsArray(response.data.included);
      })
      .catch((response) => console.log(response));
    }, []);

  return (
    <div className="list_card">
      <Link to={'/lists'}>
        <div className="navigation">X</div>
      </Link>
      <div className="list_name">{listName}</div>
      <div>
        {listsArray.map((card, i) => {
          return (
            <div className="task" key={i}>
              <div className="task_title">{card.attributes.description}</div>
              <div className="task_completion">{
                (card.attributes.done) ? "done" : 'not done'
              }</div>
              <div className="task_duration">duration: {card.attributes.duration} minutes</div>
            </div>
        );})}
      </div>
    </div>
  );
}

export default List