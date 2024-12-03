"use client";

import React from "react";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";
import { innovation_pipeline } from "@/data";

const Innovation = () => {
  return (
    <section id="innovation_pipeline" className="py-20">
      <h1 className="heading">
        Innovation Pipeline: Where
        <span className="text-purple"> Ideas </span>
        Take Flight
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <AnimatedTestimonials items={innovation_pipeline} />
      </div>
    </section>
  );
};

export default Innovation;
