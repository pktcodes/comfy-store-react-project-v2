const About = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-x-6">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title bg-primary text-4xl font-bold tracking-widest text-primary-content">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
        Welcome to Comfy Store, the online destination for quality furniture at
        affordable prices. Whether you are looking for a sofa, a bed, a dining
        table, or anything in between, we have something for you. Our furniture
        is designed to be comfortable, durable, and stylish, and we offer a
        variety of colors, materials, and sizes to suit your preferences. You
        can browse our catalog, read customer reviews, and place your order with
        just a few clicks. We also provide fast and free delivery, easy returns,
        and excellent customer service. At Comfy Store, we want you to feel at
        home with our furniture. Shop with us today and discover the difference.
      </p>
    </>
  );
};

export default About;
