"use client";

import React, { useState } from "react";

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
  return (
    <div className={`h-full w-full max-w-sm ${props.popular ? "dark" : ""}`}>
      
      <div className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow dark:border-slate-900 dark:bg-slate-900">
        {props.popular && (
          <div className="absolute right-0 top-0 -mt-4 mr-6">
            <div className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="mb-1 font-semibold text-slate-900 dark:text-slate-200">
            {props.planName}
          </div>
          <div className="mb-2 inline-flex items-baseline">
            <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">
              $
            </span>
            <span className="text-4xl font-bold text-slate-900 dark:text-slate-200">
              {props.yearly ? props.price.yearly : props.price.monthly}
            </span>
            <span className="font-medium text-slate-500">/mo</span>
          </div>
          <div className="mb-5 text-sm text-slate-500">
            {props.planDescription}
          </div>
          <a
            className="inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-600"
            href="#0"
          >
            Purchase Plan
          </a>
        </div>
        <div className="mb-3 font-medium text-slate-900 dark:text-slate-200">
          Includes:
        </div>
        <ul className="grow space-y-3 text-sm text-slate-600 dark:text-slate-400">
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

  return (
    <div className="w-full px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">See Our Pricing plans!</h2>
        <p className="text-gray-400 mb-12">
          Experience next-level betting analytics with our AI-driven platform.
        </p>
      </div>
      {/* Pricing Toggle */}
      <div className="m-auto mb-8 flex max-w-[14rem] justify-center">
        <div className="relative flex w-full rounded-full bg-white p-1 dark:bg-slate-900">
          <span
            className="pointer-events-none absolute inset-0 m-1"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 w-1/2 transform rounded-full bg-indigo-500 shadow transition-transform ${
                isAnnual ? "translate-x-0" : "translate-x-full"
              }`}
            ></span>
          </span>
          <button
            className={`relative h-8 flex-1 rounded-full text-sm font-medium transition-colors ${
              isAnnual ? "text-white" : "text-slate-500"
            }`}
            onClick={() => setIsAnnual(true)}
          >
            Yearly <span className="text-indigo-200">-20%</span>
          </button>
          <button
            className={`relative h-8 flex-1 rounded-full text-sm font-medium transition-colors ${
              isAnnual ? "text-slate-500" : "text-white"
            }`}
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
