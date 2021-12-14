import { Router } from "@reach/router";
import { useEffect, useState } from "react";
import Wish from "./components/Wish";
import Wishes from "./components/wishes";
const API_URL = process.env.REACT_APP_API;

function App() {
  const [wishes, setWish] = useState([]);

  useEffect(() => {
    async function getWishData() {
      const url = `${API_URL}/wishes`;
      const response = await fetch(url);
      const data = await response.json();
      setWish(data)
    }
    getWishData();
  }, []);

  function getWish(id) {
    return wishes.find((wish) => wish.id === parseInt(id));
  }

  // API POST for wishes
  function addWish(title, description, link, author) {
    if (title.length <= 500) {
      const newWish = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "title": title, "description": description, "link": link, "author": author }),
      };
      fetch(`${API_URL}/wishes`, newWish)
        .then(response => response.json())
        .then(createdWish => setWish([...wishes, createdWish]));
    }
  }

  // API PUT for adding comments
  function addComment(comment, id) {
    const newComment = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "comments": comment })
    };
    const postIndex = wishes.findIndex(post => post._id === id)
    fetch(`${API_URL}/wishes/${id}/comment`, newComment)
      .then(response => response.json())
      .then(createdComment => setWish([...wishes.slice(0, postIndex), createdComment, ...wishes.slice(postIndex + 1)]));
  }

  return (
    <>
      <Router>
        <Wishes path="/" data={wishes} addWish={addWish} addComment={addComment}></Wishes>
        <Wish path="/wish/:id" getWish={getWish} addComment={addComment}></Wish>
      </Router>
    </>
  );
}

export default App;
