const WhyChoose = () => {
  const whyChooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Ethical Services",
      text: `As a part of the award-winning Rayna Group, we provide exceptional property services with the highest ethical standards.`,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Outstanding Options",
      text: `Our extensive portfolio caters to every budget and lifestyle, from high-rise apartments with far-reaching views to luxury townhouses and large villas.`,
    },
    {
      id: 3,
      icon: "Trusted Financial Advice",
      title: "Financing Made Easy",
      text: `Our specialist team strikes the best deal and offers expert guidance in raising finance for your dream property.      `,
    },
  ];
  return (
    <>
      {whyChooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className="why_chose_us home7">
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
