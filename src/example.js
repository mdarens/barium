import buryem from "./buryem";

let holder = {};

const styles = buryem.create({
	btn: {
		border: "3px solid"
	}
}, "hooray", holder);

console.log({
	styles: styles,
	holder: holder
});
