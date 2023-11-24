// components/CanvaLikeComponent.js

export default function canvaComponent() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-lg">
        {/* Placeholder for Sidebar content */}
        <div className="space-y-2">
          {/* Repeat this block for each sidebar item */}
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
            {/* Icon placeholder */}
            <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
            {/* Text placeholder */}
            <span className="text-gray-600 text-sm">Menu Item</span>
          </div>
          {/* ... other sidebar items */}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex-shrink-0 bg-white p-4 shadow-md">
          {/* Placeholder for Header content */}
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Document Title</h1>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Button
            </button>
          </div>
        </div>

        {/* Document area */}
        <div className="flex-grow p-10 overflow-auto">
          {/* Placeholder for Document with tools */}
          <div className="bg-white w-full h-full max-w-4xl mx-auto shadow-lg rounded-lg p-6">
            {/* Placeholder for Document content and tools */}
            <div className="h-96 w-full bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
