import Titulo from "./Titulo";
import Container from "./Container";

function App(){

	const titulo = [
		{
			ti: "Premium Plans",
			subti: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quas dolore animi consequatur esse voluptates totam tempora amet repellat quia.",
		},
	];

	const conteiner = [
		{
			title: "Start",
			subtitle: "Free",
			descricao1: "1 user",
			descricao2: "2 user",
			texto: "Order Now",
		},
		{
			title: "Basic",
			subtitle: "$19.99",
			descricao1: "1 user",
			descricao2: "2 user",
			texto: "Order Now",
		},
		{
			title: "Expert",
			subtitle: "$129.99",
			descricao1: "1 user",
			descricao2: "2 user",
			texto: "Order Now",
		},
	];

	return(
		<div>
			{
				titulo.map((x) => {
					return <Titulo 
							ti={x.ti}
							subti={x.subti}
						/>;
				})
			}

		<div/>
		<div className="cont"> 
			{
			conteiner.map((y, a) => {
					return <Container key={a}
							title={y.title}
							subtitle={y.subtitle}
							descricao1={y.descricao1}
							descricao2={y.descricao2}
							texto={y.texto}

						/>;
				})
			}
	        </div>
			</div>
	);
}

export default App;