import React from 'react';
import ReactDOM from 'react-dom';
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
        fetch("favourites.json")
            .then(results => results.json())
            .then(data => this.setState({ humans: data }))
            .catch(console.log);

        fetch("mentions.json")
            .then(results => results.json())
            .then(data => this.setState({ mentions: data }))
            .catch(console.log);
    }

    handleClick(vowel) {
        this.setState({ vowelFilter: vowel });
    }

    render() {
        return (
            <div className='content'>
                <div className='headers'>
                    <h2>Supervocalics</h2>
                    <h1>Known Human Beings</h1>
                </div>

                <div className='vowel-filters'>
                    <h4 className='vowel-filters-label'>First vowel:</h4>
                    {['A', 'E', 'I', 'O', 'U'].map(
                        vowel => <button
                            className={"vowel-button" + (this.state.vowelFilter === vowel ? " active-vowel-button" : "")}
                            key={vowel}
                            vowel={vowel}
                            onClick={() => this.handleClick(vowel)}
                        >{vowel}</button>
                    )}
                </div>

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
                
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);