import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertType: "",
  alertText: "",
  user: user ? JSON.parse(user) : null,
  token: token,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: "DISPLAY_ALERT" });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_ALERT" });
    }, 3000);
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    console.log(currentUser);
    dispatch({ type: "SETUP_USER_BEGIN" });
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );
      const { user, token } = data;
      dispatch({
        type: "SETUP_USER_SUCCESS",
        payload: {
          user,
          token,
          alertText,
        },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: "SETUP_USER_ERROR",
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const logoutUser = () => {
    dispatch({ type: "LOGOUT_USER" });
    removeUserFromLocalStorage();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};
export { useAppContext, AppProvider, initialState };
