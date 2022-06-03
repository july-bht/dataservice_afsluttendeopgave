import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../pages/Home'
import Vejret from '../pages/Vejret'
import Nyhedder from '../pages/Nyhedder'

import Haveservice from '../pages/Haveservice';
import Services from '../pages/Services';

const Navigation = () => {
    const navlinks = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Vejret',
            path: '/vejret'
        },
        {
            name: 'Nyheder',
            path: '/nyheder'
        },
        {
            name: 'Haveservice',
            path: '/haveservice'
        }
    ]
    return (
        <header>
            <Router>
                <nav className=' fixed-top absolute'>
                    <ul className='flex w-screen justify-end gap-5 p-5 text-gray-400'>
                        {navlinks.map(link => (
                            <li className=' hover:text-lime-600' key={link.name}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="vejret" element={<Vejret />} />
                    <Route path="nyhedder" element={<Nyhedder />} />
                    <Route path="haveservice" element={<Haveservice />} />
                    <Route path="services" element={<Services />} /> 
                </Routes>
            </Router>
        </header>
    )
}
export default Navigation