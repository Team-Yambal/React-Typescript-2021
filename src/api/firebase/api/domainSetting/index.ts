import { DomainSetting } from '../../../../app/models/DomainSetting'

export type Methods = {
  get: {
    query: {
      domain: string
    }
    resBody: DomainSetting
  }
}
