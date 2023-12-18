import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div>
        <h2 className="text-2xl font-bold">Not found</h2>
        <p>Could not find requested resource !</p>
        <Link href="/" className="text-blue-500 underline">
          Return home
        </Link>
      </div>
    </div>
  );
}
