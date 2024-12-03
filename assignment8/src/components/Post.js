import AuthorSvg from "../img/author.svg";
import DelimeterSvg from "../img/delimeter.svg";
import SquareSvg from "../img/Icon.svg";
import Images from "../img/Img.svg";

const Post = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        marginTop: "50px",
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={AuthorSvg}></img>
          <p>
            Authors name <span style={{ color: "gray" }}>in</span> Topics Name
          </p>
          <img src={DelimeterSvg}></img>{" "}
          <span style={{ color: "gray" }}>7 july</span>
        </div>
        <div
          style={{
            width: "500px",
            height: "170px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>7 Practical CSS Tips</h3>
          <p>
          Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
          You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "600px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p
              style={{
                backgroundColor: "#081E341F",
                borderRadius: "10px",
                width: 100,
                height: 20,
                textAlign: "center",
              }}
            >
              Java Script
            </p>
            <p style={{ color: "gray" }}>12 min read</p>
            <img src={DelimeterSvg}></img>
            <p style={{ color: "gray" }}>Selected for you</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={SquareSvg}></img>
            <img src={SquareSvg}></img>
            <img src={SquareSvg}></img>
          </div>
        </div>
      </div>
      <img
        src={Images}
        style={{
          width: "40vw",
          display: "flex",
          alignItems: "center",
          height: "35vh",
          marginTop: "20px",
        }}
      ></img>
    </div>
  );
};

export default Post;