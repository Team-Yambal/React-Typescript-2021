import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { Navs } from '../../atmicComponents/Navs'
import { CounterContainer } from './counter/CounterContainer'
import NewsContainer from './news/NewsContainer'
import { SampleForm } from './sampleForm/SampleForm'
import WeatherContainer from './weather/WeatherContainer'

export const Samples = () => {
  return (
    <>
      <Navs
        navItems={[
          <Navs.NavItem key="sampleCounter" active>
            <Link to="/sample/counter">Counter</Link>
          </Navs.NavItem>,
          <Navs.NavItem key="sampleWeather">
            <Link to="/sample/weather">Weather</Link>
          </Navs.NavItem>,
          <Navs.NavItem key="sampleNews">
            <Link to="/sample/news">News</Link>
          </Navs.NavItem>,
        ]}
        tabs
      />
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
