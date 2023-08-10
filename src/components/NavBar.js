export default function NavBar() {
  return (
    <div style={{ backgroundColor: "#808080" }}>
      <a
        style={{
          fontWeight: "600",
          fontFamily: "monospace",
          fontSize: "1rem",
        }}
      >
        Jvian.dev
      </a>
      <ul
        style={{
          listStyle: "none",
          display: "inline-flex",
          justifyContent: "space-around",
          width: "50%",
        }}
      >
        <li>
          <a href="#">Apresentação</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Tecnologias</a>
        </li>
      </ul>
    </div>
  );
}
