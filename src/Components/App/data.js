import Me from '../../assets/me.JPG';

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
};

export default datas;
