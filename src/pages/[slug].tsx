import React from 'react'
import PageTemplate, { PageTemplateProps } from '../templates/pages/PageTemplate'
import client from '../graphql/client'
import  {GET_PAGES, GET_PAGE_BY_SLUG} from '../graphql/querys'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

export default function Page({heading, body}: PageTemplateProps) {
  const router = useRouter()

  //retorna um loading ou qualquer coisa enquanto está sendo criado
  if (router.isFallback) {
    return null
  } 

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, {first: 3})
  
  const paths = pages.map(({ slug }) => ({
    params: {slug}
  }))
  console.log('paths',paths)
  return {paths, fallback: true}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, { slug: `${params?.slug}` })
  
  if(!page) return {notFound: true}
  console.log('page',page)
  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

