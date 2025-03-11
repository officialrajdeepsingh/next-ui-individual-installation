"use client";

import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <Button
            className="overflow-hidden flex items-center justify-center flex-row border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
            endContent={
              <Icon
                className="flex-none outline-none [&>path]:stroke-[2]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
            variant="bordered"
          >
            New onboarding experience
          </Button>
          <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.3] tracking-tighter sm:text-[68px]">
            <div className="bg-hero-section-title bg-clip-text ">
              Easiest way to <br /> power global teams.
            </div>
          </div>
          <p className="text-center font-normal leading-7  sm:w-[466px] sm:text-[18px]">
            Acme makes running global teams simple. HR, Payroll, International
            Employment, contractor management and more.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              className="h-10 w-[163px] bg-black text-white dark:bg-white dark:text-black px-[16px] py-[10px] text-small font-medium leading-5"
              radius="full"
            >
              Get Started
            </Button>
            <Button
              className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              See our plans
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
