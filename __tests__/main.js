import { expandKeys } from 'main'

describe('expandKeys', () => {
  it('expands keys', () => {
    let expected = {
      hello: {
        world: 1,
        galaxy: 2
      },
      three: {
        dots: {
          deep: {
            son: {
              wow: true
            }
          }
        }
      },
      foo: 'bar'
    }
    let expanded = expandKeys({
      'hello.world': 1,
      'hello.galaxy': 2,
      'three.dots.deep.son': { wow: true },
      foo: 'bar'
    })
    expect(expanded).toEqual(expected)
  })
})
