import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import { useState } from "react";
import NoticeModal from "./components/Modals/Modal";
import ModalDetail from "./hooks/components/Modals/Modal/hook";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

function App() {
  const { data } = ModalDetail();
  const [modalOpen, setModalOpen] = useState(true);
  const [hasCookie, setHasCookie] = useState(true);
  const [appCookies, setAppCookies] = useCookies();

  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const closeModalUntilExpires = () => {
    if (!appCookies) return;
    const expires = getExpiredDate(1);
    setAppCookies("MODAL_EXPIRES", true, { path: "/", expires });

    setModalOpen(false);
  };

  useEffect(() => {
    if (appCookies["MODAL_EXPIRES"]) return;
    console.log(appCookies["MODAL_EXPIRES"]);
    setHasCookie(false);
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div>
        {modalOpen && !hasCookie && (
          <NoticeModal
            open={modalOpen}
            close={closeModal}
            header="공지사항"
            closeButton="닫기"
            closeModal={closeModalUntilExpires}
            closeModalButton="하루동안 보지않기"
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
        )}
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
