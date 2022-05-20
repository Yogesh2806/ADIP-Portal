import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import extension from "../ucardPDF/Medical.pdf";
import final2021 from "../ucardPDF/final2021.xlsx";
import report from "../ucardPDF/report.pdf";
import { Link } from "react-router-dom";

const InfoPage = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="infoSection">
            <div className="infoPage">
              <div className="infoHeading">
                <Typography variant="h4" gutterBottom>
                  Personal Details
                </Typography>
              </div>
              <div className="infoDetails">
                <img
                  src={post.photo}
                  alt="avatar"
                  width="120rem"
                  height="120rem"
                  style={{ borderRadius: "0.2rem" }}
                />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">First Name</Typography>
                    <Typography variant="h6">Last Name</Typography>
                    <Typography variant="h6">Gender</Typography>
                    <Typography variant="h6">DOB</Typography>
                    <Typography variant="h6">Care Taker</Typography>
                    <Typography variant="h6">Contact</Typography>
                    <Typography variant="h6">Realtion Status</Typography>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="h6">City</Typography>
                    <Typography variant="h6">State</Typography>
                    <Typography variant="h6">Zip</Typography>
                    <Typography variant="h6">Speak English</Typography>
                    <Typography variant="h6">Lang</Typography>
                    <Typography variant="h6">More Than One Name</Typography>
                    <Typography variant="h6">Citizen</Typography>
                    <Typography variant="h6">Gov Scheme</Typography>
                    <Typography variant="h6">Gov Position</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">{post.firstName}</Typography>
                    <Typography variant="h6">{post.lastName}</Typography>
                    <Typography variant="h6">{post.gender}</Typography>
                    <Typography variant="h6">{post.dob}</Typography>
                    <Typography variant="h6">{post.guardian}</Typography>
                    <Typography variant="h6">{post.contact}</Typography>
                    <Typography variant="h6">{post.realtionStatus}</Typography>
                    <Typography variant="h6">
                      {post.addressLine1},{post.addressLine2}
                    </Typography>
                    <Typography variant="h6">{post.city}</Typography>
                    <Typography variant="h6">{post.state}</Typography>
                    <Typography variant="h6">{post.zip}</Typography>
                    <Typography variant="h6">{post.speakEnglish}</Typography>
                    <Typography variant="h6">{post.lang}</Typography>
                    <Typography variant="h6">{post.moreThanOnename}</Typography>
                    <Typography variant="h6">{post.citizen}</Typography>
                    <Typography variant="h6">{post.govScheme}</Typography>
                    <Typography variant="h6">{post.govPosition}</Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className="infoPage">
              <div className="infoHeading">
                <Typography variant="h4" gutterBottom>
                  List of Benefits By Implemention Agency
                </Typography>
              </div>
              <div className="infoDetails">
                <Grid container spacing={3}>
                  <Grid>
                    <Typography variant="h6">
                      Scholarship schemes for students with disabilities.
                    </Typography>
                    <Typography variant="h6">
                      Concession in Railway and Air fare
                    </Typography>
                    <Typography variant="h6">Rebate in income tax.</Typography>
                    <Typography variant="h6">
                      Reservation in government jobs.
                    </Typography>
                    <Typography variant="h6">
                      Free travel in state transport buses.{" "}
                    </Typography>
                    <Typography variant="h6">
                      Loan for starting own business.
                    </Typography>
                    <Typography variant="h6">
                      Subsidized prosthetic aids and assistive devices (like
                      wheelchairs).{" "}
                    </Typography>
                    <Typography variant="h6">
                      Group insurance for government employees with
                      disabilities.{" "}
                    </Typography>
                    <Typography variant="h6">
                      Group insurance for government employees with
                      disabilities.{" "}
                    </Typography>
                    <Typography variant="h6">
                      Other Schemes by Government and state government specific
                      schemes.
                    </Typography>
                    <Typography variant="h6">
                      Disability Certificate (By The Government of India or
                      State Governments)
                    </Typography>
                    <Typography variant="h6">
                      Unique Disability ID Card UDID (Universal ID in common
                      centralized format for Disabled people By Government of
                      India)
                    </Typography>
                    <Typography variant="h6">
                      Nearest place alloted for frequent enquireies and support
                      - Mogappair
                    </Typography>
                    <Typography variant="h6">
                      Rs. 2,000 to 4,000 will be credited to account based on
                      severity.
                    </Typography>
                    <div className="downloadbuttons">
                      <a
                        className="downloadLink"
                        href={extension}
                        download
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download Eligibility
                      </a>
                      <a
                        className="downloadLink"
                        href={final2021}
                        download
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download 2021 List
                      </a>
                      <a
                        className="downloadLink"
                        href={report}
                        download
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download Check Report
                      </a>
                    </div>
                  </Grid>
                </Grid>
                <div className="nationalSection">
                  <h3>
                    To Get National support Requirements and Requests
                    <Link to="nationalList">Click Here</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default InfoPage;
