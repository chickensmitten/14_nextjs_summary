// mydomain.com/news
import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <u>
        <Link href="/news/some-js-framework">
          <li>News 1 </li>
        </Link>
        <li>News 2</li>
      </u>
    </Fragment>
  )
}

export default NewsPage;
