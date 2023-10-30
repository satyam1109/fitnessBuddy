import React from "react";
import "./pt.css";

export default function Pt() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazor = async (amoun) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Failed to load razorpay payment ");
      return;
    }

    const options = {
      key: "rzp_test_Sn05EMq1AlB17g",
      currency: "INR",
      amount: amoun * 100,
      name: "Satyam Singh",
      description: "Thanks for Plan",
      image:
        "https://www.shutterstock.com/image-photo/personal-trainer-arms-crossed-gym-260nw-493318507.jpg",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("payment was Successful");
      },
      prefill: {
        name: "code with me",
      },
    };

    const paymentObject = new window.Razorpay(options);

    paymentObject.open();
  };

  return (

  
    <div>
    <div className="pt-one">
      <div className="pt-slogan">
        <h1 className="display-2" data-aos="slide-right" data-aos-duration="1200" data-aos-offset="100">
          Personalized Fitness for Exceptional Results
        </h1>
        <h4 className="px-5 pt-5" data-aos="slide-left" data-aos-duration="1200" data-aos-offset="100">
          No two individuals are the same, and that's why we offer highly
          personalized fitness programs. Our team takes the time to understand
          your unique goals and challenges, crafting a fitness plan that's
          tailored specifically for you. With us, exceptional results are the
          norm.
        </h4>
      </div>
    </div>

    <div className="subscription">
        <div className="flex justify-center">
          <h1 className="text-blue-900 text-2xl md:text-4xl lg:text-5xl my-5" data-aos="fade-up" data-aos-duration="1400" data-aos-offset="100">
            Unlock Your Potential And Strength
          </h1>
        </div>

        <div className="plans d-flex justify-content-center flex-column flex-lg-row flex-md-row">
          <div className="plan col-lg-3 col-md-3 col-sm-12 mx-3">
            <div className="my-3">
              <h1 className="display-4">4 WEEKS</h1>
            </div>

            <div className="">
              <p>Personalised Training Protocol</p>
              <p>Easy-To-Follow Workout Videos</p>
              <p>Personalised Meal Plans</p>
              <p>Supplement Guidence</p>
              <p>Online Chat Support</p>
              <p>Fitness Buddy membership</p>

              <div className="amount py-4 pt-5">
                <div className="">
                  <button className="btn btn-primary" onClick={()=>displayRazor(2499)}>Get Started</button>
                </div>
                <div className="" style={{ color: "rgb(79, 86, 183)" }}>
                  <h4>Rs. 2499</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="plan col-lg-3 col-md-3 col-sm-12 mx-3">
            <div className="my-3">
              <h1 className="display-4">12 WEEKS</h1>
            </div>

            <div className="">
              <p>Personalised Training Protocol</p>
              <p>Easy-To-Follow Workout Videos</p>
              <p>Personalised Meal Plans</p>
              <p>Supplement Guidence</p>
              <p>Online Chat Support</p>
              <p>Regular Progress Tracking</p>
              <p>Fitness Buddy membership</p>

              <div className="amount py-4">
                <div className="">
                  <button className="btn btn-primary" onClick={()=>displayRazor(3999)}>Get Started</button>
                </div>
                <div className="" style={{ color: "rgb(79, 86, 183)" }}>
                  <h4>Rs. 3999</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="plan col-lg-3 col-md-3 col-sm-12 mx-3">
            <div className="my-3">
              <h1 className="display-4">24 WEEKS</h1>
            </div>

            <div className="">
              <p>Personalised Training Protocol</p>
              <p>Easy-To-Follow Workout Videos</p>
              <p>Personalised Meal Plans</p>
              <p>Supplement Guidence</p>
              <p>Online Chat Support</p>
              <p>Regular Progress Tracking</p>
              <p>Fitness Buddy membership</p>
              <p>Secret Tips + Supplements Discounts</p>

              <div className="amount py-4">
                <div className="">
                  <button className="btn btn-primary" onClick={()=>displayRazor(5999)}>Get Started</button>
                </div>
                <div className="" style={{ color: "rgb(79, 86, 183)" }}>
                  <h4>Rs. 5999</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

