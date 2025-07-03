const logger = (state) => (next) => (action) => {
  //   console.log(state.getState());
  //   console.log(action);
  //   return next(action);
  console.group(action.type);
  console.info("Previous State", state.getState());
  const result = next(action);
  console.info("Next State", state.getState());
  console.groupEnd();
  return result;
};

export default logger;
