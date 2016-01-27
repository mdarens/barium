import buryem from "buryem";

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

const htmlViewer = `
<style>
	${holder.__cssText}

	$.{styles.btn} [data-nah] {
		color: #f0f;
	}
</style>
<button class="${styles.btn}" title="Click me if you want">
	Hooray <span data-nah="nah">or nah</span>
</button>
`;

const output = (function() {
    return htmlViewer;
})();
