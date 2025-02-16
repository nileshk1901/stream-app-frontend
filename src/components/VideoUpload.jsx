import React, { useState } from "react";
import videoLogo from "../assets/upload.png";
import { Alert, Button, Card, Label, Progress, Textarea, TextInput } from "flowbite-react";
import axios  from 'axios';
import toast from "react-hot-toast";






function VideoUpload() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [meta, setMeta] = useState({
		title: "",
		description:"",
	})
	const [progress, setProgress] = useState(0);
	const [uploading, setUploading] = useState(false);
	const [message, setMessage] = useState("");
	function handleFileChange(event) {
		console.log(event.target.files[0]);
		setSelectedFile(event.target.files[0]);
	}

	function formFieldChange(event) {
		// console.log(event.target.name);
		// console.log(event.target.value);
		setMeta({
			...meta,
			[event.target.name]:event.target.value,
		})
	}
	function handleForm(formEvent) {
		formEvent.preventDefault();
		if (!selectedFile) {
			alert("Select File");
			return;
		}
		saveVideoToServer(saveVideoToServer, meta);
		
		
	}
	function resetForm() {
		setMeta({
			title: "",
			description: "",
		
		});
		setSelectedFile(null);
		setUploading(false);
		//setMessage("");
	}
	async function saveVideoToServer(video, videoMetaData) {
		setUploading(true);
		try {
			let formData = new FormData();
			formData.append("title", videoMetaData.title);
			formData.append("description", videoMetaData.description);
			formData.append("file", selectedFile);
			let response = await axios.post(`http://localhost:8080/api/v1/videos`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
				onUploadProgress: (progressEvent) => {
					const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
					// console.log(progress);
					setProgress(progress);
				},
			}
			);
			//console.log(response);
			setProgress(0);
			setMessage("file uploaded");
			setUploading(false);
			resetForm();
			toast.success("File uploaded successfully!!");
		} catch (error) {
			setMessage("Error uploading file");
			setUploading(false);
			toast.error("File not uploaded!!")

			//console.log(error);
		}
		
	}
	return (
		<div className="text-white">
			<Card className="flex flex-col items-center justify-center">
				<h1 className="text-2xl">Upload Videos</h1>
				<div>
					<form noValidate className="flex flex-col space-y-6" onSubmit={handleForm}>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="file-upload" value="Video title" />
							</div>
							<TextInput value={meta.title} onChange={formFieldChange} name="title" placeholder="Enter video title" />
						</div>
						<div className="max-w-md">
							<div className="mb-2 block">
								<Label htmlFor="comment" value="Video Description" />
							</div>
							<Textarea value={meta.description} onChange={ formFieldChange} name="description" placeholder="Describe your video" required rows={4} />
						</div>
						<div className="flex items-center space-x-5 justify-center">
							<div className="shrink-0">
								<img
									className="h-16 w-16 object-cover"
									src={videoLogo}
									alt="Upload icon"
								/>
							</div>
							<label className="block">
								<span className="sr-only">Choose video file</span>
								<input
									name="file"
									onChange={handleFileChange}
									type="file"
									className="block w-full text-sm text-gray-500
								 file:mr-4 file:py-2 file:px-4
								 file:rounded-md file:border-0
								 file:text-sm file:font-semibold
								 file:bg-violet-600 file:text-white
								 hover:file:bg-violet-700 cursor-pointer"
								/>
							</label>
						</div>
						<div>
							{uploading && (
								<Progress color="green" progress={progress} textLabel="Uploading"  labelProgress labelText />
							)}
						</div>
						<div>
							{message && (
								<Alert color="success" rounded withBorderAccent onDismiss={() => { 
									setMessage("");
								}}>
									<span className="font-medium">Success Alert!!  </span>
									{message}

								</Alert>
							)}
						</div>
						<div className=" flex justify-center">
							<Button type="submit" >Submit</Button>

						</div>
					</form>
					
				</div>
			</Card>
		</div>
	);
}

export default VideoUpload;
