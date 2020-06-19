import React from 'react'

export default class VowelFilters extends React.Component {
    render() {
        return (
            <div className='vowel-filters'>
                <h4 className='vowel-filters-label'>Jump to:</h4>
                {['A', 'E', 'I', 'O', 'U'].map(
                    vowel => <button
                        className={"vowel-button" + (this.state.vowelFilter === vowel ? " active-vowel-button" : "")}
                        key={vowel}
                        vowel={vowel}
                        onClick={() => this.handleClick(vowel)}
                    >{vowel}</button>
                )}
            </div>
        )
    }
}
