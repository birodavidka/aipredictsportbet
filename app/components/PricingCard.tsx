"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface PricingTabProps {
  yearly: boolean;
  popular?: boolean;
  planName: string;
  price: {
    monthly: number;
    yearly: number;
  };
  planDescription: string;
  features: string[];
}

function PricingTab(props: PricingTabProps) {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className={`h-full w-full max-w-sm transition-all duration-300 `}>
      <div
        className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-lg transition-all duration-300
        ${theme === "dark" ? "border-gray-700 bg-gray-800 text-white" : "border-gray-200 bg-white text-black"}
      `}
      >
        {props.popular && (
          <div className="absolute right-0 top-0 -mt-4 mr-6">
            <div className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="mb-1 font-semibold">{props.planName}</div>
          <div className="mb-2 inline-flex items-baseline">
            <span className="text-3xl font-bold">$</span>
            <span className="text-4xl font-bold">
              {props.yearly ? props.price.yearly : props.price.monthly}
            </span>
            <span className="font-medium text-gray-500">/mo</span>
          </div>
          <div className="mb-5 text-sm text-gray-500">{props.planDescription}</div>
          <a
            className={`inline-flex w-full justify-center whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium shadow transition-colors
            ${theme === "dark" ? "bg-indigo-400 hover:bg-indigo-500 text-white" : "bg-indigo-500 hover:bg-indigo-600 text-white"}
          `}
            href="#0"
          >
            Purchase Plan
          </a>
        </div>
        <div className="mb-3 font-medium">Includes:</div>
        <ul className="grow space-y-3 text-sm text-gray-600 dark:text-gray-400">
          {props.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const PricingCard = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className={`w-full px-4 transition-all duration-300`}>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">See Our Pricing Plans!</h2>
        <p className="text-gray-400 mb-12">
          Experience next-level betting analytics with our AI-driven platform.
        </p>
      </div>
      {/* Pricing Toggle */}
      <div className="m-auto mb-8 flex max-w-[14rem] justify-center">
        <div
          className={`relative flex w-full rounded-full p-1 transition-all duration-300
          ${theme === "dark" ? "bg-gray-800" : "bg-white"}
        `}
        >
          <span
            className="pointer-events-none absolute inset-0 m-1"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 w-1/2 transform rounded-full shadow transition-transform
              ${isAnnual ? "bg-indigo-500" : "translate-x-full bg-indigo-500"}
            `}
            ></span>
          </span>
          <button
            className={`relative h-8 flex-1 rounded-full text-sm font-medium transition-colors
            ${isAnnual ? "text-white" : "text-gray-500"}
          `}
            onClick={() => setIsAnnual(true)}
          >
            Yearly <span className="text-indigo-200">-20%</span>
          </button>
          <button
            className={`relative h-8 flex-1 rounded-full text-sm font-medium transition-colors
            ${isAnnual ? "text-gray-500" : "text-white"}
          `}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Pricing Plans - Display side by side */}
      <div className="mx-auto flex flex-wrap justify-center gap-6 lg:flex-nowrap">
        <PricingTab
          yearly={isAnnual}
          planName="Essential"
          price={{ yearly: 29, monthly: 35 }}
          planDescription="Basic plan with essential features."
          features={[
            "Unlimited placeholder texts",
            "Consectetur adipiscing elit",
            "Excepteur sint occaecat cupidatat",
            "Officia deserunt mollit anim",
          ]}
        />
        <PricingTab
          yearly={isAnnual}
          popular={true}
          planName="Perform"
          price={{ yearly: 49, monthly: 55 }}
          planDescription="Most popular plan with extra benefits."
          features={[
            "Unlimited placeholder texts",
            "Consectetur adipiscing elit",
            "Excepteur sint occaecat cupidatat",
            "Officia deserunt mollit anim",
            "Predefined chunks as necessary",
          ]}
        />
        <PricingTab
          yearly={isAnnual}
          planName="Enterprise"
          price={{ yearly: 79, monthly: 85 }}
          planDescription="Best for large teams with premium support."
          features={[
            "Unlimited placeholder texts",
            "Consectetur adipiscing elit",
            "Excepteur sint occaecat cupidatat",
            "Officia deserunt mollit anim",
            "Predefined chunks as necessary",
            "Free from repetition",
          ]}
        />
      </div>
    </div>
  );
};

export default PricingCard;
