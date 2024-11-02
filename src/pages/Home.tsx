import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../constants/constants'

const Home = () => {
  return (
    <>
      <Main/>
      <Row title="Trending" fetchURL={requests.requestTrending}/>
      <Row title="Popular" fetchURL={requests.requestPopular}/>
      <Row title="TopRated" fetchURL={requests.requestTopRated}/>
      <Row title="Horror" fetchURL={requests.requestHorror}/>
      <Row title="UpComing" fetchURL={requests.requestUpcoming}/>
    </>
  )
}

export default Home
