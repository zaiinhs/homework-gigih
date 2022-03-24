import gif from '../../store/gif'

function Gif(){
    return(
        <>
            <img src={gif.url} alt={gif.title}/>
            <p>{gif.title}</p>

        </>
    )
}

export default Gif