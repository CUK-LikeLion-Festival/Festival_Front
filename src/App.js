import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import { useState } from "react";
import NoticeModal from "./components/Modals/Modal";
import ModalDetail from "./hooks/components/Modals/Modal/hook";

function App() {
  const { data } = ModalDetail();

  const [modalOpen, setModalOpen] = useState(true);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div>
        <NoticeModal
          open={modalOpen}
          close={closeModal}
          header="공지"
          closeButton="닫기"
        >
          {data.map((item, index) => (
            <div key={index} className="border p-4 my-4">
              <h2 className="text-xl font-bold mb-2">
                {index + 1}.{item.title}
              </h2>
              <div className="space-y-2 leading-6">
                {item.description.map((text, index) => (
                  <p key={index}>💡{text}</p>
                ))}
              </div>
            </div>
          ))}
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
