'use client'

// will only work if embedded in form
import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit(){
	const { pending } = useFormStatus();

	return <button disabled={pending}>
		{ pending ? 'Submitting' : 'Share Meal' }
	</button>
}