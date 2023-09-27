import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { BackgroundShapeBottom, BackgroundShapeTop } from "./BackgroundShape";
import data from "../data/CAD-design-data.json";

export default function ContentSection() {
  const iconComponents = {
    CloudArrowUpIcon: CloudArrowUpIcon,
    LockClosedIcon: LockClosedIcon,
    ServerIcon: ServerIcon,
  };

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <BackgroundShapeTop />
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Lorem ipsum
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {data.section1.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {data.section1.subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={data.section1.imageSrc}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>{data.section2.content}</p>

              {/* Features */}
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {data.section2.features.map((feature, index) => (
                  <li key={index} className="flex gap-x-3">
                    {iconComponents[feature.icon] &&
                      React.createElement(iconComponents[feature.icon], {
                        className: "mt-1 h-5 w-5 flex-none text-indigo-600",
                        "aria-hidden": true,
                      })}
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Feature {index + 1}
                      </strong>{" "}
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8">{data.section2.additionalContent}</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                {data.section3.title}
              </h2>
              <p className="mt-6">{data.section3.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
