

export default function Characters(props) {
    const {characters, setCharacters} = props;
    const volverHome=()=>{
        setCharacters(null);
    }
    
    return (
        
    <div className="characters">
        <button className="btn btn-primary"  onClick={volverHome}>Home</button>
      <h1>Personajes</h1>
      {/* <span className="back-home" onClick={volverHome}>Regresar a home</span> */}
      
      
      <div className="container-characters">
        {characters.map((character, index)=>(
            <div className="character-container" key={index}>
            <div>
                <img src={character.image} alt={character.name}/>
            </div>
            <div>
                <h3>{character.name}</h3>
                <h6>{character.status==='Alive'?(
                    <>
                    <span className="alive"/>
                    Alive
                    </>
                    
                ):(
                    <>
                    <span className="dead"/>
                    Dead
                    </>
                )}
                </h6>
                <p>
                    <span className="text-gray">Episodes: </span>
                    <span>{character.episode.length}</span>
                </p>
                <p>
                    <span className="text-gray">Especie: </span>
                    <span>{character.species}</span>
                </p>
            </div>
            </div>
        ))}
      </div>
        <span className="back-home">Regresar a home</span>
    </div>
    )
  
}
