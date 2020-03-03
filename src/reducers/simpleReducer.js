export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DOGS_ACTION":
      console.log(JSON.stringify(action.payload));

      return {
        result: action.payload
      };
    case "IMAGE_ACTION":
      console.log(JSON.stringify(action.payload));

      return {
        result: action.payload
      };
    default:
      return state;
  }
};
