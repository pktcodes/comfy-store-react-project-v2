import { Link } from "react-router-dom";

import heroImg1 from "../assets/hero1.webp";
import heroImg2 from "../assets/hero2.webp";
import heroImg3 from "../assets/hero3.webp";
import heroImg4 from "../assets/hero4.webp";

const carouselImages = [heroImg1, heroImg2, heroImg3, heroImg4];

const Hero = () => {
  return (
    <section className="grid items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Whether you are looking for a sofa, a bed, a dining table, or anything
          in between, we have something for you. Our furniture is designed to be
          comfortable, durable, and stylish, and we offer a variety of colors,
          materials, and sizes to suit your preferences.
        </p>
        <Link to="products" className="btn btn-primary mt-10 uppercase">
          our products
        </Link>
      </div>
      <div className="carousel-center hidden h-[28rem] space-x-4  rounded-box bg-neutral p-4 lg:carousel">
        {carouselImages.map((image) => {
          return (
            <article key={image} className="carousel-item">
              <img
                src={image}
                className="h-full w-80 rounded-box object-cover"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
