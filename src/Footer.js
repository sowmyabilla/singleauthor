import React from 'react'
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='ftrending'>Trending Courses</div>
            <div className='ftrendingsub'>Power BI Training | Google Cloud Training | Salesforce Training | Oracle DBA Training | Informatica Training | Snowflake Training | Flutter Training | Python Training | Servicenow Training | Data Science Training | Artificial Intelligence Training | Machine Learning Training</div>
            <div className='fpopular'>Popular Courses</div>
            <div className='fpopularsub'>Agile Training | ArcSight Training | CyberArk Training | Workday Training | Looker Training | AWS Training | Alteryx Training | Powershell Training | Uipath Training | Mulesoft Training | SQl Server DBA Training | React JS Training</div>
            <div className='fcategories'>Course Categories</div>
            <div className='fcategoriessub'>Business Intelligence and Analytics Courses | Cloud Computing Courses | Programming and Frameworks Courses | Customer Relationship Management Courses | Database Management & Administration Certification Courses | Business Process Management Courses | Software and Automation Testing Courses | IT Service Management Courses | AI and Machine Learning Courses | ERP Courses</div>
            <div className='finterviewquest'>Interview Questions</div>
            <div className='finterviewquestsub'>Salesforce Interview Questions | AWS Interview Questions | RPA Interview Questions | Looker Interview Questions | Informatica Interview Questions | Workday Interview Question | Servicenow Interview Questions | Flutter Interview Questions | Liferay Interview Questions | Ranorex Interview Questions | Oracle OCI Interview Questions | Citrix Interview Questions | Pega Interview Questions | Tableau Interview Questions | Snowflake Interview Questions | Dart Interview Questions</div>
            <div className='ftutorials'>Tutorials</div>
            <div className='ftutorialssub'>AWS Tutorial | Salesforce Tutorial | RPA Tutorial | Looker Tutorial | Informatica Tutorial | Workday Tutorial | ServiceNow Tutorial | Power BI Tutorial | SCCM Tutorial | Pega Tutorial | CyberArk Tutorial | Powerapps Tutorial | Workday Tutorial | Netsuite Tutorial | VMware Tutorial | Apache Airflow Tutorial</div>
            <div className=''>
                <ul className='fallcoursesline'>
                    <li>All Courses</li>
                    <li>Blog</li>
                    <li>Quiz</li>
                    <li>Community</li>
                    <li>Sample Resumes</li>
                    <li>Webinars</li>
                </ul>
            </div>
            <div >
                <ul className='faboutusline'>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li> Refund Policy</li>
                    <li>Reviews</li>
                    <li className='facebook'><FaFacebookF /></li>
                    <li className='twitter'><FaTwitter /></li>
                    <li className='linkedin'><FaLinkedinIn /></li>
                    <li className='instagram'><FaInstagram /></li>
                </ul>
            </div>
            <div>
                <ul className='fcorporateline'>
                    <li>Corporate Training</li>
                    <li>Become an Instructor</li>
                    <li>Write for us</li>
                    <li>Hire from us</li>
                </ul>
            </div>
            <div className='fcopyright'>Copyright © 2013 - 2022  MindMajix Technologies An Appmajix Company -   All Rights Reserved.</div>
            <div className='fdisclaimer'>Disclaimer: All the course names, logos, and certification titles we use are their respective owners' property. The firm, service, or product names on the website are solely for identification purposes. We do not own, endorse or have the copyright of any brand/logo/name in any manner. Few graphics on our website are freely available on public domains.</div>
        </div>
    )
}

export default Footer