import React from 'react';

export const ProjectDataLeft = [
    {
        title: 'Calendar',
        undertitle: 'React & Firebase',
        description: 'An application where you can keep track of your tasks through a calendar. The app uses Firebase as a database.',
        linkSrc: 'https://josefinelofgren.github.io/newsletter-headless-frontend/', 
        device: 'web',
        imgSrc: <img src={require('../../images/calendar.png').default} className="project-img" alt="Project" />
    },
    {
        title: 'Webshop',
        undertitle: 'React & Firebase',
        description: 'Currently working on it...',
        linkSrc: '/', 
        device: 'phone',
        imgSrc: <img src={require('../../images/webshop.png').default} className="project-img" alt="Project" />
    }, 
    // {
    //     title: 'Newsletter',
    //     undertitle: 'Design, Front-end & Back-end',
    //     description: 'An application where you can create a new user, login and change newsletter subscription status. The app uses MongoDB as a database.',
    //     linkSrc: 'https://josefinelofgren.github.io/newsletter-headless-frontend/', 
    //     device: 'web',
    //     imgSrc: <img src={require('../../images/testimgweb.jpg').default} className="project-img" alt="Project" />
    // }
];

export const ProjectDataRight = [
    {
        title: 'Tasktracker',
        undertitle: 'React & Firebase',
        description: 'Currently working on it...',
        linkSrc: '/', 
        device: 'phone',
        imgSrc: <img src={require('../../images/tasktracker.png').default} className="project-img" alt="Project" />
    },
    {
        title: 'Pixel Art',
        undertitle: 'Javascript, Node.js & socket.io',
        description: 'Me and two other students built a real-time application where up to four players can chat, paint and play together.',
        linkSrc: 'https://gridpainter-josefinelofgren.herokuapp.com/', 
        device: 'web',
        imgSrc: <img src={require('../../images/pixel-art.png').default} className="project-img" alt="Project" />
    }
];
