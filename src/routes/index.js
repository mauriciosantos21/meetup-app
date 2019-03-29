import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Preferences from '../pages/preferences';
import Home from '../pages/home';
import Profile from '../pages/profile';
import NewMeetup from '../pages/newmeetup';
import Meetup from '../pages/meetup';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/preferences" component={Preferences} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/new" component={NewMeetup} />
      <Route exact path="/meetup" component={Meetup} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
