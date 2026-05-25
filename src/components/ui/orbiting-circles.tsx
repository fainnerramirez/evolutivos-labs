"use client";

import clsx from "clsx";
import React from "react";

interface OrbitingCirclesProps {
  className?: string;
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 40,
  speed = 1,
}: OrbitingCirclesProps) {
  const items = React.Children.toArray(children);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Orbit path */}
      {path && (
        <div
          className="absolute rounded-full border border-black/10 dark:border-white/10"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
        />
      )}

      {items.map((child, index) => {
        const angle = (360 / items.length) * index;

        return (
          <div
            key={index}
            className={clsx(
              "absolute flex items-center justify-center",
              className
            )}
            style={
              {
                width: iconSize,
                height: iconSize,

                animation: `${
                  reverse ? "orbit-reverse" : "orbit"
                } ${duration / speed}s linear infinite`,

                transform: `rotate(${angle}deg)`,

                transformOrigin: `${radius}px center`,
              } as React.CSSProperties
            }
          >
            <div
              style={{
                transform: `rotate(-${angle}deg)`,
              }}
            >
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
}