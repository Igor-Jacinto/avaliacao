import "./Container.css";

function Container({title, subtitle, descricao1, descricao2, texto}){
	
	return( 
		<div className='Principal'>
		<h1 className='titulo'>{title}</h1>
		 <h3 className='subtitulo'>{subtitle}</h3>
		 <p className='descricao1'>{descricao1}</p>
		 <p className='descricao2'>{descricao2}</p>
		 <button className="Botao">
			 {texto}
		 </button>
		 </div>
	);
}

export default Container;
