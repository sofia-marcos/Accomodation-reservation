import { Card } from "./card";
import { NoResults } from "./noresults";
import React from "react";

export function Hotels(props) {
  const render = props.hotelList.map(function (info) {
    return (
      <Card
        key={info.slug}
        name={info.name}
        photo={info.photo}
        description={info.description}
        rooms={info.rooms}
        city={info.city}
        country={info.country}
        price={info.price}
        availabilityFrom={info.availabilityFrom}
        availabilityTo={info.availabilityTo}
      />
    );
  });
  const noResults = <NoResults />;
  const finalResults = () => {
    return render.length > 0 ? render : noResults;
  };

  return <div className="hotels">{finalResults()}</div>;
}
