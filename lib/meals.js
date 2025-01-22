import fs from 'node:fs';
import { S3 } from '@aws-sdk/client-s3'

const s3 = new S3({
  region: 'us-east-2'
});

// sqlite3 doesn't use promises
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import randomstring from 'randomstring';

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

export async function saveMeal(meal){
	// generate unique slug based on title
	// npm install slugify and xss (outputting user instructions as html)

	// string, config object
	meal.slug = slugify(meal.title, {lower: true});
	// sanitize instructions
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
 
  const bufferedImage = await meal.image.arrayBuffer();

	s3.putObject({
		Bucket: 'govinddandekar-nextjs-demo-users-image',
		Key: fileName,
		Body: Buffer.from(bufferedImage),
		ContentType: meal.image.type,
	});
	
	// save image as path in db; remove public -- image req automaticall
	// send to public (public treated as root)
	meal.image = fileName;

	// save meal object to db -- insert all fields except auto-created id
	// better SQLite will auto insert @field
	// run will pass meal object to db
	db.prepare(`
		INSERT INTO meals (
			title, 
			summary, 
			instructions, 
			creator, 
			creator_email, 
			image, 
			slug
		)
		VALUES (
			@title, 
			@summary,
			@instructions,
			@creator,
			@creator_email,
			@image, 
			@slug
		)	
	`).run(meal)
}