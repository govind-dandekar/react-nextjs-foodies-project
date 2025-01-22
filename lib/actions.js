'use server';

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { saveMeal } from "./meals";

function isInvalidText(text){
	return !text || text.trim() === '';
}


// server side pattern -- must use async
// set as action on form; next will create req and send to server
// receive formData; if 'use client' in component, server action won't work
export async function shareMeal(prevState, formData){
	
	// create form object
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email')
	};

	// validation should occur server-side (since client-side)
	// validation can be disabled

	if (isInvalidText(meal.title) || 
	isInvalidText(meal.summary) ||
	isInvalidText(meal.instructions) ||
	isInvalidText(meal.creator) ||
	isInvalidText(meal.creator_email) ||
	!meal.creator_email.includes('@') ||
	!meal.image ||
	// invalid file
	meal.image.size === 0
	)	{
		// can return response objects
		// must be serialization (cant include methods)
		return {
			message: 'Invalid input.'
		}
	}

	// store data
	await saveMeal(meal);
	// cache revalidation for routepath -- only this path (no nested path)
	// can pass second arg 'layout' -- full layout is revalidated (nested pages)
	// can revaildate full website with ('/', 'layout')
	
	revalidatePath('/meals');

	redirect('/meals')
}

