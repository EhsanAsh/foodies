'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
	const [pickedImage, setPickedImage] = useState();
	const imageInput = useRef();

	function handlePickClick() {
		imageInput.current.click();
	}

	function handleImageChange(event) {
		const file = event.target.files[0];

		if (!file) {
			setPickedImage(null);
			return;
		}

		const fileReader = new FileReader(); // we can use this class to read a file and convert it to a url
		fileReader.onLoad = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	}

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No Image picked yet.</p>}
					{pickedImage && (
						<Image
							src={pickedImage}
							alt='The image selected by the user'
							fill
						/>
					)}
				</div>
				<input
					className={classes.input}
					type='file'
					id={name}
					accept='image/png, image/jpeg'
					name={name}
					ref={imageInput}
					// multiple
					onChange={handleImageChange}
					required
				/>
				<button
					className={classes.button}
					type='button'
					onClick={handlePickClick}
				>
					Pick an image
				</button>
			</div>
		</div>
	);
}