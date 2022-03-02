import { News } from '../../../../app/models/News'

/*
https://newsapi.org/v2/everything?q=Apple&from=2022-03-02&sortBy=popularity&apiKey=API_KEY
*/

export type Methods = {
  get: {
    query: {
      category: string
      apiKey: string
      country: string
    }
    resBody: News
  }
}
