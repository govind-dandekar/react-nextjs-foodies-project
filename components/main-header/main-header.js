import Image from 'next/image';

import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';
import Link from 'next/link';

// next Image component automatically detects image size and other properties
// and will automatically serve image in optimized format
import logoImg from '@/assets/logo.png'
// import css using relative path
import classes from './main-header.module.css';

function MainHeader(){
	return <>
		<MainHeaderBackground />
		<header className={classes.header}>
		<Link className={classes.logo} href="/">
			<Image src={logoImg} alt="A plate with food on it" priority/>
			NextLevel Food
		</Link>
		<nav className={classes.nav}>
			<ul>
				<li>
					<NavLink
						href='/meals'
					>
						Browse Meals
					</NavLink>
				</li>
				<li>
				<NavLink
						href='/community'
					>
						Foodies Community
				</NavLink>
				</li>
			</ul>
		</nav>
	</header>
	</>
}

export default MainHeader;