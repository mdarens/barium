let buryem = require("buryem");

let holder = {};

const styles = buryem.create({
	btn: {
		border: "3px solid #0af",
        ':hover': {
            borderColor: "#f20"
        },
        '@media (max-width: 800px)': {
            display: "block",
            width: "100%",
            backgroundColor: "#0af",
            color: "#fff",
            ':before': {
                content: "attr(title)",
                color: "rgba(255,255,255,0.75)"
            },
            ':hover': {
                backgroundColor: "#06f",
                borderColor: "#02f"
            }
        }
	}
}, "my-hooray-button", holder);

let htmlViewer = `
<style>${holder.__cssText}</style>
<button title="click me if you want" class="${styles.btn}">hooray</button>
`;

const output = () => htmlViewer;

output();
