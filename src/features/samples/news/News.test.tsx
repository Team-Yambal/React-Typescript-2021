import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { NewsItem } from './NewsItem'

const article = {
  source: {
    id: undefined,
    name: 'Automaton-media.com',
  },
  author: 'Aki Nogishi',
  title:
    '『FF14』第69回PLL新情報まとめ。日本データセンター再編により、光の戦士たちはこの夏“クラス替え” - AUTOMATON',
  description:
    'スクウェア・エニックスは3月4日、『ファイナルファンタジーXIV』の新情報を配信する生放送「第69回プロデューサーレターLIVE」を配信した。その内容をまとめよう。',
  url: 'https://automaton-media.com/articles/newsjp/20220304-194356/',
  urlToImage:
    'https://automaton-media.com/wp-content/uploads/2022/03/20220304-194356-header.jpg',
  publishedAt: '2022-03-04T13:32:13Z',
  content:
    '34XIVFF1469LIVE6.1Part16.16.16.04\r\nNPC\r\n69PLL \r\n6.0\r\n6.156.15UI\r\n6.16.156.1x\r\n4NPC6.1NPC6.12.0\r\nNPC\r\nPLL81\r\n84AI344 1\r\n3\r\n6.0121\r\n6.126.115.33.3\r\nPvPPvP6.1PvPPvPUIPLL\r\nPLL\r\nUI6.06.16.1\r\n206.2\r\n6.18FC… [+122 chars]',
}

test('NewsItem', () => {
  // Snapshot
  const component = renderer.create(<NewsItem article={article} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // Dom testing
  render(<NewsItem article={article} />)
  const count = screen.getByText(/Aki Nogishi/i)
  expect(count).toBeTruthy()
})
