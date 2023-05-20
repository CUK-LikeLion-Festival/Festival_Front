import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import { ThemeProvider } from "styled-components";
import Booth from "./pages/booth";
import { useEffect, useState } from "react";
import NoticeModal from "./components/Modals/Modal";
import ModalDetail from "./hooks/components/Modals/Modal/hook";
import { useCookies } from "react-cookie";
import Bar from "./pages/bar";
import SponcerStamp from "./pages/sponserstamp";

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
  }, [appCookies]);

  const closeModal = () => {
    setModalOpen(false);
  };
  const theme = {
    colors: {
      white: "#ffffff",
      green: "#779c4f",
    },
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
              <div
                key={index}
                className="border p-4 my-4 sm:text-[12px] sm:my-0 sm:p-1 md:p-10 md:my-0"
              >
                <h2 className="text-xl font-bold mb-2 sm:text-[14px]">
                  {index + 1}.{item.title}
                </h2>
                <div className="space-y-2 leading-6">
                  {item.description.map((text, index) => {
                    if (text.trim() !== "") {
                      return <p key={index}>🎆{text}</p>;
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
          </NoticeModal>
        )}
      </div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact={true} element={<IndexPage />} />
            <Route path="/booth/detail" element={<Booth />} />
            <Route path="/sponser" element={<SponcerStamp />} />
            <Route path="/booth/bar" element={<Bar />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
