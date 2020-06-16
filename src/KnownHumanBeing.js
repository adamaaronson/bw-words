import React from 'react';
import JustAMention from './JustAMention.js';

export default class KnownHumanBeing extends React.Component {
    render() {
        return (
            <div className="known-human-being" id="human-">
                <div className="human-header">
                    <h2 className="human-vowels">{this.props.vowels}</h2>
                </div>
                <div className="human-main">
                    <div className="favourite">
                        <div className="human-image">
                            <img src={`./images/${this.props.name}.jpg`} alt={this.props.name}></img>
                        </div>
                        <div className="human-info">
                            <h2><a href={this.props.link}>{this.props.name}</a></h2>
                            <h3>{this.props.subtitle}</h3>
                            <p>{this.props.blurb}</p>
                        </div>
                    </div>
                    { this.props.mentions.length > 0 && <h4 className="just-a-mention-header">Just a mention:</h4>}
                    <div className="just-a-mention">
                        {this.props.mentions && this.props.mentions.map(mention => (
                            <JustAMention {... mention} key={mention.name} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};