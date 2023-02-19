import {Gallery} from './components/Gallery/Gallery'
import React from 'react';
import {BrowserRouter,BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';
import {useState} from 'react'
import {Modal} from './components/Modal/Modal'
import { Main } from './components/Main/Main';
import {Review} from './components/Review/Review';
import { Quiz } from './components/Quiz/Quiz';
import { Blog } from './components/Blog/Blog';
import {Header} from './components/Header/Header'; 
import { Navigate} from 'react-router-dom';
export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState (() => {
    if (localStorage.getItem('isLogged') === 'true') return true 
    return false
  })
  const [isAdmin, setIsAdmin]= useState( () => {
    if (localStorage.getItem('isAdmin') === 'true'   ) return true 
    return false
  })
  const [userName,setUserName] = useState((localStorage.getItem('userName') !=''))
  return (
      <>
       
        <>
        <div className="App">
          <Header
          props
          isAdmin = {isAdmin}
          userNamer = {userName}
          setIsLoggedIn= {setIsLoggedIn}
          isLoggedIn ={isLoggedIn}/>
        </div>
        </>

 
       <main>
        <BrowserRouter>
        <Routes>
          
          <Route  exact path ="/" element = {<Main/>}/>
          <Route exact path ="/login" element = {!isLoggedIn?<Modal
          props
          setIsAdmin={setIsAdmin}
          setUserName = {setUserName}
          setIsLoggedIn = {setIsLoggedIn}
           />
          :<Navigate to="/main"/>}/>
        
           <Route   exact  path ="/review" element = {<Review/> } />
           <Route path="/quiz" element = {<Quiz/> } />
           <Route path="/blog" element = {<Blog/>}  />

           <Route path ="/gallery" element = {<Gallery/>}/>
        </Routes>
        </BrowserRouter>
       </main>
      </>  
  );

}
export default App;
