export const revalidate = 10;
export default async function IndexPage() {
  const fetch1 = await (
    await fetch("http://api.open-notify.org/iss-now.json", {})
  ).json();

  const fetch2 = await (
    await fetch("https://api.chucknorris.io/jokes/random", {})
  ).json();

  return (
    <div>
      {new Date().toLocaleTimeString()}
      <br />
      <br />
      <br /> {JSON.stringify(fetch1)}
      <br />
      <br />
      <br /> {JSON.stringify(fetch2)}
    </div>
  );
}
