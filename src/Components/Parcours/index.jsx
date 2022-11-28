import Window from './Window';
import Onglet from './Onglet';
import Line from '../App/Line';

export default function Parcours() {
    const onglets = [
        {
            key: 1,
            title: 'Scolaire',
            content: (
                <Onglet>
                    <div>Parcours scolaire</div>
                </Onglet>
            ),
        },
        {
            key: 2,
            title: 'Professionnel',
            content: (
                <Onglet>
                    <div>Parcours professionnel</div>
                </Onglet>
            ),
        },
    ];
    return (
        <div id="parcours">
            <div className="row justify-content-center">
                <Window onglets={onglets} />
            </div>
            <Line />
        </div>
    );
}
