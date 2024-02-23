import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabSample() {
     return (
          <Tabs
               defaultActiveKey="profile"
               id="fill-tab-example"
               className="mb-3"
               fill
          >    
               <Tab eventKey="about" title="About">
                    <p>
                         This is Vigneswari Sambandam aka Viggy. I live in Cincinnati, Ohio, and am doing my masters in Information Technology. I'm an accomplished IT professional with 14 years of experience developing and architecting IT applications across industries with a proven track record of delivering value to Healthcare, Telecom, and Service Industries businesses. I wanted to upskill myself and embrace the changes and happenings in recent years in IT. So, I took a break and came to the US for a master's, and I'm also doing the Berkeley Coding Bootcamp for additional skills. Apart from work and studies, I love watching movies, listening to music, and sometimes reading books. I empathize with people and hate all kinds of discrimination against people in all forms.
                    </p>
               </Tab>
                    
               <Tab eventKey="experience" title="Experience">
                    <p>
                         Part of ESS for the past 13 years with experience in developing and architecting IT applications across industries with proven track record of delivering value to business in Healthcare, Telecom and Service Industries.
                    </p>
                    <ul>
                         <li>Managed IT application services - Pharma and Telecom business commercial applications.</li>
                         <li>Worked with fortune 500 clients on multiple projects to design, deliver and support business critical applications.</li>
                         <li>Managed a team of 20+ engineers with various skill sets and worked with 10+ business stakeholders.</li>
                         <li>Experience with Appraisal and career planning of team resources.</li>
                         <li>Proactively identify issues/risks, proposed mitigations to various stakeholders.</li>
                         <li>Implemented and achieved two ISO certifications for Enhanced Software Solutions.</li>
                    </ul>
               </Tab> 

               <Tab eventKey="projects" title="Projects">
                    Tab content for Projects
               </Tab> 
          
               <Tab eventKey="education" title="Education">
                    Tab content for Education
               </Tab>

               <Tab eventKey="skills" title="Skills">
                    Tab content for Skills
               </Tab>

                <Tab eventKey="awards" title="Awards">
                    Tab content for Awards
               </Tab>
          </Tabs>
     );
}

export default TabSample;