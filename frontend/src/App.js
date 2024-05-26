import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Team from "./components/home/Team";
import Login from "./components/home/Login";
import AllMembers from "./components/AllMembers/AllMembers";
import AddUser from "./components/AdminPanel/AddUser";
import AddEvent from "./components/AdminPanel/AddEvent";
import BlogsComponent from "./components/BlogsComponent";
import AllBlogsComponent from "./components/AllBlogsComponent";
import EventsAvenueComponent from "./components/EventsAvenueComponent";
import { useEffect, useState } from "react";
import ExpressionDetection from "./components/ExpressionDetection";

function App() {

  const [yScroll, setYScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setYScroll(window.scrollY);
    })

    return () => {
      window.removeEventListener('scroll', () => {
        console.log("REmoved");
      });
    }
  })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Header yScroll={yScroll}/>} />
          <Route exact path="/" element={<Home yScroll={yScroll} />} />
          {/* <Route exact path="/team" element={<Team />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/team/all" element={<AllMembers yScroll={yScroll} />} />
          <Route exact path="/admin" element={<AddUser yScroll={yScroll} />} />
          <Route exact path="/addEvent" element={<AddEvent  yScroll={yScroll}/>} />
          <Route exact path="/blogs" element={<AllBlogsComponent yScroll={yScroll} />} />
          <Route exact path="/blogs/:blogId" element={<BlogsComponent yScroll={yScroll} />} />
          <Route exact path="/events/:avenueId" element={<EventsAvenueComponent yScroll={yScroll} />} />
          <Route exact path="/expression" element={<ExpressionDetection />} />
          {/* <Route exact path="/events/:avenue" element={<BlogsComponent />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
