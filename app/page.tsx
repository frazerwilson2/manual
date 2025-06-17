'use client';
import Image from "next/image";
import { Quiz } from "./components/quiz";
import { Button } from "./components/button";
import { useQuizContext } from "./context";

export default function Home() {
  const {showQuiz, setShowQuiz} = useQuizContext()

  return (
    <main>
      {showQuiz ? <Quiz /> : 
      (
        <>
          <section className="bg-secondary hero-banner h-[750px]">
            <div className="container mx-auto px-6 md:px-0 h-full flex flex-col justify-center">
              <div className="md:w-[50%] md:max-w-[450px]">
                <h1 className="text-lg md:text-xl text-main">Be good<br/> to yourself</h1>
                <p className="text-md text-main my-[20px] mb-[40px]">We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
                <Button onClick={() => setShowQuiz(true)} label="Take the Quiz" />
              </div>
            </div>
          </section>
          <h2 className="container mx-auto text-center text-h2 text-main my-[70px]">What we can help with</h2>

        {[
          { 
            title: "Hair loss", 
            heading: () => <>Hair loss needn’t be irreversible.<br/>We can help!</>,
            body: 'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.',
            image: "/img1.jpg" 
          },
          { 
            title: "Erecetile dysfunction", 
            heading: ()=>`Erections can be a tricky thing. But no need to feel down!`, 
            body: 'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.',
            image: "/img2.jpg" 
          },
        ].map((item, index) => (
            <section key={index} className="container mx-auto px-6 md:px-36 grid md:grid-cols-2 md:gap-28 mb-[180px]">
              <div className={`flex flex-col items-center ${index % 2 == 0 ? 'md:col-start-1':'md:col-start-2'} md:row-start-1`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-auto object-cover z-10"
                  width={450}
                  height={445}
                />
              </div>

              <div className={`flex flex-col justify-center ${index % 2 == 0 ? 'md:col-start-2':'md:col-start-1'} md:row-start-1`}>
                <span className={`absolute text-[28.125rem] text-[#F3F7F4] ${index % 2 == 0 ? 'left-[40%]':'right-[40%]'} hidden md:block`}>0{index + 1}</span>
                <div className="z-10">
                  <span className="text-sm uppercase text-grandfather font-semibold">{item.title}</span>
                  <h3 className="text-h3 text-main mb-[25px]">{item.heading()}</h3>
                  <p className="text-md text-main font-light">{item.body}</p>
                </div>
              </div>
            </section>
          ))}
        </>
      )}
    </main>
  );
}
