const initState = { authToken: null, username: "" };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("LOGIN ACTION");
      console.log(action.payload);
      return state;
    default:
      console.log(action.type);
      return state;
  }
};

export default authReducer;
