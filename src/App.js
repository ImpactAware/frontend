import logo from './logo.svg';
import './App.css';

function EventRow(props) {
	return (<>
	 <div className="events__table__row">
		<div className="events__table__row__data">
			{props.distance}km
		</div>
		<div className="events__table__row__data">
			{props.time} ago
		</div>
		 <div className={"events__table__row__data "+({"destroyed":"red-text ", "nominal":"", "urgent":"yellow-text "})[props.status]}>
			 {({"destroyed": "connection destroyed", "nominal": "operational", "urgent": "impact detected"})[props.status]}
		</div>
	</div>
	<hr/>
	 </>
 )
}

function App() {
	let status = "urgent";

	//if a node in your voronoi sector is hit, we can say that your area has been hit
	return (<div>
		<header>
			<img className="header__logoimage" src="/logo.svg" alt="impact aware logo"/>
		</header>
		<main>
			<section className="events">
				<div className="events__title">
					<h2> Your City is <span className={"events__status "+({"destroyed":"red-text ", "nominal":"", "urgent":"yellow-text "})[status]}> Under Seige </span> </h2>
					<small> Seek Shelter </small>
				</div>
				<div className="events__table">
					<EventRow status="destroyed" time="3h" distance="5" />
					<EventRow status="nominal" time="1h" distance="3" />
					<EventRow status="urgent" time="6h" distance="1" />
				</div>
			</section>
		</main>
	</div>);
}

export default App;
