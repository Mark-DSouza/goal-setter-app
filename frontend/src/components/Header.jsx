import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt } from 'react-icons/fa';

function Trial() {
	return (
		<header className='header'>
			<div className='logo'>
				<Link to='/'>Goalsetter</Link>
			</div>
			<ul>
				<li>
					<Link to='/login'>
						<FaSignInAlt />
						Login
					</Link>
				</li>
				<li>
					<Link to='/register'>
						<FaUser />
						Register
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Trial;
