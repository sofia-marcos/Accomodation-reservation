export function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src="./logo.png" alt="logo"></img>
      </div>
      <div className="menu-tab">
        <label className="menu-mobile">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </label>
        <ul className="menu">
          <li className="menuactive">Hoteles</li>
          <li>Vuelos</li>
          <li>Actividades</li>
          <li> Cruceros</li>
        </ul>
      </div>
    </div>
  );
}
