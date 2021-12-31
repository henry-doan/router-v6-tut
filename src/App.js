import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import NoMatch from './components/pages/NoMatch';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css"
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* element because it is a jsx element */}
        {/* no need to exact since v6 always does exact */}
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/"  element={<Home />} />
        {/* <Route path="/about"  element={<About />} /> */}
        <Route path="/about/*"  element={<About />}>
          {/* if done this way have to have the outlet in the parent nested route */}
          <Route path="me"  element={<p>More About</p>} />
        </Route>
        {/* order doesn't matter anymore with v6 but the no match */}
        <Route path="/profile/:username"  element={<Profile />} />
        {/* starts with the profile  */}
        {/* <Route path="/profile/*"  element={<Profile />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
