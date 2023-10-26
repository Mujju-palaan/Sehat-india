import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  const style = {
    fontFamily: "ui-sans-serif",
  };
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <h1 style={{fontFamily:'sans-serif,Pangeatext',fontSize:'48px',fontWeight:'400'}}> SEHAT</h1>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
