import { Router } from "@reach/router";
import { useEffect, useState } from "react";
import Wish from "./components/Wish";
import Wishes from "./components/wishes";
import "./css/main.css"
import AuthService from "./AuthService";
import Login from "./components/Login";


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

  // Login using API
  async function login(username, password) {
    try {
      await AuthService.login(username, password);
      // Fetch data again after logging in
    } catch (error) {
      console.error("Login", error);
    }
  }

  let loginPart = <Login login={login}></Login>;
  if (AuthService.loggedIn()) {
    loginPart = "Logged in!";
  }

  function getWish(id) {
    return wishes.find((wish) => wish.id === parseInt(id));
  }

  // API POST for wishes
  function addWish(title, description, link, author) {
    const newWish = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "title": title, "description": description, "link": link, "author": author }),
    };
    fetch(`${API_URL}/wishes`, newWish)
      .then(response => response.json())
      .then(createdWish => setWish([...wishes, createdWish]));

  }

  function addComment(text, author, id) {
    const newComment = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "text": text, "author": author }),
    };
    fetch(`${API_URL}/wishes/${id}/comments`, newComment)
      .then(response => response.json())
      .then(createdComment => setWish([...wishes, createdComment]));
  }

  function deleteWish(id) {
    const deletedWish = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`${API_URL}/wishes/${id}/comments`, deletedWish)
      .then(response => response.json())

  }

  return (
    <>
      {loginPart}
      <Router>
        <Wishes path="/" data={wishes} addWish={addWish}></Wishes>
        <Wish path="/wish/:id" getWish={getWish} addComment={addComment}></Wish>
      </Router>
    </>
  );
}

export default App;
