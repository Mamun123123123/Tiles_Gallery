import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
        404 - Not Found
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-5 sm:mb-6">
        Page does not exist
      </p>

      <Link href="/">
        <button className="bg-green-500 hover:bg-green-600 transition text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;