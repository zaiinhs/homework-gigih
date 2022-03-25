import data from "../store/data_album"

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
          {data.map(e => {
            return(
            <div style={myCard} key={e.id}>
            <img width="200" src={e.album.images[0].url} alt="Foto Card" />
            <h3>{e.name}</h3>
            <p>{e.artists[0].name}</p>
            <button style={myButton}>
              Select
            </button>
          </div>
            )
          })}
        </div>
        </>
    )
}

export default Card