import React from 'react';
import ReactDOM from 'react-dom';
import Papa from 'papaparse';
import KnownHumanBeing from './KnownHumanBeing';
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vowelFilter: 'A',
            humans: [],
            mentions: []
        }
    }

    componentDidMount() {
        const favourites = require('fs');
        Papa.parse('./favourites.csv', {
            download: true,
            complete: results => this.setState({humans: results.data}),
            header: true
        });

        Papa.parse('./justamention.csv', {
            download: true,
            complete: results => this.setState({mentions: results.data}),
            header: true
        });
    }

    handleClick(vowel) {
        this.setState({ vowelFilter: vowel });
    }

    render() {
        return (
            <div>
                <header id='top'>
                    <div className='content'>
                        <div className='headers'>
                            <a class='beyond-wordplay-link' href='http://beyondwordplay.com'>
                                <img class='beyond-wordplay-logo' src='./images/beyondwordplaylogo.png'></img>
                            </a>
                            <h1>Known Human Beings</h1>
                            <h3>Supervocalic People for Every Permutation</h3>
                        </div>

                        <div className='vowel-filters'>
                            <h4 className='vowel-filters-label'>Jump to:</h4>
                            {['A', 'E', 'I', 'O', 'U'].map(
                                vowel => <a
                                    className={"vowel-button" + (this.state.vowelFilter === vowel ? " active-vowel-button" : "")}
                                    key={vowel}
                                    vowel={vowel}
                                    onClick={() => this.handleClick(vowel)}
                                >{vowel}</a>
                            )}
                        </div>
                    </div>
                </header>
                <div className='content'>
                    { this.state.humans.filter(human => human.vowels.startsWith(this.state.vowelFilter)).map(
                        human => <KnownHumanBeing
                            {... human}
                            key={ human.name }
                            mentions={this.state.mentions.filter(
                                mention => mention.vowels === human.vowels
                            )}
                        />
                    )}
                </div>
                
                <footer>
                    <div className='content'>
                        <div className='vowel-filters bottom-vowel-filters'>
                            <h4 className='vowel-filters-label'>Jump to:</h4>
                            {['A', 'E', 'I', 'O', 'U'].map(
                                vowel => <a
                                    href="#top"
                                    className={"vowel-button" + (this.state.vowelFilter === vowel ? " active-vowel-button" : "")}
                                    key={vowel}
                                    vowel={vowel}
                                    onClick={() => this.handleClick(vowel)}
                                >{vowel}</a>
                            )}
                        </div>
                    </div>
                </footer>
            </div> 
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);