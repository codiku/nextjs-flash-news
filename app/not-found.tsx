import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="">
        <h2 className="font-bold text-2xl">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className="text-blue-500 underline">
          Return Home
        </Link>
      </div>
    </div>
  );
}
