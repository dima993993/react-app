import React from "react";
import "./App.css";
import ContainerDialogs from "./components/Dialogs/ContainerDialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import ContainerUsers from "./components/Users/ContainerUsers";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <div>
      <div className='header_wrapper'>
        <Header />
      </div>
      <div className='app_wrapper'>
        <Navbar />
        <section className='content'>
          <Routes>
            <Route path='profile/*' element={<ProfileContainer />} />
            <Route path='dialogs/*' element={<ContainerDialogs />} />
            <Route path='news' element={<News />} />
            <Route path='music' element={<Music />} />
            <Route path='settings' element={<Settings />} />
            <Route path='users' element={<ContainerUsers />} />
          </Routes>
        </section>
        <aside className='right_bar'>
          <div>Right Bar</div>
        </aside>
      </div>
    </div>
  );
};

export default App;
