import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { CounterContainer } from './counter/CounterContainer'
import NewsContainer from './news/NewsContainer'
import { SampleForm } from './sampleForm/SampleForm'
import WeatherContainer from './weather/WeatherContainer'

export const Samples = () => {
  return (
    <>
      <Link to="/sample/counter">Counter</Link>
      <Link to="/sample/weather">Weather</Link>
      <Link to="/sample/news">News</Link>
      <Link to="/sample/form">Form</Link>
      <Switch>
        <Route exact path={'/sample/counter'}>
          <CounterContainer />
        </Route>
        <Route exact path={'/sample/weather'} children={<WeatherContainer />} />
        <Route exact path={'/sample/news'} children={<NewsContainer />} />
        <Route exact path={'/sample/form'} children={<SampleForm />} />
        <Route>Notfound</Route>
      </Switch>
    </>
  )
}
