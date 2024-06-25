import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    //gret returns promise
    //get -> promise -> response / error
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setError("");
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Arminas" };
    setUsers([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => setUsers([response.data, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updatedUser
      )
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
