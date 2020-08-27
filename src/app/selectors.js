import { createSelector } from "reselect";

export const getCurrencies = (state) => state.currencies;

export const getBaseCurrency = (state) => state.baseCurrency;

export const getCurrencyShortNames = createSelector(
  getCurrencies,
  (currencies) => currencies && Object.keys(currencies),
);
