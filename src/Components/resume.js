import React from 'react';
import workexp from './workexp.png';
import skills from './skills.jpg'
import profile from './profile.png'



function Res() {
    return (
        <div className='root'>

            <div class="resume">
                <div class="profile">
                    <div class="logo">
                        <img src={profile} alt="Profile Logo" />
                    </div>
                    <span class="name">Sudarshan S</span>
                    <p class="about"><strong>Application L2 Support Analyst</strong> | Good experience and knowledge in Excel,
                        Ms Office, job scheduling, incident management, change
                        management, problem management, ITIL, Application maintenance.Having Good knowledge in Creating
                        basic triggers and stored procedures
                        Good team player and works in individual as well
                        Handling client calls and providing the solutions over call to the Users</p>
                </div>



                <hr />
                <div class="experience">
                    <div class="logo">
                        <img src={workexp} alt="Experience Logo" />
                    </div>
                    <h2 class="work-experience">Work Experience</h2>
                    <p><strong>Application L2 Support Analyst</strong> |  Wipro Technologies</p>
                    <ul>

                        <li>Participating in requirements gathering sessions with business units and end-users and documenting
                        </li>
                        <li>end-user requirements and providing the needs according to the stake holders requirement.11111,</li>
                        <li>Functionally expertizing myself by understanding the functionality in the system and converting the
                        </li>
                        <li> business requirements into system changes</li>
                        <li>Closing Service requests within given SLA’s</li>
                        <li>Edited Procedural Language in SQL according to the Business requirements</li>
                        <li>Scheduling calls and managing during deployments, have supported for SQL script deployments and</li>
                        <li>DLL file deployments.</li>
                        <li>Identifying and documenting system deficiencies or bugs and recommending solutions.</li>
                        <li>Understanding and modifying API’s by analyzing the logs generated during interaction</li>
                        <li>between two applications using broker applications like ESB(Enterprise Service Bus)</li>
                        <li>Assist vendors by connecting for User Acceptance Testing.</li>
                        <li>Managing issues by resolving production issues under the provided timeline.</li>
                        <li> Presiding over integration and other services to ensure proper functionalities in UI level.</li>
                        <li> Partaking in deployments, patching activity, DCDR activities.</li>
                        <li>Monitoring the utilization of each query and adopting measures against junk data on a regular basis.
                        </li>
                        <li>Initiating rules by including Alert rules and Triggers for validating data that is inserted in UI
                            level.</li>
                        <li> Having remote connection with end users and customers to troubleshoot the issues.</li>
                        <li> Writing the complex queries to provide the data and also as per Business requirement in production
                        </li>
                        <li> Knowledge in change, Problem and incident management</li>

                    </ul>
                </div>

                <hr />

                <div class="skills">
                    <div class="logo">
                        <img src={skills} alt="Skills Logo" />
                    </div>
                    <h2 class="samples">Skills</h2>
                    <ul>
                        <li><i class="icons">HTML/CSS</i></li>
                        <li><i class="icons">JavaScript</i></li>
                        <li><i class="icons">UI/UX Design</i></li>
                        <li><i class="icons">SQL</i></li>
                    </ul>
                </div>

                <div className='bottom'>
                    <img src={profile} alt="Profile Logo" />
                    <img src={workexp} alt="Experience Logo" />
                    <img src={skills} alt="Skills Logo" />
                    <img src={profile} alt="Profile Logo" />
                    <img src={workexp} alt="Experience Logo" />
                    <img src={skills} alt="Skills Logo" />
                </div>
            </div>



        </div>
    )
}


export default Res;