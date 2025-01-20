import Link from 'next/link';

// path stored under logoImg.src
import logoImg from '@/assets/logo.png'
// import using relative path
import classes from './main-header.module.css';

function MainHeader(){
	return <header className={classes.header}>
		<Link className={classes.logo} href="/">
			<img src={logoImg.src} alt="A plate with food on it"/>
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
}

export default MainHeader;