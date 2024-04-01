"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [actualDay, setActualDay] = useState("Cheking Date & Time...");
  const [actualTime, setActualTime] = useState("");

  useEffect(() => {
    const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
    const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
      new Date()
    );
    setActualTime(formattedTime);
    setTimeout(() => {
      const options = { weekday: "short", month: "short", day: "numeric" };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        new Date()
      );
      setActualDay(formattedDate);
    }, 3000);
  }, []);

  return (
    <header className="fixed w-full bg-blue-300 py-1 bg-opacity-50">
      <nav className="flex items-center justify-between">
        <section className="ps-5 flex items-center">
          <Image
            src="/applelogo.png"
            width={26}
            height={26}
            alt="Apple Logo"
            className="cursor-pointer hover:text-white"
          />
          <Link href="https://www.happycare.co.za" target="_blank">
            <h1 className="font-extrabold ps-5 cursor-pointer hover:text-white">
              Themba
            </h1>
          </Link>
          <h2 className="ps-5 cursor-pointer hover:text-white">File</h2>
          <h3 className="ps-5 cursor-pointer hover:text-white">Edit</h3>
          <h4 className="ps-5 cursor-pointer hover:text-white">View</h4>
          <h5 className="ps-5 cursor-pointer hover:text-white">Go</h5>
          <h6 className="ps-5 cursor-pointer hover:text-white">Window</h6>
          <Link href="https://wa.me/+27769360246" target="_blank">
            <p className="ps-5 cursor-pointer hover:text-white">Help</p>
          </Link>
        </section>
        <section className="px-5 flex items-center">
          <Image
            src="/battery.png"
            width={26}
            height={26}
            alt="Battery Icon"
            className="cursor-pointer hover:text-white"
          />
          <Image
            src="/wifi.png"
            width={40}
            height={40}
            alt="Wifi Icon"
            className="ps-5 cursor-pointer hover:text-white"
          />
          <Image
            src="/search.webp"
            width={40}
            height={40}
            alt="Search Icon"
            className="ps-5 cursor-pointer hover:text-white"
          />
          <Image
            src="/controlcentre.webp"
            width={40}
            height={40}
            alt=" Icon"
            className="ps-5 cursor-pointer hover:text-white"
          />
          <p className="ps-5 cursor-pointer hover:text-white">{actualDay}</p>
          <p className="ps-5 cursor-pointer hover:text-white">{actualTime}</p>
        </section>
      </nav>
    </header>
  );
}
