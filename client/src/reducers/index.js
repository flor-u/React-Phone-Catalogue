export default (state, action) => {
  console.log(action)
    switch (action.type) {
      case "PHONES_LIST":
        return {
          ...state,
          phones: action.phones
        };
      default:
        return state;
    }
  };