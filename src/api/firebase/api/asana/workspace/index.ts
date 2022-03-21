import { AsanaWorkspace } from '../../../../../app/models/asana/workspace'

export type Methods = {
  post: {
    reqHeaders: { Authorization: string }
    reqBody: {
      uid: string
      gid: string
    }
    resBody: AsanaWorkspace
  }
}
