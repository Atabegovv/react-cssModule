import Component from './components/Component';
import './App.css';

function App() {
  return (
		<div className="App">
			<Component />

			<div className="info">
				<h2 className="infoTitle">info title </h2>
				<p className="infoDesc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
					cupiditate!
				</p>
			</div>

			<div className="block">
				<h1 className="block__title">Component title from hz</h1>
				<p className="block__text">Lorem ipsum dolor sit amet.</p>
				<button className="block__btn">click me!</button>
			</div>
		</div>
	);
}

export default App;
