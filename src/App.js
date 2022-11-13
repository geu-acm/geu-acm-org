import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import Certificate from "./pages/Certificate";
import Verify from "./pages/Verify";
import About from "./sections/About";
import Events from "./sections/Events";

function getRoute(){
  const host = window.location.host;
  const reqp = `${window.location.toString().split(host)[1]}`;

  if(reqp == "/#/certi" | reqp == "/#/certi/") return ['verify',<Certificate />]
  else if(reqp == /\/#\/certi\/[\s\S]*/.exec(reqp) ) return ['certify', <Verify loc={reqp} />]
  else return ['/', <Landing />]
}

export default function App() {

  // alert(document.referer)

  var [pathVar,comp] = getRoute()
  
  return (
    comp
  )
}
