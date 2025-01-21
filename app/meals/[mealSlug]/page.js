import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals'; 

import classes from './page.module.css';

// evenry component stored in page.js gets params
// [slugName]: url 
async function MealDetailsPage({ params }){

	const meal = await getMeal(params.mealSlug);

	// if no meal found (bad url)
	if (!meal){
		// stops component from executing and will
		// show closest not found || error page
		notFound();
	}

	// regex to replace newline with line break
	meal.instructions = meal.instructions.replace(/\n/g, '<br />')

	return <>
		<header className={classes.header}>
			<div className={classes.image}>
				<Image src={meal.image} alt={meal.title} fill />
			</div>
			<div className={classes.headerText}>
				<h1>{meal.title}</h1>
				<p className={classes.creator}>
					by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
				</p>
				<p className={classes.summary}>
					{meal.summary}
				</p>
			</div>
		</header>
		<main>
			<p 
				className={classes.instructions}
				dangerouslySetInnerHTML= {{
					__html: meal.instructions
				}}	
			>
			</p>
		</main>
	</>
}

export default MealDetailsPage;