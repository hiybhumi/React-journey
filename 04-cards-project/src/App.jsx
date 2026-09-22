import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  const users = [
        {
          company:"Amazon",
          profile:"Senior UI/UX Designer",
          datePosted:'5 days ago',
          payment:"$120/hr", loc:"Melbourne, Canada",
          duration:"Part Time", 
          level:"Senior level", 
          img:"https://tse1.mm.bing.net/th/id/OIP.douAQqLQCydHXDqsPfOcpwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
          company:"Uber",
          profile:"Project Manager",
          payment:"$50/hr",
          datePosted:'2 days ago',
          loc:"Toronto, Canada",
          duration:"Part Time/Full Time",
          level:" Junior level",
          img:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7dba22135910609.61f02880d21ea.jpg"
        },
        {
          company:"Microsoft",
          profile:"Software Developer",
          payment:"$80/hr",
          datePosted:'2 weeks ago',
          loc:"Gurgaon, India",
          duration:"Full Time",
          level:" Senior level",
          img:"https://static.vecteezy.com/system/resources/previews/028/339/965/original/microsoft-icon-logo-symbol-free-png.png"
        },
        {
          company:"Netflix",
          profile:"Data Analyst",
          payment:"$100/hr",
          datePosted:'1 weeks ago',
          loc:"Tokyo, Japan",
          duration:"Part Time",
          level:" junior level",
          img:"https://tse4.mm.bing.net/th/id/OIP.d6IPpl20QQUaZs-9bCdCQAHaEK?w=768&h=432&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
          company:"Flipkart",
          profile:"Cloud Administrator",
          payment:"$130/hr",
          datePosted:'3 days ago',
          loc:"Seoul, South Korea",
          duration:"Part Time/Full Time",
          level:" Senior level",
          img:"https://tse3.mm.bing.net/th/id/OIP.vBmeNfhXI1Sue8fAfAmKWAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
          company:'Instagram',
          profile:"Graphic Designer",
          payment:"$40-70/hr",
          loc:"Remote",
          datePosted:'1 week ago',
          duration:"Full Time",
          level:"Junior level/Senior level",
          img:"https://static.vecteezy.com/system/resources/previews/018/930/413/original/instagram-logo-instagram-icon-transparent-free-png.png"
        }
      ]
  return (
    <div className='main'>
      {users.map((el,idx) => {
        return <div key={idx}>
          <Card company={el.company} profile={el.profile} payment={el.payment} loc={el.loc} date={el.datePosted} duration={el.duration} level={el.level} img={el.img}/>
          </div>
      })}
    </div>
  ) 
}

export default App
