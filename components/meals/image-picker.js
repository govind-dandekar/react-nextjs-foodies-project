'use client'

import { useRef } from 'react';

import classes from './image-picker.module.css';

export default function ImagePicker({label, name}){

	const imageInput = useRef();

	// trigger click on input with refs
	function handlePickClick(){
		imageInput.current.click()
	}

	return <div className={classes.picker}>
		<label htmlFor={name}>{label}</label>
		<div className={classes.controls}>
			{/* id connects label to input */}
			<input 
				className={classes.input}
				type="file" 
				id={name} 
				accept="image/png, image/jpeg" 
				name={name}
				ref={imageInput}
			/>
			{/* set type as button so it doesn't submit surrounding form */}
			<button 
				className={classes.button}
				type="button"
				onClick={handlePickClick}	
			>
					Pick an Image
			</button>
		</div>
	</div>
}