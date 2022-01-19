import React from 'react'
import PageTemplate from '../templates/pages/PageTemplate'
import client from '../graphql/client'
import  {GET_PAGES} from '../graphql/querys'
import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter()

  //retorna um loading ou qualquer coisa enquanto está sendo criado
  if (router.isFallback) {
    return null
  } 

  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, {first: 3})
  
  const paths = pages.map(({ slug } : any) => ({
    params: {slug}
  }))
  return {paths, fallback: true}
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log('teste',pages)
  return {
    props: {}
  }
}

