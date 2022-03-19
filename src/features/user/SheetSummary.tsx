import { x } from '@xstyled/styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import { DomainSetting } from '../../app/models/DomainSetting'

type SheetSummaryProps = {
  checked: boolean
  summary: DomainSetting['spreadsheet']['summary']
}

export const SheetSummary = ({ summary, checked }: SheetSummaryProps) => {
  return (
    <x.div>
      {summary && summary.spreadsheetUrl && (
        <x.a href={summary.spreadsheetUrl}>{summary.title}</x.a>
      )}
      <x.div>{checked ? '確認済み' : '未確認'}</x.div>
      <Link to="/domain">設定</Link>
    </x.div>
  )
}
