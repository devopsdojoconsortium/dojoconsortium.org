import Pages from '../../../__mocks__/Pages.mock'
import buildMenuHierarchy from './buildMenuHierarchy'

describe('Creating content menuItems', () => {
  const { nodes } = Pages.allMarkdownRemark
  const menuItems = buildMenuHierarchy(nodes)

  it('should contain the home page', () => {
    expect(menuItems[0].name).toEqual('Home')
  })
  it('should sort the top level menus after "Home"', () => {
    for (let index = 0; index < menuItems.length; index++) {
      if (index > 1) {
        expect(menuItems[index - 1].name < menuItems[index].name).toEqual(true)
      }
    }
  })
})
