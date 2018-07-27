import AddTodo form './containers/AddTodo'
import VisibleTodoList form './containers/VisibleTodoList' 
import Footer from "./Footer";

const App = () => (
  <div>
    <AddTodo></AddTodo>
    <VisibleTodoList></VisibleTodoList>
    <Footer></Footer>
  </div>
);

export default App;
