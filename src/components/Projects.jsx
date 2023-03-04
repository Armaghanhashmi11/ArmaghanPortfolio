import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";
import img7 from "../assets/images/project-img7.png";
import img5 from "../assets/images/project-img5.png";
import img6 from "../assets/images/project-img6.png";


import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      link:"https://zapatadental.com/",
      title: "Zapata Dental",
      description: "As a Clinic of dental",
      img: img1,
    },
    {
      id: 2,
      title: "Pearl Pediatric dentistry",
      link:"https://pearlpdo.com/",
      description: "Next Js As a dual specialty office we strive to provide the best pediatric dental and orthodontic care and make visits convenient and FUN! We have created a modern environment that both kids and parents can enjoy.",
      img: img2,
    },
    {
      id: 3,
      link:"https://jiroy.com/",
      title: "Jiroy",
      description: "React js Ecommerce Website",
      img: img3,
    },
    {
      id: 4,
      title: "Gallery De NFT",
      link:"https://gallery-de-nft-ma7m.vercel.app/home",
      description: "The NFT based website MetaMask connected is compulsory",
      img: img7,
    },
    {
      id: 5,
      link:"https://apprentice-roster.vercel.app/",
      title: "Apprentice Roster",
      description: "Manageable dataBase webiste",
      img: img5,
    },
    {
      id: 6,
      link:"https://www.superwall.io/",
      title: "SuperWall",
      description: "Its NFT based Website its BlockChain ",
      img: img6,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          There are some projects I was making for own and for Clients 
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 md:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
       
      </div>
    </>
  );
}

export default Projects;
