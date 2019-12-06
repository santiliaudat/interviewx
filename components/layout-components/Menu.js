/**
 * Description: Drawer's menu list
 * Author: Santi
 */

import { Menu, Icon } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default ({ style, closeDrawer, categories }) => {
  const router = useRouter()
  const currentPath = router.route
  let selectedKeys = []

  console.log(categories)

  for (let i = categories.length - 1; i >= 0; i--) {
    if (currentPath.includes(categories[i].name)) {
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
        // router.push(key.name)
      }}
    >
      {categories.map(i =>
        <Menu.Item key={i.id}>
          <Link  href="/[name]" as={`/tech?name=${i.name}`}>
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
