import React from 'react';

export default class JustAMention extends React.Component {
    render() {
        return (
            <div className="mentioned-human">
                <div className="mentioned-image">
                    <img src={`/images/${this.props.name}.jpg`} alt={this.props.name}></img>
                </div>
                <div className='mentioned-info'>
                    <h4>{this.props.name}</h4>
                    <h4 className="mentioned-subtitle">{this.props.subtitle}</h4>
                </div>
            </div>
        )
    }
}