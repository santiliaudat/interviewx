/**
 * Description: Title and logo of page
 * Author: Santi
 */

import styled from 'styled-components'
import Link from 'next/link'

export const Logo = styled.img`
  display: inline-block;
  height: 28px;
  vertical-align: middle;
`

const Title = styled.div`
  display: inline-block;
  color: white;
  font-weight: 600;
  font-size: 20px;
  margin-left: 12px;
  font-family: 'Arial';
  vertical-align: middle;
`

const TitleWrapper = styled.div`
  position: relative;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  transition: all 0.3s;
  background: #001529;
`

export default () => (
  <TitleWrapper>
    <Link href="/">
      <a style={{ display: 'inline-block' }}>
        <Logo src="/static/x.png" alt="logo" />
        <Title>INTERVIEWX´s</Title>
      </a>
    </Link>
  </TitleWrapper>
)
