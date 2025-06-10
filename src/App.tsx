import { useEffect, useState } from "react";
import FlipCard from "./components/FlipCard";
import "./App.css";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";


  const countToDate = 10 * 24 * 60 * 60 * 1000;
  const launchDate = new Date(Date.now() + countToDate).getTime();

const App = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [prevTime, setPrevTime] = useState(timeLeft);


  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = launchDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevTime(timeLeft);
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);


  return (
    <>
      <main className="flex flex-col justify-center items-center mx-auto w-full min-h-screen text-center">
        <section className="flex flex-col justify-center items-center h-4/10 my-auto max-w-4xl px-4">
          <h1 className="uppercase text-2xl md:text-3xl font-semibold tracking-[0.2em]">
            We're launching soon
          </h1>
          <div className="w-full flex justify-center gap-x-2 sm:gap-x-4 mt-12">
            <FlipCard
              label="Days"
              value={String(timeLeft.days).padStart(2, "0")}
              previousValue={String(prevTime.days).padStart(2, "0")}
            />
            <FlipCard
              label="Hours"
              value={String(timeLeft.hours).padStart(2, "0")}
              previousValue={String(prevTime.hours).padStart(2, "0")}
            />
            <FlipCard
              label="Minutes"
              value={String(timeLeft.minutes).padStart(2, "0")}
              previousValue={String(prevTime.minutes).padStart(2, "0")}
            />
            <FlipCard
              label="Seconds"
              value={String(timeLeft.seconds).padStart(2, "0")}
              previousValue={String(prevTime.seconds).padStart(2, "0")}
            />
          </div>
        </section>
        <footer className="bg-[url(/pattern-hills.svg)] bg-no-repeat bg-cover bg-bottom pt-12 md:pt-32 pb-6 mt-auto h-2/10 w-full space-y-4 text-center">
          <div className="flex gap-x-6 items-center justify-center">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              {" "}
              <IoLogoFacebook className="text-grayish-blue hover:text-soft-red text-3xl" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              {" "}
              <FaPinterest className="text-grayish-blue hover:text-soft-red text-3xl" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              {" "}
              <FaInstagram className="text-grayish-blue hover:text-soft-red text-3xl" />
            </a>
          </div>
          <div className="text-grayish-blue">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noopener"
              className="underline text-soft-red"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="#" className="underline text-soft-red">
              Onyinye Oguocha
            </a>
            .
          </div>
        </footer>
      </main>
    </>
  );
};

export default App;
