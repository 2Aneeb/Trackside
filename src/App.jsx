import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ViewPost from './pages/ViewPost';
import HomeFeed from './pages/HomeFeed';
import NavSearch from './components/NavSearch';
import NotFound from './pages/NotFound';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  let element = useRoutes([
    {
      path: "/",
      element: <HomeFeed searchTerm={searchTerm} />, 
    },
    {
      path: "/view-post/:id",
      element: <ViewPost />,
    },
    {
      path: "/create-post",
      element: <CreatePost />,
    },
    {
      path: "/edit-post/:id",
      element: <EditPost />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <NavSearch setSearchTerm={setSearchTerm} />
      {element}
    </div>
  );
}

export default App;
