import React, { Component } from 'react';
import ProjectBox from './ProjectBox';

import './Projects.css';

class Projects extends Component {

    projectList = [
        { 
          key: 5,
          img: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
          title: "cchochoy.github.io",
          shortDesc: "React website",
          longDesc: "This is literally this website",
          href: "https://github.com/cchochoy/cchochoy.github.io"
        },
        { 
          key: 4,
          img: "https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
          title: "e1000 fake driver",
          shortDesc: "Virtualbox Guest-to-Host escape",
          longDesc: "This is the code of a malicious e1000 driver exploiting Virtualbox CVE-2018-3295. This code was developped for a school project.",
          href: "https://github.com/cchochoy/e1000_fake_driver"
        },
        { 
          key: 3,
          img: "https://images.pexels.com/photos/1432673/pexels-photo-1432673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
          title: "secos",
          shortDesc: "Educational x86 kernel",
          longDesc: "Secure x86 kernel written in C for a school project.",
          href: "https://github.com/cchochoy/secos"
        },
        { 
          key: 2,
          img: "https://tecnico.ulisboa.pt/files/2017/06/priberam-machine-learning-lunch-seminar-joao-xavier-1140x641.jpg", 
          title: "classy-filer",
          shortDesc: "Image classification",
          longDesc: "This is a python image classifier project using tensorflow. It contains a python class allowing you to train and test your own image classifier.",
          href: "https://github.com/cchochoy/classy-filer"
        },
        { 
          key: 1,
          img: "https://www.telegraph.co.uk/content/dam/gardening/2018/06/07/TELEMMGLPICT000165573825_trans_NvBQzQNjv4BqaxhR1vC4M3eHXTZuhDlJp-iBvoxkJnxoIp2wzaVi5fo.jpeg?imwidth=450", 
          title: "pyMaze",
          shortDesc: "Simple python game",
          longDesc: "You are thrown in a randomly generated maze and need to reach a specific area. Will you beat the highscore ?",
          href: ""
      }
    ]

    render() {
        return (
            <div className="projectPage" >
                <div className="title">
                    <h1>My Projects</h1>
                </div>
                <div className="fullLine" />
                <div className="project">
                    {this.projectList.map(({img, title, shortDesc, longDesc, href, key}) => (
                        <ProjectBox img={img} title={title} key={key} shortDesc={shortDesc} longDesc={longDesc} href={href} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects