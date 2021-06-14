import { Nav } from "./nav.js";
import { Subtitle } from "./subtitle.js";

export function Header(props) {
  return (
    <div className="header">
      <Nav></Nav>
      <div className="header-title">
        <h1> Encontrá el alojamiento ideal </h1>

        <Subtitle
          selectDate={props.selectDate}
          selectCountry={props.selectCountry}
          selectRooms={props.selectRooms}
          selectPrice={props.selectPrice}
        />
      </div>
    </div>
  );
}
