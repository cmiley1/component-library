"use client";

import React, { useState } from "react";
import FinanceHero from "./FinanceHero";
import FunHero from "./FunHero";
import SimpleHero from "./SimpleHero";

export default function CanvaLikeComponent() {
  const [selectedElements, setSelectedElements] = useState([]);
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
    // ... more components
  ];

  // ... templates and elements definitions

  const sidebarElements = [
    { id: 1, label: "Components", data: components },
    // ... other sidebar elements
  ];

  const updateMainSidebar = (elementData) => {
    setCurrentSidebarContent(elementData);
  };

  const toggleComponentInMainContent = (component, id) => {
    setSelectedElements((prevElements) => {
      const isComponentSelected = prevElements.some(
        (element) => element.id === id
      );
      if (isComponentSelected) {
        return prevElements.filter((element) => element.id !== id);
      } else {
        return [...prevElements, { id, component }];
      }
    });
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
              onClick={() =>
                toggleComponentInMainContent(item.component, item.id)
              }
              className="flex items-center justify-center p-2 w-full text-left hover:bg-gray-200 rounded"
            >
              <div className="w-60 relative" style={{ paddingTop: "100%" }}>
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
        <div className="flex-grow flex justify-center p-10">
          <div
            className="bg-white shadow-lg rounded-lg overflow-auto"
            style={{ width: "1080px", height: "1280px" }}
          >
            {selectedElements.length > 0
              ? selectedElements.map((item, index) => (
                  <div key={index} className="mb-4">
                    {item.component}
                  </div>
                ))
              : "Select an item from the main sidebar"}
          </div>
        </div>
      </div>
    </div>
  );
}
