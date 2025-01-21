'use server';

// server side pattern -- must use async
// set as action on form; next will create req and send to server
// receive formData; if 'use client' in component, server action won't work
export async function shareMeal(formData){
	
	// create form object
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email')
	}

	// store data
	console.log(meal);
}

