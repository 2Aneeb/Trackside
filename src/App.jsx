import React from 'react';
import { useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ViewPost from './pages/ViewPost';
import HomeFeed from './pages/HomeFeed';
import NavSearch from './components/NavSearch';


function App() {
   
    // Sets up routes
    let element = useRoutes([
      {
        path:"/",
        element: <HomeFeed/>
      },
      {
        path:"/view-post",
        element: <ViewPost/>
      },
      {
        path:"/create-post",
        element: <CreatePost/>
      },
      {
        path:"/edit-post/:id",
        element: <EditPost/>
      },
   
  
    ]);

  return (
    <div>
      <NavSearch/>

      {element}
    
    </div>
    
  )
}

export default App
