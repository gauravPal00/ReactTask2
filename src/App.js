import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/header/Navbar';
import { AllPosts } from './Components/posts/AllPosts';
import { AddPost } from './Components/posts/AddPost';
import { AllAlbum } from './Components/albums/AllAlbum';
import { AddAlbum } from './Components/albums/AddAlbum';



function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<AllPosts/>}/>
        <Route path="/addpost" element={<AddPost/>} />
        <Route path="/allalbum" element={<AllAlbum/>} />
        <Route path='/addalbum' element={<AddAlbum/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
