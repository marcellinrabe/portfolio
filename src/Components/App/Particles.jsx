import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Particle({ container }) {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            className="position-absolute top-0 w-100 h-100"
            container={container}
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
                        distance: 50,
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
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
                fullScreen: {
                    enable: false,
                },
            }}
        />
    );
}
