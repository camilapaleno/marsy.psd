"use client"

import React from "react";
import Link from "next/link";
import HTMLFlipBook from "react-pageflip";
import PageOne from "@/app/images/first-zine.jpg";
import PageTwo from "@/app/images/hero-black.jpg";
import PageThree from "@/app/images/hero-blue.jpg";
import PageFour from "@/app/images/teeth.jpg";

function First() {


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
          <div><img src={PageOne.src}/></div>
          <div><img src={PageTwo.src}/></div>
          <div><img src={PageThree.src}/></div>
          <div><img src={PageFour.src}/></div>
          <div><img src={PageOne.src}/></div>
          <div><img src={PageTwo.src}/></div>
          <div><img src={PageThree.src}/></div>
          <div><img src={PageFour.src}/></div>
        </HTMLFlipBook>
      </section> 
      <Link className="close" href='/'>X</Link>
    </>
   
  );
}

export default First;