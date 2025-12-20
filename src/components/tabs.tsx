"use client";

import { useState, Children } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { motionConfig } from "@/lib/motion";

interface TabsProps {
  tabs: { id: string; label: string }[];
  children: React.ReactNode;
  defaultTab?: string;
}

export function Tabs({ tabs, children, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
  // Children.toArray automatically flattens fragments and handles multiple children
  const childrenArray = Children.toArray(children);

  // Safety check: ensure activeIndex is valid
  const safeIndex = activeIndex >= 0 ? activeIndex : 0;
  const activeContent = childrenArray[safeIndex] || null;

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-x-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-3 text-sm font-medium transition-colors duration-300 ${
              activeTab === tab.id
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: motionConfig.duration.normal,
              ease: motionConfig.easing.default,
            }}
            className="pt-6"
          >
            {activeContent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
