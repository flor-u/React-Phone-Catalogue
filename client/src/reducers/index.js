export default (state, action) => {
  console.log(action)
    switch (action.type) {
      case "PHONES_LIST":
        return {
          ...state,
          phones: action.phones
        };
        case "SELECTED_PHONE":
        return {
          ...state,
          selectedPhone: [...state.phones][action.selectedPhone]
        };
      default:
        return state;
    }
  };