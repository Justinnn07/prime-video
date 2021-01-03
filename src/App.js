import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import Footer from "./Footer";
import Header from "./Header";
import Slides from "./Slides";
import VideoCard from "./VideoCard";

function App() {
  const [watched, setWatched] = useState([]);
  const [latest, setLatest] = useState([]);
  const [kids, setKids] = useState([]);
  const [comedy, setComedy] = useState([]);

  useEffect(() => {
    db.collection("comedy").onSnapshot((snapshot) => {
      setComedy(snapshot.docs.map((doc) => doc.data()));
    });
  });

  useEffect(() => {
    db.collection("kids").onSnapshot((snapshot) => {
      setKids(snapshot.docs.map((doc) => doc.data()));
    });
  });

  useEffect(() => {
    db.collection("latest-movies").onSnapshot((snapshot) => {
      setLatest(snapshot.docs.map((doc) => doc.data()));
    });
  });

  useEffect(() => {
    db.collection("watched").onSnapshot((snapshot) => {
      setWatched(snapshot.docs.map((doc) => doc.data()));
    });
  });
  return (
    <div className="App">
      <Header />
      <Slides />
      <h2>Watch next TV and movies</h2>
      <div className="videoCard1">
        {watched.map((watched) => (
          <VideoCard img={watched.image} />
        ))}
      </div>
      <h3 className="latest">Latest Movies</h3>
      <div className="videoCard1">
        {latest.map((latest) => (
          <VideoCard img={latest.image} />
        ))}
      </div>
      <h3 className="latest">Kids and family movies</h3>
      <div className="videoCard1">
        {kids.map((kids) => (
          <VideoCard img={kids.image} />
        ))}
      </div>
      <h3 className="latest">Comedy Movies</h3>
      <div className="videoCard1">
        {comedy.map((comedy) => (
          <VideoCard img={comedy.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
