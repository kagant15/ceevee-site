import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      

      <div className="row item">
        <div className="twelve columns">
          <h3>Strategic Business Systems (SBS)</h3>
          <p className="info">
            Senior Software Enginner
           {/*} <span>&bull;</span>
            <em className="date">July 2016 - Present</em> */}
          </p>

          <p>
            
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Sotera Defense Solutions</h3>
          <p className="info">
            Software Engineer
           {/*} <span>&bull;</span>
            <em className="date">January 2013 - Jan 2014 & April 2015 - July 2016</em> */}
          </p>

          <p>
            <ul>
              <li>
                Designed and developed multiple web based visualization tools for viewing the results of big data analytics. Used React, Ember, D3, and native Javascript.
              </li>
              <li>
                Supported Data Scientists in scaling their data analytic algorithms across the cloud.
              </li>
              <li>
                Wrote both Scala and Javascript code for multiple projects.
              </li>
              <li>
                Investigated new and increasingly better ways of developing single page web apps with D3+React.
              </li>
            </ul>
          </p>

        </div>
      </div>


      <div className="row item">
        <div className="twelve columns">
          <h3>AgileX Technologies</h3>
          <p className="info">
            Software Engineer
           {/*} <span>&bull;</span>
            <em className="date">From - To</em> */}
          </p>
            <ul>
              <li>
                Created a single page web application used by over 1000+ call center agents for the United States Postal Service.
              </li>
              <li>
                Developed and designed a cross-browser responsive hybrid desktop/mobile SPA using Twitter Bootstrap, Angular, jQuery, and HTML5.
              </li>
              <li>
                Worked directly alongside the customer to interpret their requirements into functional tasks that could be completed with high quality and within an acceptable timeline.
              </li>
              <li>
                Regularly demo’d my work to clients to show promised deliverables, and insure customer satisfaction.
              </li>
            </ul>
          <p>

          </p>
        </div>
      </div>


    </div>


  </div>
);

export default Work;
