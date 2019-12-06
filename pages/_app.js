/**
 * Description: Root Application component
 * Author: Santi
 */

import NextApp from 'next/app'
import Router, { withRouter } from 'next/router'
import NProgress from 'nprogress'
import Layout from '../components/Layout'
import Error from 'next/error'
import Head from 'next/head'
import nookies from 'nookies'
import axios from 'axios'

// dev fix for css loader
if (process.env.NODE_ENV !== 'production') {
  Router.events.on('routeChangeComplete', () => {
    const path = '/_next/static/css/styles.chunk.css'
    const chunksSelector = `link[href*="${path}"]`
    const chunksNodes = document.querySelectorAll(chunksSelector)
    const timestamp = new Date().valueOf()
    chunksNodes[0].href = `${path}?${timestamp}`
  })
}

// UI loading top bar
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class AppWrapper extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    let collapsed = false
    let protocol =
      process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
    let redirect_uri = ''
    if (ctx.req) {
      redirect_uri = protocol + ctx.req.headers.host
    } else {
      redirect_uri = window.location.origin
    }

    if (!ctx.req) {
      // client-side
      collapsed = JSON.parse(sessionStorage.getItem('collapsed')) || false
    } else {
      const { collapsed: collapsedCookie } = nookies.get(ctx)
      if (collapsedCookie) {
        collapsed = JSON.parse(collapsedCookie)
      }
    }

    //request to categories
    const res = await axios.get('http://www.mocky.io/v2/5dea5ff5300000d23f2b0877')
    const categories = await res.data

    return { pageProps, collapsed, redirect_uri, categories }
  }

  render() {
    const { Component, pageProps, collapsed, router, categories } = this.props

    return (
      <>
        <Head>
          <title>Interviewx</title>
        </Head>
        {router.pathname !== '/_error' ? (
          <Layout collapsed={collapsed} categories={categories}>
            <Component {...pageProps} />
          </Layout>
        ) : (
            <Error statusCode="404" />
          )}
      </>
    )
  }
}

export default withRouter(AppWrapper)
