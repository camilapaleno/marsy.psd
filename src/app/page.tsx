import Image from "next/image";
import hero from "@/app/images/hero-black.jpg";
import who from "@/app/images/who.jpg";
import teeth from "@/app/images/teeth.jpg";
import arro from "@/app/images/arro.png";
import first from "@/app/images/first-zine.jpg";
import peekaboo from "@/app/images/peekaboo-zine.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero" style={{backgroundImage: "url(" + hero.src + ")"}}>
        <h1>New</h1>
        <img src={arro.src}/>
      </section>
      <section className="peekaboo" style={{backgroundImage: "url(" + who.src + ")"}}>
        <Link href='projects/first-zine'><img src={first.src}/></Link>
      </section>
      <section className="first" style={{backgroundImage: "url(" + teeth.src + ")"}}>
        <Link href='#'><img src={peekaboo.src}/></Link>
      </section>
    </>
  );
}
