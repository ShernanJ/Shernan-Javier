import React from "react";
import background from "./background1.jpg";

const Resume = (props) => {
  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n<!--\nspan.cls_023{font-family:"Calibri",serif;font-size:11.1px;color:rgb(51,102,255);font-weight:normal;font-style:normal;text-decoration: underline}\ndiv.cls_023{font-family:"Calibri",serif;font-size:11.1px;color:rgb(51,102,255);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_002{font-family:"Calibri",serif;font-size:11.1px;color:rgb(51,102,255);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_002{font-family:"Calibri",serif;font-size:11.1px;color:rgb(51,102,255);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_003{font-family:"Segoe UI Bold",serif;font-size:29.9px;color:rgb(77,77,77);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_003{font-family:"Segoe UI Bold",serif;font-size:29.9px;color:rgb(77,77,77);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_004{font-family:"Calibri",serif;font-size:11.1px;color:rgb(77,77,77);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_004{font-family:"Calibri",serif;font-size:11.1px;color:rgb(77,77,77);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_005{font-family:"Segoe UI",serif;font-size:14.0px;color:rgb(51,102,255);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_005{font-family:"Segoe UI",serif;font-size:14.0px;color:rgb(51,102,255);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_007{font-family:"Segoe UI Semibold",serif;font-size:16.1px;color:rgb(51,102,255);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_007{font-family:"Segoe UI Semibold",serif;font-size:16.1px;color:rgb(51,102,255);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_006{font-family:"Segoe UI Bold",serif;font-size:11.1px;color:rgb(77,77,77);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_006{font-family:"Segoe UI Bold",serif;font-size:11.1px;color:rgb(77,77,77);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_015{font-family:"Segoe UI Semibold",serif;font-size:17.3px;color:rgb(77,77,77);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_015{font-family:"Segoe UI Semibold",serif;font-size:17.3px;color:rgb(77,77,77);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_010{font-family:"Segoe UI",serif;font-size:11.1px;color:rgb(77,77,77);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_010{font-family:"Segoe UI",serif;font-size:11.1px;color:rgb(77,77,77);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_012{font-family:"Segoe UI Semibold",serif;font-size:11.1px;color:rgb(77,77,77);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_012{font-family:"Segoe UI Semibold",serif;font-size:11.1px;color:rgb(77,77,77);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_016{font-family:"Segoe UI",serif;font-size:10.1px;color:rgb(51,102,255);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_016{font-family:"Segoe UI",serif;font-size:10.1px;color:rgb(51,102,255);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_008{font-family:"Calibri Bold",serif;font-size:11.1px;color:rgb(95,95,95);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_008{font-family:"Calibri Bold",serif;font-size:11.1px;color:rgb(95,95,95);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_009{font-family:"Calibri",serif;font-size:11.1px;color:rgb(95,95,95);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_009{font-family:"Calibri",serif;font-size:11.1px;color:rgb(95,95,95);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_011{font-family:Times,serif;font-size:11.1px;color:rgb(77,77,77);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_011{font-family:Times,serif;font-size:11.1px;color:rgb(77,77,77);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_013{font-family:"Segoe UI Bold",serif;font-size:10.1px;color:rgb(51,102,255);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_013{font-family:"Segoe UI Bold",serif;font-size:10.1px;color:rgb(51,102,255);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_014{font-family:Arial,serif;font-size:11.1px;color:rgb(95,95,95);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_014{font-family:Arial,serif;font-size:11.1px;color:rgb(95,95,95);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_018{font-family:Arial,serif;font-size:11.1px;color:rgb(77,77,77);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_018{font-family:Arial,serif;font-size:11.1px;color:rgb(77,77,77);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_017{font-family:"Calibri Bold",serif;font-size:11.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_017{font-family:"Calibri Bold",serif;font-size:11.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_019{font-family:Times,serif;font-size:10.0px;color:rgb(77,77,77);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_019{font-family:Times,serif;font-size:10.0px;color:rgb(77,77,77);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_020{font-family:"Segoe UI Bold",serif;font-size:11.1px;color:rgb(51,102,255);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_020{font-family:"Segoe UI Bold",serif;font-size:11.1px;color:rgb(51,102,255);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_021{font-family:"Segoe UI",serif;font-size:11.1px;color:rgb(51,102,255);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_021{font-family:"Segoe UI",serif;font-size:11.1px;color:rgb(51,102,255);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_022{font-family:Times,serif;font-size:11.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_022{font-family:Times,serif;font-size:11.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\n-->\n',
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          marginLeft: "-306px",
          top: 0,
          width: 612,
          height: 792,
          borderStyle: "outset",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0 }}>
          <img src={background} width={612} height={792} alt="background" />
        </div>
        <div
          style={{ position: "absolute", left: "457.48px", top: "27.44px" }}
          className="cls_023"
        >
          <span className="cls_023">LinkedIn</span>
          <span className="cls_002"> • </span>
          <span className="cls_023">GitHub</span>
          <span className="cls_002"> • </span>
          <span className="cls_023">Portfolio</span>
        </div>
        <div
          style={{ position: "absolute", left: "139.20px", top: "12.20px" }}
          className="cls_003"
        >
          <span className="cls_003">Shernan Javier</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.48px", top: "40.98px" }}
          className="cls_004"
        >
          <span className="cls_004">shernanjavier@gmail.com</span>
        </div>
        <div
          style={{ position: "absolute", left: "181.46px", top: "51.43px" }}
          className="cls_005"
        >
          <span className="cls_005">Software Developer</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.48px", top: "54.52px" }}
          className="cls_004"
        >
          <span className="cls_004">XXX-XXX-XXXX</span>
        </div>
        <div
          style={{ position: "absolute", left: "41.52px", top: "79.51px" }}
          className="cls_004"
        >
          <span className="cls_004">
            • A passionate second-year student eager to acquire knowledge and
            develop new skills.
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "458.40px", top: "84.41px" }}
          className="cls_007"
        >
          <span className="cls_007">Tech. Skills</span>
        </div>
        <div
          style={{ position: "absolute", left: "41.52px", top: "92.71px" }}
          className="cls_004"
        >
          <span className="cls_004">
            • Developed full-stack web applications utilizing the MERN
            technology stack.
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "41.52px", top: "105.91px" }}
          className="cls_004"
        >
          <span className="cls_004">
            • Designed elegant prototypes using wireframing tools such as Adobe
            XD and Figma.
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "459.42px", top: "114.66px" }}
          className="cls_006"
        >
          <span className="cls_006">Programming:</span>
        </div>
        <div
          style={{ position: "absolute", left: "41.52px", top: "119.11px" }}
          className="cls_004"
        >
          <span className="cls_004">
            • Experienced in collaborating with a team to organize a hackathon
            successfully.
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "459.42px", top: "128.17px" }}
          className="cls_004"
        >
          <span className="cls_004">Java • ReactJS • NodeJS</span>
        </div>
        <div
          style={{ position: "absolute", left: "459.01px", top: "141.37px" }}
          className="cls_004"
        >
          <span className="cls_004">ExpressJS • JavaScript</span>
        </div>
        <div
          style={{ position: "absolute", left: "41.35px", top: "145.06px" }}
          className="cls_015"
        >
          <span className="cls_015">Projects</span>
        </div>
        <div
          style={{ position: "absolute", left: "459.01px", top: "154.57px" }}
          className="cls_004"
        >
          <span className="cls_004">Spring Boot • Flutter • Dart</span>
        </div>
        <div
          style={{ position: "absolute", left: "459.01px", top: "167.77px" }}
          className="cls_004"
        >
          <span className="cls_004">React Native</span>
        </div>
        <div
          style={{ position: "absolute", left: "41.15px", top: "174.43px" }}
          className="cls_010"
        >
          <span className="cls_010">01/21 - Now </span>
          <span className="cls_012">ConsoliDate</span>
        </div>
        <div
          style={{ position: "absolute", left: "325.24px", top: "176.74px" }}
          className="cls_016"
        >
          <span className="cls_016">React.js • ASP.NET • SQL</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.94px", top: "188.66px" }}
          className="cls_006"
        >
          <span className="cls_006">Other:</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.07px", top: "194.26px" }}
          className="cls_004"
        >
          <span className="cls_004">
            ConsoliDate is a web application that allows students to view all
            dates relevant to their
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.94px", top: "202.21px" }}
          className="cls_004"
        >
          <span className="cls_004">Git • MongoDB • MySQL</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.07px", top: "207.46px" }}
          className="cls_004"
        >
          <span className="cls_004">
            academic success. Through an automated algorithm that parses text
            for academic-
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.94px", top: "215.82px" }}
          className="cls_004"
        >
          <span className="cls_004">Arduino • HTML5 • CSS3</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.07px", top: "220.66px" }}
          className="cls_004"
        >
          <span className="cls_004">
            related events, such as tests, assignments and quizzes, students no
            longer need to keep
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.94px", top: "229.43px" }}
          className="cls_004"
        >
          <span className="cls_004">JUnit</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.07px", top: "233.86px" }}
          className="cls_004"
        >
          <span className="cls_004">
            track of their due dates by looking through documents. Instead, they
            may see them all
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "40.07px", top: "247.06px" }}
          className="cls_004"
        >
          <span className="cls_004">
            on consolidated calendar UI, allowing them to integrate it with any
            calendar of their
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.94px", top: "255.77px" }}
          className="cls_006"
        >
          <span className="cls_006">UI/UX &amp; Design:</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.07px", top: "260.26px" }}
          className="cls_004"
        >
          <span className="cls_004">choice.</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.94px", top: "268.94px" }}
          className="cls_004"
        >
          <span className="cls_004">Figma • Adobe XD • Adobe</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.06px", top: "284.78px" }}
          className="cls_010"
        >
          <span className="cls_010">09/20 - Now</span>
          <span className="cls_012"> DevDemo</span>
        </div>
        <div
          style={{ position: "absolute", left: "252.07px", top: "285.52px" }}
          className="cls_016"
        >
          <span className="cls_016">
            MongoDB • Express.js • React.js • Node.js
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.93px", top: "282.55px" }}
          className="cls_004"
        >
          <span className="cls_004">Illustrator • Adobe</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.93px", top: "296.17px" }}
          className="cls_004"
        >
          <span className="cls_004">Photoshop • Adobe After</span>
        </div>
        <div
          style={{ position: "absolute", left: "39.97px", top: "301.38px" }}
          className="cls_004"
        >
          <span className="cls_004">
            An innovative showcasing platform for developers and designers to
            effortlessly display
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.93px", top: "309.78px" }}
          className="cls_004"
        >
          <span className="cls_004">Effects</span>
        </div>
        <div
          style={{ position: "absolute", left: "39.97px", top: "314.58px" }}
          className="cls_004"
        >
          <span className="cls_004">
            their projects. Utilized API Routes, Incorporated CRUD
            functionality, and JWT
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "39.97px", top: "327.78px" }}
          className="cls_004"
        >
          <span className="cls_004">authentication.</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.81px", top: "342.96px" }}
          className="cls_007"
        >
          <span className="cls_007">Relevant Courses</span>
        </div>
        <div
          style={{ position: "absolute", left: "39.93px", top: "353.55px" }}
          className="cls_015"
        >
          <span className="cls_015">Experience</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "373.60px" }}
          className="cls_008"
        >
          <span className="cls_008">•</span>
          <span className="cls_009"> Object-Oriented</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.06px", top: "383.24px" }}
          className="cls_010"
        >
          <span className="cls_010">01/21 - Now</span>
          <span className="cls_011"> </span>
          <span className="cls_012">Full-Stack Developer, Designer</span>
        </div>
        <div
          style={{ position: "absolute", left: "376.91px", top: "384.34px" }}
          className="cls_013"
        >
          <span className="cls_013">ConsoliDate</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "386.80px" }}
          className="cls_009"
        >
          <span className="cls_009">Programming</span>
        </div>
        <div
          style={{ position: "absolute", left: "49.93px", top: "402.89px" }}
          className="cls_014"
        >
          <span className="cls_014">•</span>
          <span className="cls_009">
            {" "}
            Developed the entirety of the front-end of the web application.
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "410.00px" }}
          className="cls_008"
        >
          <span className="cls_008">•</span>
          <span className="cls_009"> Enterprise Java</span>
        </div>
        <div
          style={{ position: "absolute", left: "49.93px", top: "416.09px" }}
          className="cls_014"
        >
          <span className="cls_014">•</span>
          <span className="cls_009">
            {" "}
            Creating new features, functionalities, and capabilities on the
            pilot project using
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "423.20px" }}
          className="cls_009"
        >
          <span className="cls_009">Development</span>
        </div>
        <div
          style={{ position: "absolute", left: "64.59px", top: "429.29px" }}
          className="cls_009"
        >
          <span className="cls_009">React, JSON, ASP.NET, and SQL.</span>
        </div>
        <div
          style={{ position: "absolute", left: "49.93px", top: "442.49px" }}
          className="cls_014"
        >
          <span className="cls_014">•</span>
          <span className="cls_009">
            {" "}
            Building stable and maintainable codebases.
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "446.40px" }}
          className="cls_008"
        >
          <span className="cls_008">•</span>
          <span className="cls_009"> Web Programming</span>
        </div>
        <div
          style={{ position: "absolute", left: "49.93px", top: "455.69px" }}
          className="cls_014"
        >
          <span className="cls_014">•</span>
          <span className="cls_009">
            {" "}
            Collaborating with team members to ensure design and implementations
            are
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "64.59px", top: "468.89px" }}
          className="cls_009"
        >
          <span className="cls_009">elegant and efficient.</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "469.60px" }}
          className="cls_008"
        >
          <span className="cls_008">•</span>
          <span className="cls_009"> Linux and Operating</span>
        </div>
        <div
          style={{ position: "absolute", left: "49.93px", top: "482.09px" }}
          className="cls_014"
        >
          <span className="cls_014">•</span>
          <span className="cls_009">
            {" "}
            Designed prototypes to gain agreement and gather opinions from
            stakeholders.
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "482.80px" }}
          className="cls_009"
        >
          <span className="cls_009">Systems</span>
        </div>
        <div
          style={{ position: "absolute", left: "41.37px", top: "507.14px" }}
          className="cls_010"
        >
          <span className="cls_010">02/20 - Now</span>
          <span className="cls_011"> </span>
          <span className="cls_012">
            Hackathon Organizer, Marketer, Designer
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "387.38px", top: "508.23px" }}
          className="cls_013"
        >
          <span className="cls_013">OakHacks</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "506.00px" }}
          className="cls_008"
        >
          <span className="cls_008">•</span>
          <span className="cls_009"> Database Design and</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "519.20px" }}
          className="cls_009"
        >
          <span className="cls_009">Implemention</span>
        </div>
        <div
          style={{ position: "absolute", left: "50.82px", top: "526.45px" }}
          className="cls_018"
        >
          <span className="cls_018">•</span>
          <span className="cls_004">
            {" "}
            Organized and promoted a virtual hackathon by producing engaging
            illustrations
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "65.48px", top: "539.24px" }}
          className="cls_004"
        >
          <span className="cls_004">resulting in a turnout of over </span>
          <span className="cls_017">150 participants</span>
          <span className="cls_004">.</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "542.40px" }}
          className="cls_008"
        >
          <span className="cls_008">•</span>
          <span className="cls_009"> Software Development</span>
        </div>
        <div
          style={{ position: "absolute", left: "50.82px", top: "552.03px" }}
          className="cls_018"
        >
          <span className="cls_018">•</span>
          <span className="cls_004">
            {" "}
            Collaborated and built meaningful relationships with the
            participants, organizers,
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "555.60px" }}
          className="cls_009"
        >
          <span className="cls_009">Lifecycle</span>
        </div>
        <div
          style={{ position: "absolute", left: "65.48px", top: "564.82px" }}
          className="cls_004"
        >
          <span className="cls_004">workshop hosts, and company sponsors.</span>
        </div>
        <div
          style={{ position: "absolute", left: "50.82px", top: "577.60px" }}
          className="cls_018"
        >
          <span className="cls_018">•</span>
          <span className="cls_004">
            {" "}
            Overcame the obstacles that COVID-19 constructed during the planning
            phase for
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "578.80px" }}
          className="cls_008"
        >
          <span className="cls_008">•</span>
          <span className="cls_009"> Network Security</span>
        </div>
        <div
          style={{ position: "absolute", left: "65.48px", top: "590.80px" }}
          className="cls_004"
        >
          <span className="cls_004">the event.</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "602.00px" }}
          className="cls_008"
        >
          <span className="cls_008">•</span>
          <span className="cls_009"> User Interface and User</span>
        </div>
        <div
          style={{ position: "absolute", left: "457.62px", top: "615.20px" }}
          className="cls_009"
        >
          <span className="cls_009">Experience Design</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.97px", top: "615.92px" }}
          className="cls_015"
        >
          <span className="cls_015">Education</span>
        </div>
        <div
          style={{ position: "absolute", left: "41.43px", top: "646.39px" }}
          className="cls_010"
        >
          <span className="cls_010">2019 - 2022</span>
          <span className="cls_011"> </span>
          <span className="cls_019"> </span>
          <span className="cls_012">Sheridan College</span>
        </div>
        <div
          style={{ position: "absolute", left: "458.10px", top: "653.25px" }}
          className="cls_007"
        >
          <span className="cls_007">Hobbies</span>
        </div>
        <div
          style={{ position: "absolute", left: "41.43px", top: "666.32px" }}
          className="cls_020"
        >
          <span className="cls_020">
            Software Development and Network Engineering,{" "}
          </span>
          <span className="cls_021">Advanced Diploma</span>
        </div>
        <div
          style={{ position: "absolute", left: "458.18px", top: "679.05px" }}
          className="cls_009"
        >
          <span className="cls_009">• Photography</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.77px", top: "683.86px" }}
          className="cls_022"
        >
          <span className="cls_022">•</span>
          <span className="cls_004">
            {" "}
            Developed an application written in Java that calculates
            mathematical expressions
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "40.77px", top: "697.06px" }}
          className="cls_004"
        >
          <span className="cls_004">incorporating the MVC design pattern.</span>
        </div>
        <div
          style={{ position: "absolute", left: "458.18px", top: "697.68px" }}
          className="cls_009"
        >
          <span className="cls_009">• Videography</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.77px", top: "710.26px" }}
          className="cls_022"
        >
          <span className="cls_022">•</span>
          <span className="cls_004">
            {" "}
            Acquired knowledge in fundamental software design concepts to
            develop efficient
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "458.18px", top: "716.30px" }}
          className="cls_009"
        >
          <span className="cls_009">• Motion Design</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.77px", top: "723.05px" }}
          className="cls_004"
        >
          <span className="cls_004">and reusable code.</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.77px", top: "735.84px" }}
          className="cls_022"
        >
          <span className="cls_022">•</span>
          <span className="cls_004">
            {" "}
            Designed applications utilizing modern wire-framing and prototyping
            software in
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "458.18px", top: "734.92px" }}
          className="cls_009"
        >
          <span className="cls_009">• Graphics Design</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.77px", top: "748.63px" }}
          className="cls_004"
        >
          <span className="cls_004">
            addition to producing use cases and user stories to identify
            requirements.
          </span>
        </div>
        <div
          style={{ position: "absolute", left: "458.18px", top: "753.55px" }}
          className="cls_009"
        >
          <span className="cls_009">• Playing Guitar</span>
        </div>
        <div
          style={{ position: "absolute", left: "40.77px", top: "761.42px" }}
          className="cls_022"
        >
          <span className="cls_022">•</span>
          <span className="cls_004">
            {" "}
            Learned unit testing using the JUnit framework to aid in quality
            assurance.
          </span>
        </div>
      </div>
    </>
  );
};

export default Resume;
