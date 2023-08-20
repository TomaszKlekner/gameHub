import useUsers from './hooks/useUsers';
import UserService, { User } from './services/user-service';

function App() {
  const { users, setUsers, error, setError, isLoading } = useUsers();

  const deleteUser = async (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    UserService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = async () => {
    const originalUsers = [...users];
    const newUser = {
      id: 0,
      name: 'Tomasz',
    };

    setUsers([newUser, ...users]);

    UserService.create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = async (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + '!' };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    UserService.update(user).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div className='container my-5'>
      <h1>Home Page</h1>
      {error && <p className='text-danger'>{error}</p>}
      {isLoading && <div className='spinner-border'></div>}

      <button onClick={addUser} className='btn btn-primary mb-3'>
        Add a user
      </button>

      <ul className='list-group'>
        {users.map((user) => (
          <li
            className='list-group-item d-flex justify-content-between align-items-center'
            key={user.id}
          >
            {user.name}
            <div>
              <button
                onClick={() => updateUser(user)}
                className='btn btn-outline-secondary me-3'
              >
                Update
              </button>
              <button
                onClick={() => deleteUser(user)}
                className='btn btn-outline-danger'
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
