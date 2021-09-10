import React from 'react';
import * as CgIcons from 'react-icons/cg';
import * as SiIcons from 'react-icons/si';

export const SidebarData = [
    {
        title: 'What I do',
        path: 'prewords', 
        className: 'item',
        color: 'first',
        icon: <CgIcons.CgGirl/>
    }, 
    {
        title: 'Get to know me',
        path: 'about', 
        className: 'item',
        color: 'first',
        icon: <CgIcons.CgGirl/>
    }, 
    {
        title: 'Projects',
        path: 'projects', 
        className: 'item',
        color: 'second',
        icon: <CgIcons.CgWebsite/>
    }, 
    {
        title: "Let's talk",
        path: 'contact', 
        className: 'item',
        color: 'third',
        icon: <SiIcons.SiMailDotRu />
    }
]

export default SidebarData;