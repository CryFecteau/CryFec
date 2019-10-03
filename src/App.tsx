import React, { Component } from 'react';
import { HomePage } from './main-components/home-page/HomePage';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from "history";
import { Bio } from './components/bio/Bio';
import { AppLayout } from './AppLayout';
import { StartPage } from './main-components/start-page/StartPage';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Contacts } from './components/contacts/Contacts';
import { Quit } from './main-components/quit-page/Quit';
import './App.scss';
export interface IAppProps {
}
export interface IAppState {
}

export class App extends Component<IAppProps, IAppState> {
  public render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/quitter" component={Quit} />
          <AppLayout>
            <Route path="/home" exact component={HomePage} />
            <Route path="/about" exact component={Bio} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contacts" exact component={Contacts} />
          </AppLayout>
        </Switch>
      </Router>
    );
  }
}
