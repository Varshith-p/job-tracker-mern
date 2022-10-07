import { initialState } from "./context";

const reducer = (state, action) => {
  if (action.type === "DISPLAY_ALERT") {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values...",
    };
  }
  if (action.type === "CLEAR_ALERT") {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === "SETUP_USER_BEGIN") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "SETUP_USER_SUCCESS") {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === "SETUP_USER_ERROR") {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === "UPDATE_USER_BEGIN") {
    return { ...state, isLoading: true };
  }
  if (action.type === "UPDATE_USER_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if (action.type === "UPDATE_USER_ERROR") {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === "LOGOUT_USER") {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }
  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
