/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TeamAimi from "../Assets/aimi.png";
import TeamQianYun from "../Assets/qianyun.png";
import TeamAina from "../Assets/aina.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Team = () => {
    let message = "Welcome to BeFit! \n Our team is a diverse group \n of passionate individuals dedicated to bring \n changes for a healthier lifestyle. \n Together, we bring a unique blend of skills, expertise, and creativity to the table.";
    
    return (
      <section className="section-white">
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
        
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">
                            The Team Behind <b>BeFit</b>
                        </h2>
                        <p className="section-subtitle">{message}</p>
                    </div>

                    
              
                    <div className="col-sm-1 col-md-1">
                        <div className="team-item">
                
                        <img src={TeamAimi} alt="" />                 
                        <h3>KHAIRIN AIMI BINTI MOHD ASHRI</h3>            
                        <div className="team-info">
                            <p>Chief Executive Officer</p>
                        </div>
                        <div className="team-desc">
                        <p>Aimi is the top executive responsible for overall leadership and strategic direction of the company. 
                                She sets the vision, mission, and goals, ensuring that the company is aligned with its commitment 
                                to promoting health through healthy recipes. The CEO oversees the execution of business strategies, 
                                leads the management team, and represents the company to stakeholders and the public.</p>
                        </div>
                            <ul className="team-icon">
                        
                        
                            <li><a href="#" className="linkedin"><LinkedInIcon />
                                
                            </a></li>
                        
                            </ul>
                        </div>
                        
                        
                    </div>
            
             
                    <div className="col-sm-1 col-md-1">
                        <div className="team-item">
                    
                        <img src={TeamQianYun} alt="" />                 
                        <h3>LIM QIAN YUN</h3>            
                        <div className="team-info">
                            <p>Chief Technical Officer</p>
                        </div>
                        <div className="team-desc">
                            
                        </div><p>Qian Yun oversees the technological aspects of the company's operations. 
                            In the context of a health-focused recipe company, she would be responsible 
                            for technology-driven solutions such as a user-friendly recipe app or website, data analytics 
                            for personalized nutrition insights, and ensuring the technology infrastructure 
                            supports the company's goals.</p>
                            <ul className="team-icon">
                            
                            
                            <li><a href="#" className="linkedin"><LinkedInIcon /></a></li>
                            
                            </ul>
                        </div>
                    
                    </div>


                    <div className="col-sm-1 col-md-1">
                        <div className="team-item">
                    
                        <img src={TeamAina} alt="" />                 
                        <h3>AINA' ZAWANI BINTI ZAIDAN</h3>            
                        <div className="team-info">
                            <p>Chief Financial Officer</p>
                        </div>
                        <div className="team-desc">
                            <p>Aina' is in charge of the company's financial strategy and management. 
                                She oversees budgeting, financial planning, 
                                and ensures the company's financial health. Here, 
                                the CFO plays a vital role in resource allocation, financial forecasting, and managing financial risks.</p>
                        </div>
                            <ul className="team-icon">
                        
                            <li><a href="#" className="linkedin"><LinkedInIcon /></a></li>
                            
                            </ul>

                        </div>
                    
                    </div>
                </div>
            </div>   

        </section>
    );
};

export default Team;