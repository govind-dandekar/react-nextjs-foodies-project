import Link from 'next/link'

import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import { getMeals } from '@/lib/meals';

async function MealsPage(){
	// server components can be async and can be used with Promises
	// meals data available at Build time so not async
	const meals = await getMeals();

	return <>
		<header className={classes.header}>
			<h1>
				Delicious meals, created <span className={classes.highlight}>by you</span>
			</h1>
			<p>Choose your favorite recipe and cook it yourself.  It is easy and fun!</p>
			<p className={classes.cta}>
				<Link href='/meals/share'>
					Share your favorite recipe
				</Link>
			</p>
		</header>
		<main className={classes.name}>
			<MealsGrid meals={meals}/>
		</main>
	</>
}

export default MealsPage;