import { Suspense } from 'react';
import Link from 'next/link'

import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import { getMeals } from '@/lib/meals';

// component fx to fetch data
// will trigger Suspense until loaded
// content streamed in and rendered
async function Meals(){
	const meals = await getMeals();

	return <MealsGrid meals={meals} />
}

function MealsPage(){
	
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
			<Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
				<Meals />
			</Suspense>
		</main>
	</>
}

export default MealsPage;