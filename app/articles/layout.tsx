export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="m-4 border-green-500 border-2">{children}</div>;
}
