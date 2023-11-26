"use client";

import React, { useState } from "react";

export default function CanvaLikeComponent() {
  const [selectedElement, setSelectedElement] = useState(null);
  const [currentSidebarContent, setCurrentSidebarContent] = useState([]);

  const components = [
    { id: 1, name: "Component 1", content: "Content for Component 1" },
    { id: 2, name: "Component 2", content: "Content for Component 2" },
    // ... more components
  ];

  const templates = [
    { id: 1, name: "Template 1", content: "Content for Template 1" },
    { id: 2, name: "Template 2", content: "Content for Template 2" },
    // ... more templates
  ];

  const elements = [
    { id: 1, name: "Element 1", content: "Content for Element 1" },
    { id: 2, name: "Element 2", content: "Content for Element 2" },
    // ... more elements
  ];

  // Function to update main sidebar based on skinny sidebar selection
  const updateMainSidebar = (elementData) => {
    setCurrentSidebarContent(elementData);
    setSelectedElement(null); // Reset the selected element
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      {/* Top-level Header */}
      <div className="flex-shrink-0 bg-blue-900 p-4 shadow-md w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-lg text-white font-semibold">
            Application Title
          </h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            Save
          </button>
        </div>
      </div>

      {/* Lower section including both sidebars and main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Skinny Sidebar */}
        <div className="w-20 p-20 bg-black text-white p-2 shadow-lg overflow-auto hover:bg-gray-10">
          <button
            onClick={() => updateMainSidebar(components)}
            className="w-full flex flex-col items-center py-2 rounded hover:bg-white"
          >
            Components
          </button>
          <button
            onClick={() => updateMainSidebar(templates)}
            className="w-full flex flex-col items-center py-2 rounded hover:bg-gray-700 focus:bg-gray-700"
          >
            Templates
          </button>
          <button
            onClick={() => updateMainSidebar(elements)}
            className="w-full flex flex-col items-center py-2 rounded hover:bg-gray-700 focus:bg-gray-700"
          >
            Elements
          </button>
        </div>

        {/* Main Sidebar */}
        <div className="w-64 bg-white p-4 shadow-lg overflow-auto">
          {currentSidebarContent.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedElement(item)}
              className="flex items-center space-x-2 p-2 w-full text-left hover:bg-gray-200 rounded"
            >
              <span className="text-gray-600 text-sm">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col flex-grow">
          <div className="flex-shrink-0 bg-white p-4 shadow-md w-full">
            {/* Secondary Navbar content can be placed here */}
          </div>

          {/* Document Area */}
          <div className="flex-grow p-10 overflow-auto">
            <div className="bg-white w-full h-full max-w-4xl mx-auto shadow-lg rounded-lg p-6">
              {/* Render the selected element's content */}
              {selectedElement ? (
                <div className="p-4 border border-gray-300 rounded">
                  {selectedElement.content}
                </div>
              ) : (
                "Select an item from the main sidebar"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
