import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import { useState } from "react";
import NoticeModal from "./components/Modals/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  // const openModal = () => {
  //   setModalOpen(true);
  // };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div>
        {/* <button onClick={openModal}>모달 팝업</button> */}
        <NoticeModal open={modalOpen} close={closeModal} header="공지">
          팝업창
        </NoticeModal>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
