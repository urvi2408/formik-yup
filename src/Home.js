import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
        <header>
        <li><Link to="/User" >User</Link></li>
        <li><Link to="/admin">Admin </Link></li><hr/>
        </header>
    </>
  );
}

export default Home;
