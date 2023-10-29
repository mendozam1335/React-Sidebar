import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn modal-btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
