const articlesInitialState = {
  555: {
    name: "scissors",
    location: "away",
    status: "taken",
    editedAt: "05.11.1999",
  },
};

const articles = (state = articlesInitialState, action) => {
    let newState;
  switch (action.type) {     
    case "RETURN":
      newState = { ...state };
      newState[action.id] = {
        ...newState[action.id],
        status: "returned",
        location: "storage",
      };
      return newState;
    case "TAKE":
      newState = { ...state };
      newState[action.id] = {
        ...newState[action.id],
        status: "taken",
        location: "away",
      };
      return newState;
    default:
      return state;
  }
};

export default articles;
