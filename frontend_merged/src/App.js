import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/Home/HomePage";
import FoodPage from "./pages/Food/FoodPage";

import Main from "./pages/Main/main";
import Book from "./pages/Book/book";
import Table from "./pages/Table/table";
import ThankYou from "./pages/ThankYou/thankYou";
import Navbar from "./pages/Navbar/navbar";


import AppRoutes from "./AppRoutes";
import Header from "./Header/Header";

function App() {
  const [page, setPage] = useState(0);

  return <>
   <Header />
   <div>
      <Navbar setPage={setPage} />
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <ThankYou /> : null}
    </div>
   <AppRoutes/>
  </>
}

export default App;
