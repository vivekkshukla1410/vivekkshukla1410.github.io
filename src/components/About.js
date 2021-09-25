import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import { Image } from "semantic-ui-react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="section-div">
        <section id="about" className="content">
          <div className="">
            {/* <div centered columns={6} className="profile-pic-container">
              <Image
                className="profile-pic"
                circular
                src={process.env.PUBLIC_URL + "/images/Photo_1.jpg"}
                alt="profilePic"
              />
            </div> */}
            <div className="about-container">
              <span className="heading color1">About Me</span>
              <p className="normal-text color2">{resumeData.aboutme}</p>

              <div className="about-content">
                <div className="about-details">
                  <h2 className="sub-heading color1">Contact Details</h2>
                  <p className="about-text normal-text color2">
                    <span className="color1">
                      Name : <span className="color2">{resumeData.name}</span>
                    </span>
                    <span></span>
                    <br />
                    <span className="color1">
                      Email :{" "}
                      <span className="color2"> {resumeData.email}</span>
                    </span>
                    <br />
                    <span className="color1">
                      Skype :{" "}
                      <span className="color2">{resumeData.skypeid}</span>
                    </span>
                    <br />
                    <span>{resumeData.linkedin}</span>
                  </p>
                </div>
                <div className="cv-container">
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    outlined
                    color="light"
                    size="large"
                  >
                    <Button
                      href={resumeData.viewResume}
                      target="_blank"
                      rel="noReferrer"
                    >
                      View My Resume
                    </Button>
                    <Button href={resumeData.downloadResume}>Download</Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
