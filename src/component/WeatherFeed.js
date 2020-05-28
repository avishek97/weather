import React from 'react';
class WeatherFeed extends React.Component{
    constructor(props){
        super(props)
    }

render()
{
    return(
        <div>
            {this.props.feed}
        </div>
    )
}
}
export default WeatherFeed;