import "./Titulo.css";

function Titulo({ti, subti}){
	
	return( 
		<div className="titulos">
            <h1 className="titulo">{ti}</h1>
			<h5 className="subtitulo">{subti}</h5>
		</div>
	);
}

export default Titulo;