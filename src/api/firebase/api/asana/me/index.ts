import { AsanaUser } from '../../../../../app/models/asana/user'

export type Methods = {
  post: {
    reqHeaders: { Authorization: string }
    reqBody: {
      uid: string
    }
    resBody: AsanaUser
  }
}
