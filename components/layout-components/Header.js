/**
 * Description: Header bar of page
 * Author: Santi
 */

import { Icon, Layout, Dropdown, Menu } from 'antd'
const { Header } = Layout
import styled from 'styled-components'
import { Logo } from './LogoTitle'
import Link from 'next/link'
import nookies from 'nookies'
import Router from 'next/router'

const TriggerBlock = styled.div`
  display: inline-block;
  height: 100%;
`

const StyledImageBlock = styled(TriggerBlock)`
  @media (min-width: 576px) {
    display: none !important;
  }

  padding-left: 24px;
  ${'' /* cursor: pointer; */}
`

const MobileLogo = styled(Logo)`
  vertical-align: -10px;
`

const HeaderBlock = styled(TriggerBlock)`
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
`

export default ({ collapsed, handleToggle }) => {
  return (
    <Header
      style={{
        background: '#fff',
        padding: 0,
        boxShadow: '0 1px 4px rgba(0,21,41,.08)',
        display: 'flex'
      }}
    >
      <Link href="/">
        <a>
          <StyledImageBlock>
            <MobileLogo src="/static/transparent-logo.png" alt="logo" />
          </StyledImageBlock>
        </a>
      </Link>

      <TriggerBlock>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={handleToggle}
          style={{
            fontSize: 20,
            verticalAlign: 'middle'
          }}
        />
      </TriggerBlock>
    </Header>
  )
}
