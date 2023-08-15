import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "80,123",
      meta: "Customers to date",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "$74 Billion",
      meta: "In home sales",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "$468 Million",
      meta: "In Savings",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <p className="large">
            At Rayna Properties, we proudly stand as one of the leading and most reliable property experts in the United Arab Emirates (UAE). With a deep-rooted commitment to excellence, we have established ourselves as a trusted name in the realm of real estate, offering unparalleled property services to meet the dynamic needs of our diverse clientele.
          </p>
          <p>
            Our journey began with a vision - a vision to redefine the way property transactions and services are approached in the UAE. Guided by this vision, our team of dedicated professionals brings forth a wealth of local experience and expertise, combined with an extensive network of connections that span the length and breadth of the UAE's real estate landscape.
          </p>
          <p>
            As property experts, we understand that the world of real estate is constantly evolving, presenting both opportunities and challenges for buyers, sellers, investors, and renters alike. That's why we have made it our mission to provide progressive and innovative property solutions that empower our clients to make informed decisions and navigate the ever-changing market with confidence.
          </p>
          <p>
            What sets us apart is our unwavering commitment to integrity, transparency, and client satisfaction. We believe in fostering lasting relationships built on trust, and we take pride in the fact that many of our clients return to us time and again, while also referring their friends, family, and colleagues.
          </p>
          <p>
            Our range of services is as diverse as the UAE itself. Whether you're a first-time homebuyer looking for your dream property, an investor seeking lucrative opportunities, or a landlord in search of reliable property management, our dedicated team is here to guide you every step of the way. From property valuations and market insights to negotiations and legal processes, we've got you covered.
          </p>
          <p>
            At Rayna Properties, we don't just assist in property transactions; we create personalized experiences that cater to your unique needs and aspirations. We are more than a company – we are your partners in achieving real estate success.
          </p>
          <p>
            Thank you for considering us as your trusted property experts. We invite you to connect with our team and experience the difference that exceptional local experience, unwavering dedication, and profound industry connections can make in your property journey.
          </p>
          <p>
            Here's to a future of prosperous real estate ventures together.
          </p>

          {/* <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <img
            className="img-fluid w100"
            src="assets/images/about/1.jpg"
            alt="1.jpg"
          />
          <PopupVideo />
        </div>
      </div>
    </>
  );
};

export default OurMission;
