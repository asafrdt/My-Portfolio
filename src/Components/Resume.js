import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3 style={{ color: "white" }}>{education.school}</h3>
            <p className="info">{education.degree}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3 style={{ color: "white" }}>{work.company}</h3>
            <p className="info">
              {work.title}
              <span style={{ color: "white" }}>&bull;</span>{" "}
              <em className="date">{work.years}</em>
            </p>
          </div>
        );
      });
      var military = this.props.data.military.map(function (military) {
        return (
          <div key={military.company}>
            
            &bull; Hebrew - Native
            <br /> &bull; English - Fluent
            
          </div>
        );
      });
      // var military1 = this.props.data.military1.map(function (military1) {
      //   return (
      //     <div>
      //       <br />
      //       <p className="info">
      //         {military1.title1}
      //         <span style={{ color: "white" }}>&bull;</span>{" "}
      //         <em className="date">{military1.years1}</em>
      //       </p>
      //       &bull; Sergeant in a combat squad.
      //       <br /> &bull; Participated in “Protective Edge” operation.
      //     </div>
      //   );
      // });
      // var skills = this.props.data.skills.map(function (skills) {
      //   var className = "bar-expand " + skills.name.toLowerCase();
      //   return (
      //     <li key={skills.name}>
      //       <span style={{ width: skills.level }} className={className}></span>
      //       <em>{skills.name}</em>
      //     </li>
      //   );
      // });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span style={{ color: "white" }}>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <span style={{ color: "white" }}>
                  {education}
                  &bull; Major: Digital Innovation &bull; Expected
                  graduation - 2026
                 
                  <br /> &bull; Skills: SQL, Excel, Tableau, MS Project, Monday.com, Python, Java, C++
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span style={{ color: "white" }}>Social Activities</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <span style={{ color: "white" }}>
              {work}
            </span>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span style={{ color: "white" }}>Languages</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <span style={{ color: "white" }}>{military}</span>
          </div>
        </div>
        {/* 
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}

export default Resume;
