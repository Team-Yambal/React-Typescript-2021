import { AsanaTeam } from '../../../../../app/models/asana/team'

export type Methods = {
  post: {
    reqHeaders: { Authorization: string }
    reqBody: {
      uid: string
      userGid: string
      orgGid: string
    }
    resBody: AsanaTeam[]
  }
}
