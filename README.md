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

### Installation CheckList
- `npm install -D tailwindcss postcss autoprefixer`
- `npm install swr`
- `npm install magic-sdk`
- `npm install mongodb`

### File and Folder Directory Configuration
- In root add "jsconfig.json"
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["components/*"],
      "@pages/*": ["pages/*"],
    }
  }
}
```
- When creating file and folder directories in `pages/api` or `pages`, always follow the RESTful approach. Each REST verb (i.e. GET, POST, PUT, DELETE) corresponds to a file with actions (i.e. index, new, create, show etc) example below:
  - `GET`, `/posts`, index, display a list of all posts
  - `GET`, `/posts/new`, new, return a HTML form for creating new post
  - `POST`, `/posts`, create, create a new post
  - `GET`, `/posts/:id`, show, display a specific post
  - `GET`, `/posts/:id/edit`, edit, return a HTML form to edit a post
  - `PUT`, `/posts/:id`, update, update a specific post
  - `DELETE`, `/posts/:id`, destroy, delete a specific post

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
- Object destructuring example `const { title, image, address, description } = data;`
- Static Generation: `getStaticProps` helps with prerendering pages in the server before sending it out to browser. This then helps with SEO. If this is not done, and Javascript is used instead while in browser, the data won't show, hence SEO won't be able to find it.
  - In production, will need to run `npm run build` so that the ALL static pages have been rendered. This is not necessary in development.
  - When in production, `revalidate: 600` will regenerate the static props every 600 seconds.
  - `getStaticProps(context)` context in getStaticProps helps us get params with `context.params`.  
  - `getStaticPaths` is needed if the file is dynamic page and also uses get static props. It's job is to return an object that describe the dynamic page path values
    - `paths` and `fallback` will be used. `paths` is to denote all the paths for the dynamic pages; while `fallback` denotes what happens if the paths are not found i.e. 404 error fallback set to false, if set to true, it will try to generate the page. Fallback true is needed cause sometimes, you don't pre-render all dyanmic pages as it can be huge.
    - Handling fallback, sometimes, the data is generated after deployment, hence if fallback is set to false, then users might not be able to find the page. To solve this, set fallback to true or blocking, so that next js will let the user wait while fetching the data.
- Server-side Rendering: `getServerSideProps` is used to generate the components, page or props for every incoming requests.
  - `getServerSideProps(context)` context in getServerSideProps help in parsing incoming requests that only change part of a component, so that the UI can respond accordingly.
- To enable API routes in NextJS. you have to create the following folder with the following name `pages/api`
  - in api js files, only define functions that contains server side codes because it will only run on the server, never the front end client. 
- After using MongoDB client, always remember to close the client by calling `client.close();`
- Caveats for using MongoClient
  - there are serialization errors in id `_id`. So you have to convert to Object with `ObjectId from mongodb` before `findOne`, then convert back to string with `toString()`
- When doing API calls like fetching from MongoDB, it is always important to check if `async await` is in sequential order and used properly. Else, the code could run before the API request is fulfilled with a response, giving a lot of errors.
- Using `import Head from "next/head";` to add meta data and meta tags for SEO
- After deploy, remember to set up MongoDB to allow connection from the production code.
- Form Submission
  - When submitting form, need to have API call at the new form page. Then pass in a function that handles posts which goes to the api folder. Then in the form component, add in the data upon on submit. Refer to "pages/api/new-meetup.js", "pages/new-meetup/index.js" and "components/meetups/NewMeetupForm.js" for example implementation. 
- Link or useRouter?
**router.push**
`router.push('/push')` behaves similarly to window.location. It does not create a <a> tag, which means - if you are concern with SEO, your links will not be detected by crawlers.

**<Link>**
However, `<Link>` will create a <a> tag, which means your links will be detected when crawlers scrape your site. End users will still navigate with without reloading the page, creating the behavior of a Single Page App.