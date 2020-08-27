import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Divider } from "./Divider";
import { useSelector, useDispatch } from "react-redux";
import { getBaseCurrency, getCurrencyShortNames } from "../app/selectors";
import { setBaseCurrency } from "../app/actions";

export const Header = () => {
  const baseCurrency = useSelector(getBaseCurrency);
  const dispatch = useDispatch();
  const currencyShortNames = useSelector(getCurrencyShortNames);

  const onBaseCurrencyChange = (event) => {
    dispatch(setBaseCurrency(event.target.value));
  }

  return (
    <header className="App-header">
      <select title="базовая валюта" value={baseCurrency} onChange={onBaseCurrencyChange}>
        {currencyShortNames.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <ul className="menu">
        <li key="converter" className="menu-item">
          <NavLink to="/converter" activeClassName="selected">
            Конвертер
          </NavLink>
        </li>
        <li key="current-courses" className="menu-item">
          <NavLink to="/current-courses" activeClassName="selected">
            Текущие курсы валют
          </NavLink>
        </li>
      </ul>
      <Divider />
    </header>
  );
};
