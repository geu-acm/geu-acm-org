import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import Certificate from "./pages/Certificate";
import About from "./sections/About";
import Events from "./sections/Events";

function getRoute(){
  const host = window.location.host;
  const reqp = `${window.location.toString().split(host)[1]}`;

  if(reqp == "/#/certi") return ['certify', <Certificate />]
  else return ['/', <Landing />]
}

export default function App() {

  // alert(document.referer)

  var [pathVar,compVar] = getRoute()
  
  return (
    compVar
  )
}
