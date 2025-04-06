import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/IMG_4303.jpg"
          alt="An image showing Erfan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Erfan</h1>
      <p>
        I blog about web developments - especially from likes Angular or React.
      </p>
    </section>
  );
}

export default Hero;
