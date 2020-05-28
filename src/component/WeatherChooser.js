import React from 'react';
class WeatherChoose extends React.Component{
    constructor(props){
        super(props)
    }

render()
{
    return(
        <div>
            <button onClick={this.props.update(this.props.geo)}>{this.props.label}</button>
        </div>
    )
}
}
export default WeatherChoose;