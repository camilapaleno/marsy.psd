"use client"

import React from "react";
import Link from "next/link";
import HTMLFlipBook from "react-pageflip";
import Cover from "@/app/images/peekaboo-zine.jpg";
import PageOne from "@/app/images/peekaboo-zine-1.jpg";
import PageTwo from "@/app/images/peekaboo-zine-2.jpg";
import PageThree from "@/app/images/peekaboo-zine-3.jpg";
import PageFour from "@/app/images/peekaboo-zine-4.jpg";
import PageFive from "@/app/images/peekaboo-zine-5.jpg";
import PageSix from "@/app/images/peekaboo-zine-6.jpg";
import PageSeven from "@/app/images/peekaboo-zine-7.jpg";


function Peekaboo() {


  return (
    <>
      <section>
        <HTMLFlipBook 
          width={300}
          height={500}
          className="flip"
          showCover={true}
          drawShadow={false}

          style={{}}
          // children={{}}
          startPage={0}
          flippingTime={10}
          usePortrait={false}
          startZIndex={0}
          autoSize={false}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={0}
          showPageCorners={true}
          disableFlipByClick={true}
          size="fixed"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          onFlip={()=>{}}
          onChangeOrientation={()=>{}}
          onChangeState={()=>{}}
          >
          <div><img src={Cover.src}/></div>
          <div><img src={PageOne.src}/></div>
          <div><img src={PageTwo.src}/></div>
          <div><img src={PageThree.src}/></div>
          <div><img src={PageFour.src}/></div>
          <div><img src={PageFive.src}/></div>
          <div><img src={PageSix.src}/></div>
          <div><img src={PageSeven.src}/></div>

        </HTMLFlipBook>
      </section> 
      <Link className="close" href='/'>X</Link>
    </>
   
  );
}

export default Peekaboo;