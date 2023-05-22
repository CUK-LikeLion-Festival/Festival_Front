import { FaTimes } from "react-icons/fa";

const NoticeModal = (props) => {
  const { open, close, header, closeButton, closeModal, closeModalButton } =
    props;

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 z-50 ${
        open ? "flex" : "hidden"
      } items-center`}
    >
      {open ? (
        <section className="w-11/12 max-w-sm mx-auto rounded-md bg-white shadow-lg overflow-hidden animate-modal-show">
          <header className="relative px-4 py-2 bg-gray-200 text-2xl font-bold text-center">
            {header}
            <button
              className="absolute top-[12px] right-2 w-6 h-6 text-xl font-bold text-gray-500 bg-transparent"
              onClick={close}
            >
              <FaTimes color="red" />
            </button>
          </header>
          <main className="px-4 py-6 border-t border-b border-gray-300">
            {props.children}
          </main>
          <footer className="px-4 py-3 flex justify-between">
            <button
              className="px-3 py-1 text-sm text-white bg-gray-600 rounded-md"
              onClick={close}
            >
              {closeButton}
            </button>
            <button
              className="px-3 py-1 text-sm text-white bg-gray-600 rounded-md"
              onClick={closeModal}
            >
              {closeModalButton}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default NoticeModal;
