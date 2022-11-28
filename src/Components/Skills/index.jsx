import Line from '../App/Line';

export default function Skills() {
    return (
        <div id="skills" className="vh-100 d-flex flex-column">
            <table className="w-75 border m-auto text-center">
                <thead>
                    <tr>
                        <th>Langages</th>
                        <th>Frameworks</th>
                        <th>Techniques</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>html5</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>css3</td>
                        <td>
                            <span>scss</span>
                            <span>tailwindcss</span>
                        </td>
                        <td>responsive design</td>
                    </tr>
                    <tr>
                        <td>javascript</td>
                        <td>
                            <span>nodejs</span>
                            <span>reactjs</span>
                            <span>react-native</span>
                            <span>express-js</span>
                            <span>typescript</span>
                        </td>
                        <td>AJAX</td>
                    </tr>
                    <tr>
                        <td>php</td>
                        <td>
                            <span>laravel</span>
                            <span>livewire</span>
                            <span>phpmailer</span>
                        </td>
                        <td>MVC Pattern</td>
                    </tr>
                    <tr>
                        <td>python</td>
                        <td>
                            <span>tkinter</span>
                            <span>FastAPI</span>
                        </td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <Line />
        </div>
    );
}
