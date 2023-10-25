import { createContext, useContext, useState } from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      <Home />
      <Modal />
      <Sidebar />
    </GlobalContext.Provider>
  );
};
export default App;
