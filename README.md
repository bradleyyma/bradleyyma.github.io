# [bradleyyma.github.io](https://bradleyyma.github.io/)

## My Portfolio!

## Run locally

1. Install dependencies:

	npm install

2. Start the dev server:

	npm start

3. Open http://localhost:3000

## Preview the production build locally

1. Build the app:

	npm run build

2. Serve the build output:

	npx serve -s build

3. Open the URL shown in the terminal.

## Deploy to GitHub Pages

This project is configured to deploy with the `gh-pages` package.

1. Ensure the `homepage` field in [package.json](package.json) matches your site URL. For this repo, it should be:

	https://bradleyyma.github.io/

2. Commit and push your latest changes to GitHub.

3. Deploy:

	npm run deploy

4. In GitHub, go to Settings → Pages and set the source to the `gh-pages` branch (root).
