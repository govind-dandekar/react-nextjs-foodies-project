'use client'

import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './image-picker.module.css';

export default function ImagePicker({label, name}){

	const [ pickedImage, setPickedImage ] = useState();

	const imageInput = useRef();

	// trigger click on input with refs
	function handlePickClick(){
		imageInput.current.click()
	}

	function handleImageChange(event){
		// files prop exists on file input
		// will be array of all files pick (requires 'multiple' prop on input)
		const file = event.target.files[0];
		
		if (!file) {
			setPickedImage(null);
			return;
		}

		// show as preview -- convert to data url
		const fileReader = new FileReader();
		
		// will be triggered once file read
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		
		// does not return anything so have to use onload & callback
		fileReader.readAsDataURL(file);
	}

	return <div className={classes.picker}>
		<label htmlFor={name}>{label}</label>
		<div className={classes.controls}>
			<div className={classes.preview}>
				{!pickedImage && <p>No image picked yet.</p>}
				{pickedImage && 
					<Image 
						src={pickedImage} 
						alt="The image selected by the user"
						fill	
					/>}
			</div>
			{/* id connects label to input */}
			<input 
				className={classes.input}
				type="file" 
				id={name} 
				accept="image/png, image/jpeg" 
				name={name}
				ref={imageInput}
				onChange={handleImageChange}
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