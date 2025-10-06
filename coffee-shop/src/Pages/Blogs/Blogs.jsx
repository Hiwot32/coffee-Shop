import React from 'react'
import blogs from './blogs.module.css'
import { blog } from '../../components/utils/blog'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

function Blogs() {
  return (
    <div className={blogs.outer}>
        <div className={blogs.topSection}>
            <div className={blogs.texts}>
              <h1>Blogs</h1>
              <p>CoffeeKing</p>
            </div>
      </div>

      <div className={blogs.container}>
        <div className={blogs.left}>

          {blog.map((data)=>(
            <div className={blogs.lists}>
                    <img src={data.image} width={350}/>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>

                    <div className={blogs.view}>
                        <h1>25</h1>
                        <p>september <br />2017</p>
                        <div className={blogs.amount}>
                            <p><RemoveRedEyeOutlinedIcon />{data.view}</p>
                            <p><SmsOutlinedIcon />0</p>
                        </div>
                    </div>

                </div>
            
          ))}

        </div>

        <div className={blogs.right}>
          <div className={blogs.inner}>
            <h1>Categories</h1>
            <ul>
              <li>100% Arabica</li>
              <li>Aroma bar</li>
              <li>Coffee aroma</li>
              <li>Coffee market</li>
              <li>Coffee shop</li>
              <li>Columbian coffee</li>
              <li>Espresso</li>
            </ul>

            <h1>Archives</h1>
            <ul>
              <li>September 2017</li>
              <li>Augest 2017</li>
              <li>June 2017</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Blogs
