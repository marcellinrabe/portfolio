export default function Skills() {
    return (
        <div id="skills" className="row justiy-content-center px-5 px-sm-0">
            <table className="col-11 col-md-8 border m-auto text-center">
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
                            <div className="d-flex flex-wrap row-gap-4">
                                <span>scss</span>
                                <span>Bootstrap</span>
                                <span>tailwindcss</span>
                            </div>
                        </td>
                        <td>responsive design</td>
                    </tr>
                    <tr>
                        <td>javascript</td>
                        <td>
                            <div className="d-flex flex-wrap row-gap-4">
                                <span>nodejs</span>
                                <span>reactjs</span>
                                <span>react-native</span>
                                <span>express-js</span>
                                <span>typescript</span>
                            </div>
                        </td>
                        <td>AJAX</td>
                    </tr>
                    <tr>
                        <td>php</td>
                        <td>
                            <div className="d-flex flex-wrap row-gap-4">
                                <span>laravel</span>
                                <span>livewire</span>
                                <span>phpmailer</span>
                            </div>
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
                    <tr>
                        <td>...</td>
                        <td>-</td>
                        <td>API</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
