import "./styles.css";
import { hotelsData } from "./components/data";
import { Header } from "./components/header.js";
import { Filter } from "./components/filter.js";
import { Hotels } from "./components/hotels.js";
import { dateToUnix, beforeDateStatus } from "./utils/date";
import React, { useState, useEffect } from "react";

export default function App() {
  const [hotelList, setHotelList] = useState(hotelsData);
  const [selectCountry, setSelectCountry] = useState("cualquier país");
  const [selectPrice, setSelectPrice] = useState("all");
  const [selectRooms, setSelectRooms] = useState("hoteles");
  const [selectDate, setSelectDate] = useState({
    from: "",
    to: ""
  });
  const [selectDateUnix, setSelectDateUnix] = useState({
    from: "",
    to: ""
  });

  const handleSelectCountry = (e) => {
    setSelectCountry(e.target.value);
  };
  const handleSelectPrice = (e) => {
    setSelectPrice(e.target.value);
  };
  const handleSelectRooms = (e) => {
    setSelectRooms(e.target.value);
  };

  const handleSelectDate = (key, value) => {
    const newUserDate = { ...selectDate, [key]: value };
    setSelectDate(newUserDate);
    if (newUserDate.from !== "" && newUserDate.to !== "") {
      const newUserDateUnix = dateToUnix(newUserDate);
      setSelectDateUnix(newUserDateUnix);
    } else if (beforeDateStatus(value)) {
      alert(`la fecha no puede ser anterior a la fecha de hoy `);
      const userDateEmpty = {
        from: "",
        to: ""
      };
      setSelectDate(userDateEmpty);
      setSelectDateUnix(userDateEmpty);
    }
  };

  useEffect(() => {
    const dateFilter = (results) => {
      const hotelFrom = selectDateUnix.from >= results.availabilityFrom;
      const hotelTo = selectDateUnix.to <= results.availabilityTo;
      return !selectDate.from || !selectDate.to ? true : hotelFrom && hotelTo;
    };

    const countryFilter = (results) => {
      return selectCountry === "cualquier país"
        ? true
        : results.country === selectCountry;
    };

    const priceFilter = (results) => {
      return selectPrice === "all"
        ? true
        : results.price === Number(selectPrice);
    };

    const roomsFilter = (results) => {
      return selectRooms === "hoteles"
        ? true
        : selectRooms === "hoteles pequeños"
        ? results.rooms <= 10
        : selectRooms === "hoteles medianos"
        ? results.rooms <= 20 && results.rooms >= 10
        : results.rooms > 20;
    };

    const hotelFilter = hotelsData.filter(
      (results) =>
        countryFilter(results) &&
        priceFilter(results) &&
        roomsFilter(results) &&
        dateFilter(results)
    );

    setHotelList(hotelFilter);
  }, [
    selectDate,
    selectCountry,
    selectDateUnix.from,
    selectDateUnix.to,
    selectRooms,
    selectPrice
  ]);

  const resetFilters = () => {
    setSelectCountry("cualquier país");
    setSelectPrice("all");
    setSelectRooms("hoteles");
    const userDateEmpty = {
      from: "",
      to: ""
    };

    setSelectDate(userDateEmpty);
    setSelectDateUnix(userDateEmpty);
  };

  return (
    <div className="App">
      <Header
        selectDate={selectDate}
        selectCountry={selectCountry}
        selectRooms={selectRooms}
        selectPrice={selectPrice}
      />
      <Filter
        resetFilters={resetFilters}
        selectCountry={selectCountry}
        handleSelectCountry={handleSelectCountry}
        selectPrice={selectPrice}
        handleSelectPrice={handleSelectPrice}
        selectRooms={selectRooms}
        handleSelectRooms={handleSelectRooms}
        handleSelectDate={handleSelectDate}
        selectDate={selectDate}
      />
      <Hotels hotelList={hotelList} />
    </div>
  );
}
