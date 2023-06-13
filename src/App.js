import './App.css';
import { useState } from 'react';
import Register from './Register';
// import Modal from './Components/Modal';

function App() {

  // const [openModal, setOpenModal] = useState(false);

  // const useOpenModal = (e) => {
  //   console.log('setOpenModal=', e);
  //   setOpenModal(e);
  // }

  return (
    <div className="App">
       {/* <Register setOpenModalMethod={useOpenModal}/> */}
       {/* <Register setOpenModalMethod={(e) => setOpenModal(e)}/> */}
       <Register /> 
       {/* {openModal && <Modal setModal={setOpenModal}/>} */}
    </div>
  );
}

export default App;
