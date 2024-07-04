import React from 'react'

const Home = React.lazy(
    () => import('./../pages/Home/home'),
)
const Blog = React.lazy(
    () => import('./../pages/Blog/blog'),
)
const Work = React.lazy(
    () => import('./../pages/Work/work'),
)
const Achievements = React.lazy(
    () => import('./../pages/Achievements/Achievements'),
)
const Contact = React.lazy(
    () => import('./../pages/Contact/contact'),
)
    
const Preloader = React.lazy(
    () => import('./../components/preloader'),
)

var mainRoutes = [
    { path: '/home', name: 'Homepage', component: <Home /> },
    { path: '/channels/me', name: 'Homepage', component: <Home /> },
    { path: '/blog', name: 'Blog', component: <Blog /> },
    { path: '/work', name: 'Work', component: <Work /> },
    { path: '/achievements', name: 'Achievements', component: <Achievements /> },
    { path: '/contact', name: 'Contact', component: <Contact /> },
    { path: '/preloader', name: 'Preloader', component: <Preloader /> },
]

export default mainRoutes;