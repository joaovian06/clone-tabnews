import styles from "../stylessheets/NavBar.module.scss";

const NavBarLinks = ["Apresentação", "Projetos", "Tecnologias"];

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <a className={styles.RootLink}>Jvian.dev</a>
      <ul className={styles.NavBarLinks}>
        {NavBarLinks.map((link) => (
          <li>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
