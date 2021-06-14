export function Subtitle(props) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const from = new Date(props.selectDate.from + " 00:00").toLocaleDateString(
    "es-AR",
    options
  );
  const to = new Date(props.selectDate.to + " 00:00").toLocaleDateString(
    "es-AR",
    options
  );

  const showDates = from === "Invalid Date" || to === "Invalid Date";

  const showSubtitle = () => {
    if (
      props.selectCountry === "cualquier país" &&
      props.selectRooms === "hoteles" &&
      props.selectPrice === "all" &&
      showDates === true
    ) {
      return <p>Te mostramos algunos de nuestros lugares favoritos.</p>;
    } else if (
      props.selectRooms === "hoteles" &&
      props.selectPrice === "all" &&
      showDates === true
    ) {
      return (
        <p>
          Te mostramos algunos de nuestros lugares favoritos en{" "}
          {props.selectCountry}.
        </p>
      );
    } else if (props.selectPrice === "all" && showDates === true) {
      return (
        <p>
          Te mostramos algunos de nuestros {props.selectRooms} favoritos en{" "}
          {props.selectCountry}.
        </p>
      );
    } else if (showDates === true && props.selectPrice < 2) {
      return (
        <p>
          Te mostramos algunos de nuestros {props.selectRooms},{" "}
          {props.selectPrice} estrella favoritos en {props.selectCountry}.
        </p>
      );
    } else if (showDates === true && props.selectPrice > 1) {
      return (
        <p>
          Te mostramos algunos de nuestros {props.selectRooms},{" "}
          {props.selectPrice} estrellas favoritos en {props.selectCountry}.
        </p>
      );
    } else {
      return (
        <p>
          Te mostramos algunos de nuestros {props.selectRooms},{" "}
          {props.selectPrice} estrellas favoritos en {props.selectCountry},
          desde el {from} hasta el {to}.
        </p>
      );
    }
  };
  return (
    <div className="header-subtitle">
      <h3>{showSubtitle()}</h3>
    </div>
  );
}
