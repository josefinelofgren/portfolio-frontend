import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';

export const SocialMedia = [
    {
        title: 'LinkedIn',
        path: '/linkedIn',
        src: 'https://www.linkedin.com/in/josefinelofgren/',
        cName: 'sm-icon',
        icon: <FaIcons.FaLinkedinIn />
    }, 
    {
        title: 'Github',
        path: 'github', 
        src: 'https://github.com/josefinelofgren',
        cName: 'sm-icon',
        icon: <FaIcons.FaGithub />
    },
    {
        title: 'Email',
        path: '/email', 
        src: 'mailto:hello@josefinelofgren.com',
        cName: 'sm-icon',
        icon: <SiIcons.SiMailDotRu />
    },
    {
        title: 'Phone',
        path: 'phone',
        src: 'tel:+46767988105',
        cName: 'sm-icon',
        icon: <MdIcons.MdPhoneIphone/>
    }
]

export default SocialMedia;
