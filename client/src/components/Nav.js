import React from 'react';
import { Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Download from './Download';


function Nav(props) {
    return (
        <div>
            <div className="nav mt-5 ml-5 mr-5  flex justify-between content-center items-center flex-col">
                <div className="header">
                    <h1 className="text-3xl">YouTube MP3 downloader</h1>
                </div>
                <div className="links flex  mt-1 text-xl font-medium justify-between text-gray-500">
                    <a className="mr-3" href="http://github.com/yunggenius" target="_blank">Github</a>
                    <Link className="ml-3" to='/'>Home</Link>
                </div>
            </div>
            <hr className="mt-3 overflow" />
        </div>
    );
}

export default Nav;