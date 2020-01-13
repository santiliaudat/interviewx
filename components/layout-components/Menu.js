/**
 * Description: Drawer's menu list
 * Author: Santi
 */

import { Menu, Icon } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default ({ style, closeDrawer, categories }) => {
  const router = useRouter()
  const currentPath = router.asPath
  let selectedKeys = ["0"]

  for (let i = categories.length - 1; i >= 0; i--) {
    if (currentPath.includes(categories[i].url)) {
      selectedKeys = [categories[i].id]
      break
    }
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      style={{ ...style, padding: '16px 0' }}
      onClick={({ key }) => {
        closeDrawer()
      }}
    >
      <Menu.Item key="0">
        <Link href="/" >
          <a>
            <Icon type="home" />
            <span>Home</span>
          </a>
        </Link>
      </Menu.Item>
      {categories.map(i =>
        <Menu.Item key={i.id}>
          <Link href={`/tech/${i.url}`}>
            <a>
              <Icon type={i.icon} />
              <span>{i.name}</span>
            </a>
          </Link>
        </Menu.Item>
      )}
    </Menu>
  )
}
