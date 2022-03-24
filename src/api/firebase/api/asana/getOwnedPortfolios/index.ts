import { AsanaPortfolio } from '../../../../../app/models/asana/portfolio'

export type Methods = {
  post: {
    reqHeaders: { Authorization: string }
    reqBody: {
      uid: string
      workspaceGid: string
    }
    resBody: AsanaPortfolio[]
  }
}
