import { ArticleApi } from "@/app/api/article-api";

export default async function IndexPage() {
  // const articles = await ArticleApi.fetchToday();

  const fetch1 = await (
    await fetch("http://api.open-notify.org/iss-now.json", {
      next: { revalidate: 5 },
    })
  ).json();

  const fetch2 = await (
    await fetch("https://api.chucknorris.io/jokes/random", {
      next: { revalidate: 10 },
    })
  ).json();

  http: return (
    <div>
      {Math.random()}
      <br />
      <br />
      <br /> {JSON.stringify(fetch1)}
      <br />
      <br />
      <br /> {JSON.stringify(fetch2)}
      {/* <br />- {JSON.stringify(articles)} */}
    </div>
  );
}
