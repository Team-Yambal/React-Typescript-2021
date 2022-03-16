import { DomainSetting } from '../../../../app/models/DomainSetting'

export type Methods = {
  get: {
    query: {
      domain: string | null
    }
    resBody: DomainSetting
  }
  post: {
    reqBody: {
      domain: string
      sheetId: string
    }
    resBody: DomainSetting
  }
}
