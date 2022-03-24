import data from "../store/data"

function Card(){
    const myCard = {
        marginRight: "10px",
        border: "1px solid #000",
        padding: "10px",
        width: "200px",
        borderRadius: "20px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      };
    
      const myButton = {
        paddingTop: "5px",
        paddingBottom: "5px",
        width: "70px",
        color: "white",
        backgroundColor: "green",
      };

    return(
        <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={myCard}>
            <img width="200" src={data.album.images[0].url} alt="Foto Card" />
            <h3>{data.name}</h3>
            <p>{data.artists[0].name}</p>
            <button style={myButton}>
              Select
            </button>
          </div>
        </div>
        </>
    )
}

export default Card