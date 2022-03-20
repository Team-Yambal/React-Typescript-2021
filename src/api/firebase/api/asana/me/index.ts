import { User } from '../../../../../app/models/asana/User'

export type Methods = {
  post: {
    reqHeaders: { Authorization: string }
    reqBody: {
      uid: string
    }
    resBody: User
  }
}
