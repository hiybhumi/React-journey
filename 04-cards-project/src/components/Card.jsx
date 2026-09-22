import React from 'react'
import {Bookmark, HardDriveUpload} from 'lucide-react'

const Card = (props) => {
  return (
    <>
    <div className='parent'>
          <div className="card">
           <div>
             <div className="top">
              <img src={props.img} alt=""></img>
              <button>Save <Bookmark size={12}/></button>
            </div>
            <div className="center">
              <h3>{props.company}  <span>{props.datePosted}</span></h3>
              <h2>{props.profile}</h2>
              <div className='tag'>
                <h4>{props.duration}</h4>
                <h4>{props.level}</h4>
              </div>
            </div>
           </div>
              <div className="bottom">
                <div>
                  <h3>{props.payment}</h3>
                  <p>{props.loc}</p>
              </div>
              <button>Apply Now</button>
            </div>
          </div>
        </div>
        </>
  )
}

export default Card
