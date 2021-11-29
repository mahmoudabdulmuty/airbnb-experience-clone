import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from '../data';

export default function App() {
	const cards = data.map((item) => <Card key={item.id} {...item} />);
	return (
		<div className='container'>
			<Navbar />
			<Hero />
			<section className='cards-container'>{cards}</section>
		</div>
	);
}
