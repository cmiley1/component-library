"use client";

import React, { useState } from "react";
import FinanceHero from "./FinanceHero";
import FunHero from "./FunHero";
import SimpleHero from "./SimpleHero";

export default function CanvaLikeComponent() {
  const [currentSidebarContent, setCurrentSidebarContent] = useState([]);
  const [selectedElements, setSelectedElements] = useState([]);
  const [componentOrder, setComponentOrder] = useState([
    { id: 1, component: <FinanceHero /> },
    { id: 2, component: <FunHero /> },
    { id: 3, component: <SimpleHero /> },
    // ... add more components as needed
  ]);
  const [draggedComponentId, setDraggedComponentId] = useState(null);

  const onDragStart = (id) => {
    setDraggedComponentId(id);
  };

  const onDrop = (id) => {
    const newOrder = [...componentOrder];
    const fromIndex = newOrder.findIndex(
      (comp) => comp.id === draggedComponentId
    );
    const toIndex = newOrder.findIndex((comp) => comp.id === id);

    if (fromIndex < 0 || toIndex < 0) return; // Check if indices are valid

    // Swap elements
    [newOrder[fromIndex], newOrder[toIndex]] = [
      newOrder[toIndex],
      newOrder[fromIndex],
    ];
    setComponentOrder(newOrder);
  };

  const sidebarElements = [
    {
      id: 1,
      label: "Components",
      data: [
        { id: 1, name: "Finance Hero", component: <FinanceHero /> },
        { id: 2, name: "Fun Hero", component: <FunHero /> },
        { id: 3, name: "Simple Hero", component: <SimpleHero /> },
      ],
    },
  ];

  const updateMainSidebar = (elementData) => {
    setCurrentSidebarContent(elementData);
  };

  const toggleAndReorderComponents = (component, id) => {
    setComponentOrder((prevOrder) => {
      const isComponentSelected = prevOrder.some((el) => el.id === id);
      if (isComponentSelected) {
        // Remove the component
        return prevOrder.filter((el) => el.id !== id);
      } else {
        // Add the component
        return [...prevOrder, { id, component }];
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
                toggleAndReorderComponents(item.component, item.id)
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
        <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
          {/* ... other components and sections ... */}

          {/* Main Content Area */}
          <div className="flex-grow flex justify-center p-10">
            <div
              className="canva-like-component bg-white shadow-lg rounded-lg overflow-auto"
              style={{ width: "1080px", height: "1280px" }}
            >
              {componentOrder.map((item) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={() => onDragStart(item.id)}
                  onDrop={() => onDrop(item.id)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {item.component}
                </div>
              ))}
            </div>
          </div>

          {/* ... rest of the component ... */}
        </div>
      </div>
    </div>
  );
}
