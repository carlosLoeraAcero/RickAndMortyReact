import { NavLink } from "react-router";

export const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" style={{alignContent: 'center'}}>
              <NavLink to='/personajes' style={{textDecoration: 'none', color: 'white', padding: '15px 20px', fontSize: '18px'}}>Personajes</NavLink>
            </li>
            <li className="nav-item" style={{alignContent: 'center'}}>
              <NavLink to='/episodios' style={{textDecoration: 'none', color: 'white', padding: '15px 20px', fontSize: '18px'}}>Episodios</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};