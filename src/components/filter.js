import React from "react";

export function Filter(props) {
  return (
    <div className="filter">
      <div className="filter-box">
        <Country
          selectCountry={props.selectCountry}
          handleSelectCountry={props.handleSelectCountry}
        />
        <div className="select">
          <label className="date">
            From
            <input
              className="dateFilter"
              type="date"
              max={props.selectDate.to}
              value={props.selectDate.from}
              onChange={({ target }) =>
                props.handleSelectDate("from", target.value)
              }
            />
          </label>
          <label className="date">
            To
            <input
              min={props.selectDate.from}
              className="dateFilter"
              type="date"
              value={props.selectDate.to}
              onChange={({ target }) =>
                props.handleSelectDate("to", target.value)
              }
            />
          </label>
        </div>
        <Price
          selectPrice={props.selectPrice}
          handleSelectPrice={props.handleSelectPrice}
        />
        <Rooms
          selectRooms={props.selectRooms}
          handleSelectRooms={props.handleSelectRooms}
        />
        <button className="resetBtn" onClick={props.resetFilters}>
          Borrar búsqueda
        </button>
      </div>
    </div>
  );
}

function Country(props) {
  return (
    <select
      className="select"
      value={props.selectCountry}
      onChange={props.handleSelectCountry}
    >
      <option value="cualquier país">Cualquier País</option>
      <option value="Argentina">Argentina</option>
      <option value="Brasil">Brasil</option>
      <option value="Chile">Chile</option>
      <option value="Uruguay">Uruguay</option>
    </select>
  );
}

function Price(props) {
  return (
    <select
      className="select"
      value={props.selectPrice}
      onChange={props.handleSelectPrice}
    >
      <option value="all">Cualquier precio</option>
      <option value="1">★☆☆☆☆</option>
      <option value="2">★★☆☆☆</option>
      <option value="3">★★★☆☆</option>
      <option value="4">★★★★☆</option>
    </select>
  );
}

function Rooms(props) {
  return (
    <select
      className="select"
      value={props.selectRooms}
      onChange={props.handleSelectRooms}
    >
      <option value="hoteles">Cualquier tamaño</option>
      <option value={"hoteles pequeños"}>Hotel pequeño</option>
      <option value={"hoteles medianos"}>Hotel mediano </option>
      <option value={"hoteles grandes"}>Hotel grande </option>
    </select>
  );
}
