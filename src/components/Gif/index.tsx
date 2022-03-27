import SearchBar from '../Search'
import ButtonElement from '../Buttons'
import {GIF_ITEMS} from "../../constants/"

function Gif(){
    return(
        <>
            <div>
                <div style={{textAlign: "center"}}>
                <h1>Exercise</h1>
                    <SearchBar/>
                    <ButtonElement/>
                </div>
                    <div style={{display: "flex", flexWrap:"wrap", justifyContent: "center"}}>
                        {GIF_ITEMS.map( e => {
                            return(
                                <div style={{padding: "40px"}} key={e.id}>
                                    <img src={e.url} alt={e.title}/><br />
                                    <span style={{backgroundColor: "yellow", padding: "10px"}}>{e.rating}</span>
                                    <p>{e.title}</p>
                                </div>
                                )

                            })
                        }
                    </div>
            </div>

        </>
    )
}

export default Gif