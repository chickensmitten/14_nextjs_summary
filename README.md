# NextJS Summary (A Refresher, Recap and Relearn)
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
- `pages/news/[newsId]/index.js` and `pages/news/[newsId].js` both are in "mydomain.com/news/<any other identifier>". It is possible to have dynamic folder pages and dynamic pages

## NextJS specific uses
- `useRouter` allows you to get values encoded in the URL (among other things like programming navigation with `router.push("/" + props.id);`
```
import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return ( ... );
}
export default MeetupItem;
```
- `<Fragment> ... </Fragment>` is so that we can have a wrapper for JSX elements. Functions very similar to `<> ... </>`
- `<Link> ... </Link>` It is used to maintain states (redux or context states ) in React for single page application. If you use `<a> ... </a>` all states are lost.
- Adding "<file-name-1>.module.css" in a folder with a similarly names "<file-name-1>.js", the css in the .module.css file will be scope to the js file by using `import classes from <file-name-1>.module.css;`. then use classes in className like this `<li className={classes.item}>`
- Static Generation: `getStaticProps` helps with prerendering pages in the server before sending it out to browser. This then helps with SEO. If this is not done, and Javascript is used instead while in browser, the data won't show, hence SEO won't be able to find it.
  - In production, will need to run `npm run build` so that the static pages have been rendered. This is not necessary in development.
  - When in production, `revalidate: 600` will regenerate the static props every 600 seconds.
- Server-side Rendering: `getServerSideProps` is used to generate the components, page or props for every incoming requests.
  - `getServerSideProps(context)` context in getServerSideProps help in parsing incoming requests that only change part of a component, so that the UI can respond accordingly.