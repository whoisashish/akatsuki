const githubMarkdownCss = require('generate-github-markdown-css');

(async () => {
	console.log(await githubMarkdownCss());
	 '.markdown-body {box-sizing: border-box;min-width: 200px;max-width: 980px;margin: 0 auto;padding: 45px;}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}'
})();