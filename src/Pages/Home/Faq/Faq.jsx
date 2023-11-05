import Accordions from './Accordions';

const Faq = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[50px] lg:pb-[90px] px-8 md:px-14">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <Accordions></Accordions>
      </div>
    </section>
  );
};

export default Faq;
