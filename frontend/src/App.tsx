import React from 'react';
import DefaultRouter from './routers/DefaultRouter';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import CreateAccountPage from './pages/CreateAccount';
import UserHomePage from './pages/UserHome';
import ChallengeHomePage from './pages/ChallengeHome';
import SubmissionHomePage from './pages/SubmissionHome';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '*', component: NotFoundPage },
  { path: '/create-account', component: CreateAccountPage },
  { path: '/user-home', component: UserHomePage },
  { path: '/challenge-home', component: ChallengeHomePage },
  { path: '/submission-home', component: SubmissionHomePage },
];

function App() {
  return (
    <DefaultRouter routes={routes} />
  );
}

export default App;
