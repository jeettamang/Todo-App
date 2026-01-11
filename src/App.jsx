import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import About from "./pages/About";
import Header from "./components/Header";
import EditTodo from "./pages/EditTodo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/edittodo" element={<EditTodo />} />
      </Routes>
    </>
  );
}

export default App;
