function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        className="coming-soon-container"
        style={{
          textAlign: "center",
          border: "1px solid #808080",
          borderRadius: "10px",
          width: "30%",
          height: "fit-content",
        }}
      >
        <h1 className="title">Em construção</h1>
        <p className="text">
          Um lugar para compartilhar minhas idéias, <br />
          divulgar aprendizados, <br />
          me conectar com meus iguais.
        </p>
      </div>

      <div className="about"></div>
    </div>
  );
}

export default Home;
