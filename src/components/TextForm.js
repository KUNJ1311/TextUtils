import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpper = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to Uppercase!", "success");
	};

	const handleLower = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to Lowercase!", "success");
	};

	const handlecopy = () => {
		navigator.clipboard.writeText(text);
	};

	const handleSpaces = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
		props.showAlert("Removed extra spaces!", "success");
	};

	const handleclear = () => {
		let newText = "";
		setText(newText);
		props.showAlert("Text Cleared!", "success");
	};

	const handleOnChange = (event) => {
		// console.log("on change");
		setText(event.target.value);
	};

	const [text, setText] = useState("");

	return (
		<>
			<div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
				<h1 className="heading">{props.heading}</h1>
				<div className="mb-3">
					<textarea className="form-control border-2" style={{ backgroundColor: props.mode === "dark" ? "#13173d" : "white", color: props.mode === "dark" ? "white" : "black" }} value={text} onChange={handleOnChange} id="myTextarea" rows="10"></textarea>
				</div>
				<button className="btn btn-primary mx-1" disabled={text.length === 0} onClick={handleUpper}>
					Uppercase
				</button>
				<button className="btn btn-primary mx-1" disabled={text.length === 0} onClick={handleLower}>
					Lowercase
				</button>
				<button className="btn btn-primary mx-1" disabled={text.length === 0} onClick={handlecopy}>
					Copy
				</button>
				<button className="btn btn-primary mx-1" disabled={text.length === 0} onClick={handleSpaces}>
					Formate
				</button>
				<button className="btn btn-danger mx-1" disabled={text.length === 0} onClick={handleclear}>
					Clear
				</button>
			</div>
			<div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
				<h1>Your text summary</h1>
				<p>
					{
						text.split(/\s+/).filter((element) => {
							return element.length !== 0;
						}).length
					}{" "}
					Words and {text.length} Characters
				</p>
				<p>
					{0.009 *
						text.split(" ").filter((element) => {
							return element.length !== 0;
						}).length}{" "}
					Minutes Read
				</p>
				<h3>Preview</h3>
				<p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
			</div>
		</>
	);
}
