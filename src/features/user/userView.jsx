import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userSlice";

export const UserView = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <div>
          <ul>
            {user.users.map((user) => {
              return <li key={user.id}>{user.name}</li>;
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
