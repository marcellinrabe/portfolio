import Me from '../../assets/me.JPG';

const datas = {
    Cover: {
        Menu: {
            navLinks: [
                {
                    key: 'a-propos',
                    href: '#about',
                    label: 'À propos',
                },
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
                    label: 'contact',
                },
            ],
        },
        textTitle: 'Tongasoa',
        textInfo: 'RABE Marcellin | Portfolio',
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
            cloneIcon: ['fas', 'clone'],
            externalLinkIcon: ['fas', 'external-link-alt'],
        },
    },
};

export default datas;
