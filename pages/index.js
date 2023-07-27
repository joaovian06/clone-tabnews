import ComingSoon from "../src/components/ComingSoon";

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
      <ComingSoon></ComingSoon>
      <div className="about"></div>
    </div>
  );
}

export default Home;
