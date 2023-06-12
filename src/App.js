import './App.css';
import { useState } from 'react';
import Register from './Register';
import Modal from './Components/Modal';

function App() {

  const [openModal, setOpenModal] = useState(false);

  setOpenModal = () => {
    console.log('setOpenModal=', openModal);
  }

  return (
    <div className="App">
       <Register setOpenModalMethod={setOpenModal}/>
       <Modal />
    </div>
  );
}

export default App;
