import React, { useEffect } from "react";
import { gsap } from "gsap";
import './pages.css'
import "./Team.css";

export default function Supplements() {

  useEffect(() => {
    const sections = gsap.utils.toArray(".section"),
      images = gsap.utils.toArray(".bg"),
      headings = gsap.utils.toArray(".section-heading"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      wrap = gsap.utils.wrap(0, sections.length),
      animating = { value: false },
      currentIndex = { value: -1 };

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index);
      animating.value = true;
      const fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => (animating.value = false),
        });

      if (currentIndex.value >= 0) {
        gsap.set(sections[currentIndex.value], { zIndex: 0 });
        tl.to(images[currentIndex.value], { yPercent: -15 * dFactor }).set(
          sections[currentIndex.value],
          { autoAlpha: 0 }
        );
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
          headings[index],
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
          },
          0.2
        );

      currentIndex.value = index;
    }

    const wheelHandler = (e) => {
      if (!animating.value) {
        if (e.deltaY > 0) {
          gotoSection(currentIndex.value + 1, 1);
        } else {
          gotoSection(currentIndex.value - 1, -1);
        }
      }
    };

    document.addEventListener("wheel", wheelHandler);

    gotoSection(0, 1);

    return () => {
      document.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (

    <div className="App">


      <div className='supp_page'>


        <section className="section home">
          <div className="outer">
            <div className="inner">
              <div className="bg one">
                <h2 className="section-heading">Supplements</h2>
              </div>
            </div>
          </div>
        </section>

      </div>

      <u><h1>Most Useful Supplements for Fitness : </h1></u>

      <a href="https://www.medicalnewstoday.com/articles/263371" target="_main">
        <section className="section first">
          <div className="outer">
            <div className="inner">
              <div className="bg one">
                <h2 className="section-heading">Whey Proteins</h2>
              </div>
            </div>
          </div>
        </section></a>

      <a href="https://my.clevelandclinic.org/health/treatments/17674-creatine" target="_main">
        <section className="section second">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Creatine</h2>
              </div>
            </div>
          </div>
        </section></a>

      <a href="https://www.healthline.com/nutrition/bcaa" target="_main">
        <section className="section third">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Branch Chain Amino Acids "BCAA"</h2>

              </div>
            </div>
          </div>
        </section></a>

      <a href="https://www.healthline.com/nutrition/beta-alanine-101" target="_main">
        <section className="section fourth">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Pre Workouts</h2>
              </div>
            </div>
          </div>
        </section></a>

      <a href="https://www.hsph.harvard.edu/nutritionsource/multivitamin/" target="_main">
        <section className="section fifth">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Multivitamins</h2>
              </div>
            </div>
          </div>
        </section></a>

      <a href="https://www.hsph.harvard.edu/nutritionsource/vitamin-d/" target="_main">
        <section className="section sixth">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Vitamin D3</h2>
              </div>
            </div>
          </div>
        </section></a>

      <a href="https://www.healthline.com/nutrition/benefits-of-fish-oil" target="_main">
        <section className="section seven">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Fish Oils</h2>
              </div>
            </div>
          </div>
        </section></a>
    </div>
  );

}
