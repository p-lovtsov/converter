import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrencies,
  getBaseCurrency,
  getCurrencyShortNames,
} from "../app/selectors";
import { setFavorite } from "../app/actions";
import "./Courses.css";
import { Currency } from "../components/Currency";
import { Divider } from "../components/Divider";

export const Courses = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(getCurrencies);
  const baseCurrency = useSelector(getBaseCurrency);
  const currencyShortNames = useSelector(getCurrencyShortNames);

  const favoriteCurrencies = currencyShortNames.filter(
    (currency) => currencies[currency]["favorite"]
  );
  const unFavoriteCurrencies = currencyShortNames.filter(
    (currency) => !currencies[currency]["favorite"]
  );

  if (!currencyShortNames) {
    return <h2>Нет валют</h2>;
  }

  const onCurrencyClick = (currency) => {
    dispatch(setFavorite(currency));
  };

  return (
    <>
      <h2>Текущие курсы валют</h2>
      <section className="currencies">
        {favoriteCurrencies.length > 0 && (
          <div className="favorite-currencies">
            {favoriteCurrencies.map((currencyShortName) => {
              const currency = currencies[currencyShortName];
              const { Name, Value, Nominal } = currency;
              const value =
                Value /
                Nominal /
                (currencies[baseCurrency].Value /
                  currencies[baseCurrency].Nominal);

              return (
                <Currency
                  key={currencyShortName}
                  currencyShortName={currencyShortName}
                  name={Name}
                  value={value}
                  isFavorite={true}
                  onCurrencyClick={onCurrencyClick}
                />
              );
            })}
            <Divider />
          </div>
        )}
        <div className="unFavoriteCurrencies">
          {unFavoriteCurrencies.map((currencyShortName) => {
            const currency = currencies[currencyShortName];
            const { Name, Value, Nominal } = currency;
            const value =
              Value /
              Nominal /
              (currencies[baseCurrency].Value /
                currencies[baseCurrency].Nominal);

            return (
              <Currency
                key={currencyShortName}
                currencyShortName={currencyShortName}
                name={Name}
                value={value}
                isFavorite={false}
                onCurrencyClick={onCurrencyClick}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
