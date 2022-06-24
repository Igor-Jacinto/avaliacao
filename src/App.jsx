import Button from "./Button";
import Card from "./Card";
import Titulo from "./Titulo";

function App(){
	const titulo = [
		{
			ti: "Premium Plans",
			subti: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quas dolore animi consequatur esse voluptates totam tempora amet repellat quia.",
		},
	]

	return(
		<div>
			{
				titulo.map((x) => {
					return <Titulo key={x}
							ti={x.ti}
							subti={x.subti}
						/>;
				})
			}
		</div>
	);
}

export default App;