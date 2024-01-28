import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold pt-24 pl-56 pb-5">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link href="week-2" className="text-xl pl-56">
        Week 2 Assignment
      </Link>
      <br />
      <Link href="week-3" className="text-xl pl-56">
        Week 3 Assignment
      </Link>
    </main>
  );
}
