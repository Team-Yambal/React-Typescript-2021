import { AsanaAuthorizationCodeURL } from '../../../../app/models/AsanaAuthorizationCodeURL'

export type Methods = {
  get: {
    query: {
      state: string
    }
    resBody: AsanaAuthorizationCodeURL
  }
}
