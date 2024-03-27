import axios from 'axios'
import './App.css'
import { useState } from 'react'
import { useRef } from 'react'
import { Photo } from './Photo'

export const ImageStore = () => {
    const [images,setImages]=useState([]);
    let page =1;
    const keyword = useRef(null);
        const fetchAllImages=async()=>{
            
            const {data}=await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword.current.value}&client_id=AfzS9UUa89VbltEgQWpyqiLngqESxSy_7neOxXTb_7U`)
            setImages(data.results);
            console.log(data.results[0].urls.small)
        }
  return (
    <div>
        <div className='container'>
            <input ref={keyword} type="text" placeholder='which image are you searching for'/>
            <button onClick={fetchAllImages} >Search</button>
            

        </div>
        <div className='containero '>
        {
            images.map((item,index)=><Photo Linko={item.urls.small} key={index} />)
        }
        </div>
        
    </div>
  )
}
