import React from 'react'
import blog from './blog.module.css'
import img1 from '../../Images/imgi_25_blog1-770x570.jpg'
import img2 from '../../Images/imgi_26_blog2-770x570.jpg'
import img3 from '../../Images/imgi_27_blog3-770x570.jpg'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

function Blog() {
  return (
    <div className={blog.outerSection}>
        <div className={blog.container}>
            <div className={blog.title}>
            <h4>Our Blog</h4>
            <h2>Recent Posts</h2>
            </div>
            <div className={blog.lists}>
                <div className={blog.fs}>
                    <img src={img1} width={350}/>
                    <h1>History of coffee</h1>
                    <p>Coffee’s origins trace back to Ethiopia, where it was first discovered for its energizing effect. From ancient Arabia to modern cafés, coffee has grown into a global tradition that connects people across cultures.</p>

                    <div className={blog.view}>
                        <h1>25</h1>
                        <p>september <br />2017</p>
                        <div className={blog.amount}>
                            <p><RemoveRedEyeOutlinedIcon />3,560</p>
                            <p><SmsOutlinedIcon />0</p>
                        </div>
                    </div>

                </div>
                <div className={blog.sc}>
                    <img src={img2} width={350}/>
                    <h1>About Americano Coffee</h1>
                    <p>The Americano is made by adding hot water to espresso, giving it a smoother, milder flavor. Loved for its balance and simplicity, it’s a timeless choice for coffee lovers.</p>
                    <div className={blog.view}>
                        <h1>25</h1>
                        <p>september <br />2017</p>
                        <div className={blog.amount}>
                            <p><RemoveRedEyeOutlinedIcon />5,266</p>
                            <p><SmsOutlinedIcon />0</p>
                        </div>
                    </div>

                </div>
                <div className={blog.tr}>
                    <img src={img3} width={350}/>
                    <h1>Coffee Roasts Guide</h1>
                    <p>From light to dark, each roast offers a unique taste — light roasts are bright, medium are balanced, and dark roasts are bold with rich, smoky notes.</p>

                    <div className={blog.view}>
                        <h1>25</h1>
                        <p>september <br />2017</p>
                        <div className={blog.amount}>
                            <p><RemoveRedEyeOutlinedIcon />3,165</p>
                            <p><SmsOutlinedIcon />0</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Blog
