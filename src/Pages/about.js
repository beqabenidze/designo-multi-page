import React from "react";
import "../GlobalCss/about.css";
import Header from "../components/header";
import AboutUs from "../components/about/about-us";
import talentImg1 from "../assets/about/mobile/image-world-class-talent.jpg";
import talentImg2 from "../assets/about/tablet/image-world-class-talent.jpg";
import talentImg3 from "../assets/about/desktop/image-world-class-talent.jpg";
import dealImg1 from "../assets/about/mobile/image-real-deal.jpg";
import dealImg2 from "../assets/about/tablet/image-real-deal.jpg";
import dealImg3 from "../assets/about/desktop/image-real-deal.jpg";
import AboutStoryBox from "../components/about/about-story-box";
import Countries from "../components/countries";
import Touch from "../components/touch";
import Footer from "../components/footer";
import MenuPop from "../components/menu-pop";

function About() {
  return (
    <div className="about">
      <Header />
      <MenuPop />
      <AboutUs />
      <AboutStoryBox
        Imgmobile={talentImg1}
        Imgtablet={talentImg2}
        Imgdesktop={talentImg3}
        topic="World-class talent"
        text1="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
        text2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
      />
      <Countries />
      <AboutStoryBox
        Imgmobile={dealImg1}
        Imgtablet={dealImg2}
        Imgdesktop={dealImg3}
        topic="The real deal"
        text1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
        Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        text2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
      />
      <Touch />
      <Footer />
    </div>
  );
}

export default About;
