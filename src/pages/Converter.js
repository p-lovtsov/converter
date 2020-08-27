import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  getCurrencyShortNames,
  getCurrencies,
  getBaseCurrency,
} from "../app/selectors";

export const Converter = () => {
  const currencyShortNames = useSelector(getCurrencyShortNames);
  const currencies = useSelector(getCurrencies);
  const baseCurrency = useSelector(getBaseCurrency);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState(currencyShortNames[0]);

  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const onCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const getResult = () =>
    (
      (currencies[currency] &&
        ((currencies[currency].Value / currencies[currency].Nominal) /
          (currencies[baseCurrency].Value / currencies[baseCurrency].Nominal)) *
          amount) ||
      0
    ).toFixed(4);

  const currencyName =
    currencies[baseCurrency] && currencies[baseCurrency].Name;

  return (
    <div className="converter">
      <label htmlFor="amount">Введите количество </label>
      <input type="number" value={amount} onChange={onAmountChange} />
      <select value={currency} onChange={onCurrencyChange}>
        {currencyShortNames.map((currency) => (
          <option key={currency} value={currency}>
            {currencies[currency].Name}
          </option>
        ))}
      </select>
      <div className="result">
        {getResult()} {currencyName}
      </div>
    </div>
  );
};
