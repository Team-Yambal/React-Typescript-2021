import { AsanaAuthorizationCodeURL } from '../../../../../app/models/asana/authorizationCodeURL'

export type Methods = {
  get: {
    query: {
      uid: string
    }
    resBody: AsanaAuthorizationCodeURL
  }
}
