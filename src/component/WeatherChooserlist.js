import React from 'react';
import WeatherChoose from './WeatherChooser'
class WeatherChooserlist extends React.Component{
    constructor(props){
        super(props)
       
    }

render()
{
    return(
        <div>
            <WeatherChoose update={this.props.getLatLog} geo={{lat:"22.5726",long:"88.3639"}} label="kolkata"></WeatherChoose>
            <WeatherChoose update={this.props.getLatLog} geo={{lat:"12.9716",long:"77.5946"}} label="Banglore"></WeatherChoose>
            <WeatherChoose update={this.props.getLatLog} geo={{lat:"15.2993",long:"74.1240"}} label="Goa"></WeatherChoose>
            <WeatherChoose update={this.props.getLatLog} geo={{lat:"31.1048",long:"77.1734"}} label="Himachal Pradesh"></WeatherChoose>
        </div>
    )
}
}
export default WeatherChooserlist;