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
  let selectedKeys = ["home"]

  for (let i = categories.length - 1; i >= 0; i--) {
    if (currentPath.includes(categories[i].data.url)) {
      selectedKeys = [categories[i].data.name]
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
      <Menu.Item key="home">
        <Link href="/" >
          <a>
            <Icon type="home" />
            <span>Home</span>
          </a>
        </Link>
      </Menu.Item>
      {categories.map(i =>
        <Menu.Item key={i.data.name}>
          <Link href={`/tech/${i.data.url}`}>
            <a>
              <Icon type={i.data.icon} />
              <span>{i.data.name}</span>
            </a>
          </Link>
        </Menu.Item>
      )}
    </Menu>
  )
}
