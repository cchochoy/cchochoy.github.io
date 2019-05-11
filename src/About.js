import React, { Component } from 'react';
import TimelineBox from './TimelineBox';

import './About.css';

class About extends Component {

    timelineData = [
        {
            text: "Preparatory Class",
            subtext: "Preparatory class for engineering schools",
            date: "September 2014",
            city: "Antony",
            tag: {
                type: "school",
                color: "#2d4c8d"
            },
            label: ["Mathematics", "Physics"]
        },
        {
            text: "INP - ENSEEIHT",
            logo: "http://dev.meilleures-licences.com/logo_ecole/inp-enseeiht-1481206267.png",
            subtext: "Engineering school - Network and Telecommunication speciality",
            date: "September 2016",
            city: "Toulouse",
            tag: {
                type: "school",
                color: "#2d4c8d"
            },
            label: ["Computing", "Network", "Telecommunication"],
            link: {
                url:
                    "http://www.enseeiht.fr/fr/index.html",
                text: "More infos"
            }
        },
        {
            text: "Dublin City University",
            logo: "https://hardwareassociation.ie/wp-content/uploads/2017/12/Dcu-logo.png",
            subtext: "Erasmus exchange",
            date: "January 2018",
            city: "Dublin",
            tag: {
                type: "school",
                color: "#2d4c8d"
            },
            label: ["Network Security", "Cryptography", "Forensic", "Machine Learning"],
            link: {
                url:
                    "https://www.dcu.ie",
                text: "More infos"
            }
        },
        {
            text: "Activus",
            logo: "https://activus-services.com/images/Logo-Activus.png",
            subtext: "Assist in creating algorithms for network anomaly detection",
            date: "June 2018",
            city: "Toulouse",
            tag: {
                type: "Internship",
                color: "#ad2d2d"
            }
        },
        {
            text: "MSc in IT security",
            logo: "https://thcon.party/assets/png/logo-TLS-SEC.png",
            subtext: "Third year specialisation in cybersecurity",
            date: "September 2018",
            city: "Toulouse",
            tag: {
                type: "school",
                color: "#2d4c8d"
            },
            label: ["System Security", "Network Security", "Cryptography"],
            link: {
                url: "https://tls-sec.github.io/",
                text: "More infos"
            }
        },
        {
            text: "Collins Aerospace",
            logo: "https://www.securityandpolicing.co.uk/wp-content/uploads/sites/16/exhibitors/nineteen/images/101116.jpg",
            subtext: "Worked with the product cybersecurity team",
            date: "March 2019",
            city: "Toulouse",
            tag: {
                type: "Internship",
                color: "#ad2d2d"
            }
        }
    ];

    render() {
        return (
            <div className="aboutPage">
                <div className="title">
                    <h1>About me</h1>
                </ div>
                <div className="fullLine" />
                <div className="timeline">
                    {this.timelineData.map((data, idx) => (
                        <TimelineBox data={data} key={idx} />
                    ))}
                </div>
            </div>
        )
    }
}

export default About