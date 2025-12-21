"use client";

import { ReactNode, forwardRef } from "react";
import SectionHeading from "@/components/SectionHeading";

type SectionLayoutProps = {
  children: ReactNode;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionIndex: number;
  textColor?: string;
  sectionColor?: string;
  stickyHeading?: boolean;
};

const SectionLayout = forwardRef<HTMLElement, SectionLayoutProps>(
  (
    {
      children,
      sectionTitle,
      sectionSubtitle,
      sectionIndex,
      textColor = "text-neutral-900",
      sectionColor = "bg-transparent",
      stickyHeading = true,
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={`relative w-full ${sectionColor}`}
      >
        {/* Outer container */}
        <div className="mx-auto px-6 md:px-12 py-24">
          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-14 gap-12 items-start">
            
            {/* Left: Section Heading */}
            <div
              className={`
                md:col-span-4
                ${stickyHeading ? "md:sticky md:top-24" : ""}
              `}
            >
              <SectionHeading
                sectionSubtitle={sectionSubtitle}
                sectionTitle={sectionTitle}
                index={sectionIndex}
                color={textColor}
              />
            </div>

            {/* Right: Section Content */}
            <div className="md:col-span-10">
              {children}
            </div>

          </div>
        </div>
      </section>
    );
  }
);

SectionLayout.displayName = "SectionLayout";

export default SectionLayout;
