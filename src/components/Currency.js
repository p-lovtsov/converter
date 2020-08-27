import React from "react";
import { GoldStar, EmptyStar } from "./Star";
import "./Currency.css";

export const Currency = ({
  onCurrencyClick,
  currencyShortName,
  name,
  value,
  isFavorite,
}) => {
  return (
    <div
      key={currencyShortName}
      className={`currency-item ${isFavorite && "currency-item--favorite"}`}
      onClick={() => {
        onCurrencyClick(currencyShortName);
      }}
    >
      <div className="currency-upper-line">
        <div>{isFavorite ? <GoldStar /> : <EmptyStar />}</div>
        <div>1</div>
        <div>{currencyShortName}</div>
      </div>
      <div className="currency-name">{name}&nbsp;</div>
      <div className="currency-value">{value.toFixed(4)}</div>
    </div>
  );
};
