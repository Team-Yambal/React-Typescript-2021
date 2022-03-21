export type AsanaUser = {
  gid?: string
  email?: string
  name?: string
  photo?: {
    [key: string]: string
  }
  resourceType?: string
  workspaces: {
    gid: string
    name: string
    resourceType: string
  }[]
}
