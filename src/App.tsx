import { PostList } from './react-query/PostList';
import TodoList from './react-query/TodoList';

function App() {
  return (
    <div className='container'>
      <h1>Home Page</h1>

      {/* <TodoList /> */}
      <PostList />
    </div>
  );
}

export default App;
