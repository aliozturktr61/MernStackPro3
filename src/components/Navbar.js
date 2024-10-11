import { Link } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";

import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { kullanici } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Udemig React Native 6.Sezon Mern Stack Proje: Not Defteri</h1>
        </Link>
        <nav>
          {kullanici && (
            <div>
              <span>{kullanici.email}</span>&nbsp;
              <button onClick={handleClick}>Çıkış</button>
            </div>
          )}
          {!kullanici && (
            <div>
              <Link to="/login">Giriş</Link>
              <Link to="/signup">Üye Ol</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
