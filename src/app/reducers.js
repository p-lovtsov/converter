import { FETCH_DATA, SET_BASE_CURRENCY, TOGGLE_FAVORITE } from "./types";

const ruble = {
  RUB: { Nominal: 1, Name: "Рубль Российской Федерации", Value: 1, CharCode: 'RUB'},
};

export const currencies = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return { ...action.payload.Valute, ...ruble };
    }
    case TOGGLE_FAVORITE: {
      const currency = { ...state[action.payload] };
      currency["favorite"] = !state[action.payload]["favorite"];

      return { ...state, [action.payload]: currency };
    }
    default:
      return state;
  }
};

const baseCurrencyInitialState = "RUB";

export const baseCurrency = (state = baseCurrencyInitialState, action) => {
  switch (action.type) {
    case SET_BASE_CURRENCY: {
      return action.payload;
    }
    default:
      return state;
  }
};
