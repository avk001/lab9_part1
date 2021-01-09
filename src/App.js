import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu'

const HomePage = lazy(() => import('./components/HomePage'));
const TimeAttackPage = lazy(() => import('./components/TimeAttackPage'));
const ForzaPage = lazy(() => import('./components/ForzaPage'));
const DriftPage = lazy(() => import('./components/DriftPage'));

function Page404(){
    return (
        <article className="article">
            <h1 className="article__title">Error 404</h1>
            <p className="article__paragraph">
                Страница не найдена
            </p>
        </article>

    )
}

function PageMain(){
    return (
        <article className="article">
            <h1 className="article__title">Page main</h1>
            <p className="article__paragraph">
                Page main
            </p>
        </article>
    )
}

export default function App() {
    return (
        <Router>
            <div>
                <Menu />
                <div className="page">
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Switch>
                            <Route exact  path="/Home" component={HomePage} />
                            <Route path="/drift" component={DriftPage} />
                            <Route path="/timeattack" component={TimeAttackPage} />
                            <Route path="/forza" component={ForzaPage} />

                            <Route exact path="/" component={PageMain} />

                            <Route path="*" component={Page404} />

                        </Switch>
                    </Suspense>
                </div>
            </div>
        </Router>

    );
}