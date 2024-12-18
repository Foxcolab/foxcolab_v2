import React from 'react'
import Obaidullah from "../../../assets/obaidullah.jpg";
import Image from 'next/image';

const Mentors = [
    {
        name:"Dr. Shamim Haidar",
        picture:"https://aliah.ac.in//upload/people_profile/01-06-18_1527873258.jpg", 
        programDesignation:"Joint Organising Secretary",
        designation:"Associate Professor, Dept. of Mechanical Engineering"
    },
   
    {
        name:"Dr. Rumpa Saha",
        picture:"https://res.cloudinary.com/dbzpzmxpd/image/upload/c_crop,w_1400,h_1200/v1734296706/WhatsApp_Image_2024-12-16_at_02.28.27_gq0odn.jpg", 
        programDesignation:"Organising Secretary",
        designation:"Assistant Professor, Dept. of Electrical Engineering"
    },
    {
        name:"Pallav Dutta",
        picture:"https://aliah.ac.in//upload/people_profile/21-04-24_1713706685.png", 
        programDesignation:"Convener",
        designation:"Assistant Professor, Dept. of Electrical Engineering"
    },
    {
        name:"Dr. Mukandar Sekh",
        picture:"https://aliah.ac.in//upload/people_profile/25-05-19_1558767613.jpeg", 
        programDesignation:"Co-Convener",
        designation:"Associate Professor, Dept. of Mechanical Engineering"
    },
 
    {
        name:"Prof Md. Mehedi Kalam",
        picture:'/assets/team/mentor/MK.jpg', 
        programDesignation:"Executive Member",
        designation:"Associate Professor,Dept. of Physics"
    },
    {
        name:"Dr. Samiran Sur",
        picture:'/assets/team/mentor/SS.jpg', 
        programDesignation:"Executive Member",
        designation:"Dept. of Management & Business Administratio"
    },
    {
        name:"Dr. Sk Md Obaidullah",
        picture:Obaidullah, 
        programDesignation:"Executive Member",
        designation:"Associate Professor, Dept. of Computer Science & Engineering"
    },
    {
        name:"Dr. Quazi Mohmmad Alfred",
        picture:"/assets/team/mentor/QMA.jpg", 
        programDesignation:"Executive Member", 
        designation:"Associate Professor, Dept. of Electronics And Communication Engineering"
    },
    {
        name:"Dr. Indranil Mukherjee",
        picture:"/assets/team/mentor/Indrajit_Sir.jpg", 
        programDesignation:"Executive Member", 
        designation:"Associate Professor, Department of Civil Engineering,"
    },
    {
        name:"Mr. Jakir Hossain Molla",
        picture:"/assets/team/mentor/Jakir_Sir.jpg", 
        programDesignation:"Executive Member ", 
        designation:"Training & Placement Officer"
    },
    {
        name:"Mr. Shaikh Rizwan",
        picture:"/assets/team/mentor/Rizwan_sir.jpg", 
        programDesignation:"Executive Member", 
        designation:"Finance Section"
    },
    {
        name:"Mr. Asif Iqbal",
        picture:"/assets/team/mentor/Asif_Iqbal.jpg", 
        programDesignation:"Executive Member", 
        designation:"Dept. of Computer Science & Engineering"
    }

]


const Teams = [
    {
        name:"Syed Zahidul Hasan",
        picture:"/assets/team/volunteer/1.jpg", 
        designation:"Lead Organizer"
    },
  
    {
        name:"Kaustav Chakraborty",
        picture:"", 
        designation:"Team Lead"
    },
    {
        name:"Bikram Shit",
        picture:"", 
        designation:"Tech Head"
    },
  
    {
        name:"Md Wasim Jafor SK",
        picture:"", 
        designation:"Team Lead"
    },
    {
        name:"Narmajit Saha",
        picture:"", 
        designation:"Team Lead"
    },
    {
        name:"Mohd Sajid Siddiqui",
        picture:"", 
        designation:"Team Lead"
    },
    {
        name:"Aadil Jabbiulla",
        picture:"", 
        designation:"Member"
    },
    {
        name:"Kazi Ashique Ahmed",
        picture:"", 
        designation:"Member"
    },
    {
        name:"Sayani Banarjee",
        picture:"", 
        designation:"Member"
    },
    
    {
        name:"Sefat Jahan",
        picture:"", 
        designation:"Member"
    },
    {
        name:"Sariful Islam",
        picture:"", 
        designation:"Member"
    },
    {
        name:"Md Shaif Ali",
        picture:"", 
        designation:"Member"
    },
    {
        name:"Masuma Khanam",
        picture:"", 
        designation:"Member"
    },
    {
        name:"Kaifee Azmi",
        picture:"", 
        designation:"Member"
    },{
        name:"Rafikun Nesa",
        picture:"", 
        designation:"Member"
    },
    {
        name:"Nemat Jahan",
        picture:"", 
        designation:"Member"
    },
  
    {
        name:"Mohammad Asraf",
        picture:"", 
        designation:"Member"
    },
    {
        name:"SK Sohel Islam",
        picture:"", 
        designation:"Member"
    },
    {
        name:"Arayan Sarkar",
        picture:"", 
        designation:"Member"
    },
   
    {
        name:"Md Wajid",
        picture:"", 
        designation:"Member"
    },
    {
        name:"Sk Kutub Uddin",
        picture:"", 
        designation:"Member"
    },
   
]


function Team() {
  return (
    <>
    
    
    <div>
        <div className='flex items-center justify-center flex-col my-12'>
            
        <div className='logo_font text-yellow-500 text-[2rem] font-semibold relative'>
      <span className='absolute h-4 left-0 right-0 bottom-2 bg-[#42484b] z-1'></span>
      <span className='relative z-10'><span className='text-white'>Meet</span> Our Crew</span></div>
        {/* <div>MENTOR</div> */}
        </div>

        <div className='mx-4 md:mx-12 lg:mx-[15rem]'>
        <div className='font-semibold text-[1.5rem] relative'>
            <div></div> <span className='relative'><span className='absolute left-0 right-0 top-[-0.3rem] h-1 bg-yellow-500 font-semibold mb-8'></span><span className='text-yellow-500'>M</span>ENTORS</span></div>

            <div className='grid grid-cols-1 md:grid-cols-3  gap-12 mt-6'>
                {
                    Mentors.map((mentor)=>(
                        <div key={mentor.name} className='border bg-white rounded-md p-4 pt-6'>
                                <div className='h-[10rem] flex items-center justify-center'>
                                    <Image src={mentor.picture} alt='' height={100} width={100} unoptimized className='h-full w-auto object-cover rounded-md shadow-md' />
                                </div>
                                <div className='text-black'>
                                <div className='text-[1.0rem] mt-2 font-semibold text-center logo_font'>{mentor.name}</div>
                                <div className='text-center text-[0.95rem] '>{mentor.designation}</div>
                                </div>
                        </div>
                    ))
                }
            </div>

        </div>


        {/* Teams  */}


        <div className='mx-4 md:mx-12 lg:mx-[15rem] mt-12'>
        <div className='font-semibold text-[1.5rem] relative'>
            <div></div> <span className='relative'><span className='absolute left-0 right-0 top-[-0.3rem] h-1 bg-yellow-500 font-semibold mb-8'></span><span className='text-yellow-500'>T</span>EAMS</span></div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-6'>
                {
                    Teams.map((team)=>(
                        <div key={team.name} className='border bg-white rounded-md p-4 pt-6'>
                                <div className='h-[10rem] flex items-center justify-center'>
                                    <Image src={team.picture} alt='' height={100} width={100} unoptimized className='h-full w-auto object-cover rounded-md shadow-md' />
                                </div>
                                <div className='text-black'>
                                <div className='text-[1.0rem] mt-2 font-semibold text-center logo_font'>{team.name}</div>
                                <div className='text-center text-[0.95rem] '>{team.designation}</div>
                                </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
    
    </>
  )
}

export default Team