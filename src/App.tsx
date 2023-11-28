import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="app">
      <Banner></Banner>
      <Row title="Netflix Originals" url="discover/tv" isLargeRow={false}></Row>
      <Row title="Trending" url="/trending/all/week" isLargeRow={true}></Row>
      <Row title="Popular Movies" url="/movie/popular" isLargeRow={true}></Row>
      <Row title="Now Playing" url="movie/now_playing" isLargeRow={true}></Row>
      <Row title="Top Rated" url="/movie/top_rated" isLargeRow={true}></Row>
      <Row title="Upcoming" url="movie/upcoming" isLargeRow={true}></Row>
    </div>
  );
}

export default App;
