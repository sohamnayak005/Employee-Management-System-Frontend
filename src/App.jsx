import React from 'react'
import ListOfEmployee from './components/ListOfEmployee'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
function App() {
  return (
    <>
     <Router>
     <Header />
      <Routes>
        <Route exact path="/" element={<ListOfEmployee />} />
        <Route exact path="/home" element={<ListOfEmployee />} />
        <Route path="/add-employee" element={<AddEmployee/>} />
        <Route path="/edit-employee/:id" element={<AddEmployee />} />
        <Route path="/delete-employee/:id" element={<ListOfEmployee />} />
      </Routes>
      <Footer/>
    </Router>
      </>
  )
}
export default App






