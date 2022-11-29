import { useRouter } from "next/router";
// mydomain.com/news/<detailed page>

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <>
      <h1>Detailed Page</h1>
      { newsId }
    </>
  )
}

export default DetailPage;
