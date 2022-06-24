import "./Container.css";

function Container({title, subtitle, descricao}){
	
	return( 
		<div className="cont">
            <p className="cont1">{title}</p>
			<p className="cont2">{subtitle}</p>
            <p className="cont3">{descricao}</p>
		</div>
	);
}

export default Container;