import React, { createContext, useReducer } from "react";

const initialState = {
  level: {
    step: 0,
  },
  config: {
    language: " kor",
  },
  cardIct: {
    name: "Noname",
    weapon: 0,
    head: 0,
    chest: 0,
    arm: 0,
    leg: 0,
  },
};
export const store = createContext(initialState);
const { Provider } = store;

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "CHANGE_LEVEL":
        return {
          level: action.level,
          config: initialState.config,
          cardIct: initialState.cardIct,
        };
      case "SETUP_CONFIG":
        return {
          ...state,
          config: action.config,
        };
      case "SELECT_CARDICT":
        return {
          ...state,
          cardIct: {
            ...state.cardIct,
            name: action.name,
          },
        };
      // case "SELECT_EQUIPMENT":
      //   return {
      //     ...state,
      //     cardIct: {
      //       ...state.cardIct,
      //       [action.name]: action.value
      //     }
      //   };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
