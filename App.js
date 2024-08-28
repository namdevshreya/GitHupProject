import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Layout from './components/Layout';
import Post from './components/pages/Post';
import PostLayout from './components/pages/PostLayout';
import PostDetails from './components/pages/PostDetail'; // Make sure to import PostDetails

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from root to /home */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="post" element={<PostLayout />}>
            <Route path=":category" element={<PostDetails />} />
          </Route>
          {/* Redirect to Home for unknown paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
