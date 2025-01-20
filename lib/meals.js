// sqlite3 doesn't use promises
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals(){
	await new Promise((resolve) => setTimeout(resolve, 5000))
	
	// throw new Error('Loading meals failed');
	
	// run() used to insert data; all() used to fetch; get() for single row
	return db.prepare('SELECT * FROM meals').all();
}