import { head, map } from 'ramda'
import { Identity } from 'ramda-fantasy'

var xs = Identity(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
var ex2 = map(head, xs)

test('Identity test', () => {
  expect(map(head, xs)).toEqual(Identity('do'))
})
