import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Ideoversity College  Lahore "
            date="2022 — 2023"
            description="Neno Degree in Fullstack web Developer."
          />
          <TimelineItem
            title="Govt Degree College, Kasur"
            date="2020 — 2022"
            description="inter (computer science)      "
          />
          <TimelineItem
            title=" Govt lab School,Kasur "
            date="2018 — 2020"
            description="matric (computer science)"
          />
        </ol>
      </div>

      {/* <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Creative director"
            date="2015 — Present"
            description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
          />
          <TimelineItem
            title="Art director"
            date="2013 — 2015"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            title="Web designer"
            date="2010 — 2013"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
        </ol>
      </div> */}

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={70} />
          <SkillItem title="SEO" value={75} />
          <SkillItem title="Branding" value={60} />
          {/* <SkillItem title="WordPress" value={50} /> */}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
