import React from "react";
import Title from "../components/common/Title";
import ConferenceInfo from "../components/conferneceinfo/ConferenceInfo";
import EmpolyeeInfo from "../components/conferneceinfo/EmpolyeeInfo";
import HeroSection from "../components/landingPage/HeroSection";

function confernce() {
  return (
    <div>
      <main className="px-5 md:px-20">
        <div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A atque nostrum nemo. Aspernatur saepe exercitationem asperiores rem repudiandae, esse enim nihil sapiente ratione harum sit incidunt explicabo cum, voluptatibus illum eum eius natus atque neque! Sunt optio ipsa ipsum dignissimos?</p>
          </div>
          <ConferenceInfo />
          <EmpolyeeInfo />
        </div>
      </main>
    </div>
  );
}

export default confernce;
