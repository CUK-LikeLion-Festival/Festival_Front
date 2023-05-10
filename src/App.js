import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
