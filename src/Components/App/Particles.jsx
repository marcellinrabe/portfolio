import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Particle({ children }) {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div className="position-relative">
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                className="position-absolute"
                options={{
                    fpsLimit: 120,
                    background: {
                        value: 'transparent',
                    },
                    particles: {
                        color: {
                            value: '#000',
                        },
                        links: {
                            color: '#000',
                            distance: 150,
                            enable: true,
                            opacity: 0.6,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 20,
                        },
                        opacity: {
                            value: 0.2,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: { min: 1, max: 4 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            {children}
        </div>
    );
}
