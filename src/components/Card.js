export default function Card(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if (props.location === 'Online') {
		badgeText = 'ONLINE';
	}
	return (
		<div className='single-card'>
			{badgeText && <div className='card--badge'>{badgeText}</div>}
			<div className='img-box'>
				<img
					className='card-img'
					src={`./img/${props.coverImg}`}
					alt={props.coverImg}
				/>
			</div>
			<div className='card-content'>
				<div className='star'>
					<img className='star-img' src='../img/star.png' alt='star' />
					<span>{props.stats.rating}</span>
					<span className='country'>
						{props.stats.reviewCount} &bull; {props.location}
					</span>
				</div>
				<div className='card-title'>
					<p>{props.title}</p>
				</div>
				<div className='price'>
					<p>
						<strong>From ${props.price} /</strong> person
					</p>
				</div>
			</div>
		</div>
	);
}
