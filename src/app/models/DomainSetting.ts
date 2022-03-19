type SpreadSheetSummary = {
  title: string | null | undefined
  spreadsheetUrl: string | null | undefined
}

export type DomainSetting = {
  status: 'ok' | 'none' | 'error'
  domain?: string
  spreadsheet: {
    status: 'none' | 'checked' | 'error'
    id?: string
    summary?: SpreadSheetSummary
  }
}
