import ComingSoon from "../src/components/ComingSoon";
import NavBar from "../src/components/NavBar";

function Home() {
  return (
    <div>
      <NavBar></NavBar>
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
    </div>
  );
}

export default Home;
