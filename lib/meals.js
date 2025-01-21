// sqlite3 doesn't use promises
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals(){
	await new Promise((resolve) => setTimeout(resolve, 5000))
	
	// throw new Error('Loading meals failed');
	
	// run() used to insert data; all() used to fetch; get() for single row
	return db.prepare('SELECT * FROM meals').all();
}

// use ? and .get(slug) to avoid SQL injection
export function getMeal(slug){
	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export function saveMeal(meal){
	// generate unique slug based on title
	// npm install slugify and xss (outputting user instructions as html)

	// string, config object
	meal.slug = slugify(meal.title, {lower: true});
	// sanitize instructions
	const instructions = xss(meal.instructions)

}