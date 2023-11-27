"use client";

import React, { useState } from "react";
import FinanceHero from "./FinanceHero";
import FunHero from "./FunHero";
import SimpleHero from "./simpleHero";

export default function CanvaLikeComponent() {
  const [selectedElement, setSelectedElement] = useState(null);
  const [currentSidebarContent, setCurrentSidebarContent] = useState([]);

  const components = [
    {
      id: 1,
      name: "Finance Hero",
      component: <FinanceHero />,
      sidebarClass: "scaled-down-style",
    },
    {
      id: 2,
      name: "Fun Hero",
      component: <FunHero />,
      sidebarClass: "scaled-down-style",
    },
    {
      id: 3,
      name: "Simple Hero",
      component: <SimpleHero />,
      sidebarClass: "scaled-down-style",
    },
  ];

  const templates = [
    // ... template data
  ];

  const elements = [
    // ... element data
  ];

  const sidebarElements = [
    { id: 1, label: "Components", data: components },
    { id: 2, label: "Templates", data: templates },
    { id: 3, label: "Elements", data: elements },
  ];

  const updateMainSidebar = (elementData) => {
    setCurrentSidebarContent(elementData);
    setSelectedElement(null);
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
        <div className="w-20 bg-black p-2 shadow-lg overflow-auto">
          {sidebarElements.map((element) => (
            <button
              key={element.id}
              onClick={() => updateMainSidebar(element.data)}
              className="w-full flex flex-col items-center py-2 rounded hover:bg-gray-700 focus:bg-gray-700"
            >
              <span className="text-white text-sm">{element.label}</span>
            </button>
          ))}
        </div>

        {/* Main Sidebar */}
        <div className="w-64 bg-white p-4 shadow-lg overflow-auto">
          {currentSidebarContent.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedElement(item.component)}
              className="flex items-center justify-center p-2 w-full text-left hover:bg-gray-200 rounded"
            >
              {/* Wrapper to maintain aspect ratio */}
              <div className="w-60 relative" style={{ paddingTop: "100%" }}>
                {" "}
                {/* 1:1 Aspect Ratio */}
                <div
                  className={`absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden ${item.sidebarClass}`}
                >
                  {item.component}
                </div>
              </div>
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
              {/* Render the full component in the main content area */}
              {selectedElement}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
