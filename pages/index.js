
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-400 min-h-screen">
      <div className="flex-col max-w-2xl mx-auto h-screen text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold space-y-6 text-white sm:text-4xl">
          <span className="block">{"TODOLIST"}</span>
          <span className="block">{"A SIMPLE TODOLIST APP"}</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <Link passHref href="/todo">
          <a className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
            {"START"}
          </a>
        </Link>
      </div>
    </div>
  )
}
