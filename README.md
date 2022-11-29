# NextJS Summary
## About NextJS
- NextJS is a fullstack React framework for production
- Next is built on top of React

## Key Features & Benefits
- Built in server side rendering is SEO friendly
- File-based routing (shown in directory of the code base unlike ReactJS components)
- Fullstack capabilities (has standalone backend code)

## Setup
- `npx create-next-app <name>`
- Shift + Option + F to instant format the code with Prettier in VS Code You can find it in VSCode -> Preferences -> Keyboard Shortcuts -> Search for "format documents"
- Run `npm install` if you are downloading existing project from GitHub
- Run `npm run dev` to see changes made in local environment

## Routing and File Directories
- `pages/news.js` and `pages/news/index.js` both are in "mydomain.com/news"
- `pages/news/something-important.js` both are in "mydomain.com/news/something-important"
- `pages/news/[newsId].js` both are in "mydomain.com/news/<any other identifier>"
