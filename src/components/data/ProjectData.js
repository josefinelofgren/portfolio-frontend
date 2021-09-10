import React from 'react';

export const ProjectData = [
    {
        title: 'calendar with todo',
        side: 'left',
        backgroundColor: 'rgb(101, 117, 136)',
        textColor: '#fff',
        btnVariant: 'light',
        path:'calendar with todo',
        undertitle: 'React & Firebase',
        description: 'An application where you can keep track of your tasks through a calendar. The app is built with React and uses Firebase as a database.',
        linkSrc: 'https://josefinelofgren.github.io/newsletter-headless-frontend/', 
        device1: 'web',
        device2: 'web',
        device3: 'phone',
        imgSrc1: <img src={require('../../images/calendar1.png').default} className="project-img" alt="Project" />,
        imgSrc2: <img src={require('../../images/calendar2.png').default} className="project-img" alt="Project" />,
        imgSrc3: <img src={require('../../images/calendar3.png').default} className="project-img" alt="Project" />,
        imgSide1: 'left',
        imgSide2: 'right',
        imgSide3: 'left'
    },
    {
        title: 'webshop',
        backgroundColor: 'rgb(190, 88, 81)',
        textColor: '#fff',
        btnVariant: 'light',
        side: 'left',
        path:'webshop',
        undertitle: 'React & Firebase',
        description: 'Currently working on it...',
        linkSrc: '/', 
        device1: 'phone',
        device2: 'web',
        device3: 'phone',
        device4: 'phone',
        device5: 'web',
        imgSrc1: <img src={require('../../images/webshop1.png').default} className="project-img" alt="Project" />,
        imgSrc2: <img src={require('../../images/webshop2.png').default} className="project-img" alt="Project" />,
        imgSrc3: <img src={require('../../images/webshop3.png').default} className="project-img" alt="Project" />,
        imgSrc4: <img src={require('../../images/webshop4.png').default} className="project-img" alt="Project" />,
        imgSrc5: <img src={require('../../images/webshop5.png').default} className="project-img" alt="Project" />,
        imgSide1: 'left',
        imgSide2: 'right',
        imgSide3: 'left'
    },
    {
        title: 'tasktracker',
        backgroundColor: 'rgb(71, 133, 109) ',
        textColor: '#fff',
        btnVariant: 'light',
        side: 'right',
        path:'tasktracker',
        undertitle: 'React & Firebase',
        description: 'Currently working on it...',
        linkSrc: '/', 
        device1: 'phone',
        device2: 'web',
        device3: 'phone',
        imgSrc1: <img src={require('../../images/tasktracker1.png').default} className="project-img" alt="Project" />,
        imgSrc2: <img src={require('../../images/tasktracker2.png').default} className="project-img" alt="Project" />,
        imgSrc3: <img src={require('../../images/tasktracker1.png').default} className="project-img" alt="Project" />,
        imgSide1: 'left',
        imgSide2: 'right',
        imgSide3: 'left'
    },
    {
        title: 'pixel art',
        backgroundColor: 'rgb(255, 255, 228)',
        textColor: '#000',
        btnVariant: 'dark',
        side: 'right',
        path:'pixel art',
        undertitle: 'Javascript, Node.js & socket.io',
        description: 'Me and two other students built a real-time application where up to four players can chat, paint and play together.',
        linkSrc: 'https://gridpainter-josefinelofgren.herokuapp.com/', 
        device1: 'web',
        device2: 'web',
        device3: 'phone',
        imgSrc1: <img src={require('../../images/pixelart1.png').default} className="project-img" alt="Project" />,
        imgSrc2: <img src={require('../../images/pixelart2.png').default} className="project-img" alt="Project" />,
        imgSrc3: <img src={require('../../images/pixelart3.png').default} className="project-img" alt="Project" />,
        imgSide1: 'left',
        imgSide2: 'right',
        imgSide3: 'left'
    }
   
];

