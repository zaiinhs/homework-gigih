import { SPOTIFY_ALBUMS } from "../../constants";
import ButtonElement from "../Buttons";
import Images from "../Image";

function Card() {
  const myCard = {
    border: "1px solid #000",
    width: "100%",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    margin: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <>
      <div style={{ maxWidth: "600px", margin: "0px auto" }}>
        {SPOTIFY_ALBUMS.map((e) => {
          return (
            <div style={myCard} key={e.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Images url={e.album.images[0].url} title={e.name} />

                <div>
                  <h3>{e.name}</h3>
                  <p>{e.artists[0].name}</p>
                </div>
              </div>

              <ButtonElement />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
