import Me from '../../assets/me.JPG';
import Keyboard from '../../assets/keyboard-light.gif';

const datas = {
    user: {
        name: 'RABE',
        first: 'Marcellin',
        picture: {
            src: Me,
            alt: 'cover',
        },
        post: 'Intégrateur web',
        desc: `Etudiant en IT, plus en aisance dans le domaine du web.
        Actuellement je suis en recherche d'alternance, ainsi que toute
        opportunité qui sont bien sûr de la bienvenue
            `,
        externalLinks: [
            {
                key: 'facebook-link',
                url: 'https://www.facebook.com/rabemarcellin',
                icon: ['fab', 'facebook'],
                color: 'text-primary',
                label: 'Facebook',
            },
            {
                key: 'linkedin-link',
                url: 'https://www.linkedin.com/marcellinrabe',
                icon: ['fab', 'linkedin'],
                color: 'text-linkedin',
                label: 'Linkedin',
            },
            {
                key: 'github-link',
                url: 'https://www.github.com/marcellinrabe',
                icon: ['fab', 'github'],
                color: 'text-dark',
                label: 'Github',
            },
        ],
    },
    Header: {
        navlinks: [
            {
                key: 'parcours',
                href: '#parcours',
                label: 'parcours',
            },
            {
                key: 'skills',
                href: '#skills',
                label: 'compétences',
            },
            {
                key: 'works',
                href: '#works',
                label: 'réalisations',
            },
            {
                key: 'contact',
                href: '#contact',
                label: 'me contacter',
            },
        ],
    },
    Cover: {
        greeting: 'Tongasoa',
    },
    About: {
        name: 'RABE',
        firstName: 'Marcellin',
        img: {
            src: Me,
            alt: 'cover',
        },
        biblio: `Etudiant en IT, plus en aisance dans le domaine du web.
        Actuellement je suis en recherche d'alternance, ainsi que toute
        opportunité qui sont bien sûr de la bienvenue
            `,
        location: {
            iconClass: ['fas', 'map-marker-alt'],
            label: 'Amboditsiry, Antananarivo',
        },
        mobileNumber: {
            iconClass: ['fas', 'mobile'],
            label: '+261 34 93 946 98',
        },
        socialNavlink: {
            datas: [
                {
                    key: 'linkedin',
                    iconClass: ['fas', 'globe'],
                    label: 'Linkedin',
                    profileName: 'RABE Marcellin',
                    link: 'https://www.linkedin.com/marcellinrabe',
                },
                {
                    key: 'github',
                    iconClass: ['fas', 'globe'],
                    label: 'Github',
                    profileName: 'RABE Marcellin',
                    link: 'https://www.github.com/marcellinrabe',
                },
                {
                    key: 'facebook',
                    iconClass: ['fas', 'globe'],
                    label: 'Facebook',
                    profileName: 'Rabe Marcellin',
                    link: 'https://www.facebook.com/rabemarcellin',
                },
            ],
            cloneIcon: ['far', 'clone'],
            externalLinkIcon: ['fas', 'external-link-alt'],
        },
    },
    Parcours: [
        {
            id: 'scolaire',
            label: 'scolaire',
            datas: [],
        },
        {
            id: 'pro',
            label: 'professionnel',
            datas: [],
        },
    ],
    Skills: [
        {
            langage: 'html5',
            frameworks: [],
            techniques: [],
        },
        {
            langage: 'css3',
            frameworks: ['scss', 'bootstrap', 'tailwindcss'],
            techniques: ['responsive design'],
        },
        {
            langage: 'javascript',
            frameworks: [
                'jQuery',
                'nodejs',
                'reactjs',
                'react-native',
                'express-js',
                'typescript',
            ],
            techniques: ['AJAX'],
        },
        {
            langage: 'php',
            frameworks: ['laravel', 'livewire', 'phpmailer'],
            techniques: ['MVC Pattern'],
        },
        {
            langage: 'python',
            frameworks: ['tkinter', 'FastAPI'],
            techniques: ['GUI'],
        },
        {
            langage: '...',
            frameworks: [],
            techniques: ['API', 'POO'],
        },
    ],
    Works: [
        {
            id: 'project 1 id',
            project: 'Project 1',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quas fugit saepe iure ullam quaerat omnis, quos accusantium nemo
         quae quis.`,
            github_link: 'https://www.github.com/marcellinrabe/didy-folo',
            img: {
                src: Keyboard,
                alt: 'didy folo web view',
            },
        },
        {
            id: 2,
            project: 'Project 2',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Non perferendis, ducimus, exercitationem cumque obcaecati facere 
             totam quasi dignissimos, ut cum perspiciatis sunt aliquid impedit
              rem architecto autem eos inventore laboriosam!`,
            github_link: 'https://www.github.com/marcellinrabe/api-didy-folo',
            img: {
                src: Keyboard,
                alt: 'didy folo web view',
            },
        },
        {
            id: 3,
            project: 'Project 3',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             eum inventore soluta laborum ipsa dolore sapiente fugiat sed?
               eos deleniti dignissimos ipsa.`,
            github_link: 'https://www.github.com/marcellinrabe/api-didy-folo',
            img: {
                src: Keyboard,
                alt: 'didy folo web view',
            },
        },
    ],
};

export default datas;
