export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500"></div>
      <span className="ml-3 text-gray-400">Loading...</span>
    </div>
  );
}
