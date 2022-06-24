import "./Titulo.css";

function Titulo({ti, subti}){
	
	return( 
		<div className="titulos">
            <p className="titulo">{ti}</p>
			<p className="subtitulo">{subti}</p>
		</div>
	);
}

export default Titulo;