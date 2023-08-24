import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Appmovie.module.scss'

const Appmovie = ({item}) => {
    const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280";
  return (
    <>
        <div key={item.id} className={styles.movieInfo}>
        <Link to={{ pathname: `/${item.id}`, state: { itemData: item.title } }}><img src={IMG_BASE_URL + item.poster_path} alt="poster" className={styles.movieImg}/></Link>
        <div className={styles.movieText}>
          <h4>title: {item.title}</h4>
          <h4>release_date: {item.release_date}</h4>
          <h4>vote_average: {item.vote_average}</h4>
        </div>
      </div>
    </>
  )
}

export default Appmovie