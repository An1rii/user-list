import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUsers } from "../slice/userSlice.js";

const useUserActions = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  const handleRemoveUser = (idToRemove) => {
    dispatch(removeUser(idToRemove));

    const updatedUsers = users
      .filter((user) => user.id !== idToRemove)
      .map((user, index) => ({
        ...user,
        id: index,
      }));

    dispatch(setUsers(updatedUsers));
  };

  return {
    handleRemoveUser,
  };
};

export default useUserActions;
