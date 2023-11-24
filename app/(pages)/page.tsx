export default function IndexPage(p: { searchParams: any }) {
  return <div>Hello from index page {JSON.stringify(p.searchParams)}</div>;
}
