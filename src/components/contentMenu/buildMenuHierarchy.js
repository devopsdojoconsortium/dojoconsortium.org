import { v4 as uuid } from 'uuid'

const buildMenuHierarchy = contentList => {
  const menuEntry = (name, path, menus, navPriority) => ({
    name,
    linkRoute: path,
    menus: menus || [],
    navPriority: navPriority || 99,
    key: `${path}-${uuid()}`,
  })

  const menuItems = contentList.map(node => {
    const name = node.frontmatter.navTitle || node.frontmatter.title

    return menuEntry(
      name,
      node.fields.slug,
      node.frontmatter.menus,
      node.frontmatter.navPriority,
    )
  })

  const onlyUnique = (value, index, self) => self.indexOf(value) === index

  const parentMenuList = menuItems
    .map(node => (node.menus && node.menus.length ? node.menus : []))
    .flat()
    .filter(onlyUnique)
    .sort()

  const compareTitle = (a, b) => (a.name > b.name ? 1 : -1)
  const compareWeight = (a, b) => Number(a.navPriority) - Number(b.navPriority)

  const getMenuSubItems = menu =>
    menuItems
      .map(node => {
        if (node.menus && node.menus.length) {
          return node.menus.map(_menu => (_menu === menu ? node : undefined))
        }
        return []
      })
      .flat()
      .filter(item => item !== undefined)
      .sort(
        (obj1, obj2) => compareWeight(obj1, obj2) || compareTitle(obj1, obj2),
      )

  const parentMenu = parentMenuList.map(menu => ({
    name: menu,
    linkRoute: '',
    key: menu,
    subItems: getMenuSubItems(menu),
  }))

  const noChildren = menuItems.filter(
    item => !item.menus || item.menus.length === 0,
  )

  return [menuEntry('Home', '/')].concat(noChildren).concat(parentMenu)
}

export default buildMenuHierarchy
