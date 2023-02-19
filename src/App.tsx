import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tables from "./components/Tables";
import TableSelected from "./components/TableSelected";
import HomeView from "./views/HomeView";
import TablesView from "./views/TablesView";

function App() {
  //bg-[url('/public/img/background.svg')]
  return (
    <BrowserRouter>
      <div className="bg-gray-100 w-full md:w-screen min-h-screen bg-no-repeat bg-cover p-5">
        <Navbar />
        <div className="grid sm:grid-cols-[200px_minmax(180px,auto)] md:h-[calc(100vh-6.8rem)]">
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/tables" element={<TablesView />}>
              <Route index element={<Tables />} />
              <Route path=":id" element={<TableSelected />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
