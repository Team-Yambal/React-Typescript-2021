import { DBUser } from '../../../../app/models/DBUser'

export type Methods = {
  post: {
    reqHeaders: { Authorization: string }
    reqBody: {
      uid: string
    }
    resBody: DBUser
  }
}
