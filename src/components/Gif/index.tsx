import SearchBar from '../Search'
import ImageBar from '../Image'
import gif from '../../store/gif'
import ButtonElement from '../Buttons'

function Gif(){
    return(
        <>
            <div>
                <div>
                    <SearchBar/>
                    <ButtonElement/>
                </div>
                    <div style={{display: "flex"}}>
                        {gif.map( e => {
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