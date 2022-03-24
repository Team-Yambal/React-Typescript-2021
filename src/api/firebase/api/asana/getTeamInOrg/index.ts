import { AsanaTeam } from '../../../../../app/models/asana/team'

export type Methods = {
  post: {
    reqHeaders: { Authorization: string }
    reqBody: {
      uid: string
      workspaceGid: string
    }
    resBody: AsanaTeam[]
  }
}
