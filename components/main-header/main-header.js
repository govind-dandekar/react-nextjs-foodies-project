import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from './main-header-background';

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
					<Link href="/meals">Browse Meals</Link>
				</li>
				<li>
					<Link href="/community">Foodies Community</Link>
				</li>
			</ul>
		</nav>
	</header>
	</>
}

export default MainHeader;