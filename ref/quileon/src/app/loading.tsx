export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        {/* Dog body */}
        <div className="w-16 h-8 bg-gray-800 rounded-t-full animate-bounce">
          {/* Dog head */}
          <div className="absolute -left-4 w-8 h-8 bg-gray-800 rounded-full">
            {/* Dog ear */}
            <div className="absolute -top-2 left-1 w-4 h-4 bg-gray-800 rounded-full transform -rotate-45"></div>
            {/* Dog eye */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
          </div>
          {/* Dog legs (animated) */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
            <div className="w-2 h-4 bg-gray-800 animate-[running_0.5s_ease-in-out_infinite]"></div>
            <div className="w-2 h-4 bg-gray-800 animate-[running_0.5s_ease-in-out_infinite_0.25s]"></div>
          </div>
          {/* Dog tail */}
          <div className="absolute -right-4 top-0 w-4 h-4 bg-gray-800 rounded-full animate-wag"></div>
        </div>
        {/* Loading text */}
        <p className="mt-8 text-xl font-semibold text-gray-700 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
