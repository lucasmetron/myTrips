import React from 'react'
import AboutTemplate from '../templates/About/AboutTemplate'
import client from '../graphql/client'
import  {GET_PAGES} from '../graphql/querys'

export default function About () {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log('teste',pages)
  return {
    props: {}
  }
}