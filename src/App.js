import logo from './logo.svg';
import './App.css';

function EventRow(props) {
 return (
	 <div className="events__table__row">
		<div className="events__table__row__data">
			{props.distance}km
		</div>
		<div className="events__table__row__data">
			{props.time} ago
		</div>
		 <div className={"events__table__row__data "+({"destroyed":"red-text ", "nominal":"", "urgent":"yellow-text "})[props.status]}>
			connection destroyed
		</div>
	</div>
 )
}

function App() {
	return (<div>
		<header>
			<img className="header__logoimage" src="/logo.svg" />
		</header>
		<main>
			<section className="events">
				<div className="events__title">
					<h2> Your City is <span className="events__status"> Under Seige </span> </h2>
				</div>
				<div className="events__table">
					<EventRow status="destroyed" time="3h" distance="5" />
				</div>
			</section>
		</main>
	</div>);
}

export default App;
