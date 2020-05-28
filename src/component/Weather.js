import React from 'react';
import WeatherFeed from './WeatherFeed'
import xyz from './reducer/functions'
import {store} from '../index';
import { connect } from 'react-redux'

import {bindActionCreators} from 'redux'
import WeatherChooserlist from './WeatherChooserlist'
class Weather extends React.Component{
    constructor(props){
        super(props)
    }
    update=(event)=>{
        let a=event.target.getAttribute("geo")
        this.props.abc(a)
    }

render()
{
    return(
        <div>
            <WeatherChooserlist getLatLog={this.update}></WeatherChooserlist>
            <WeatherFeed feed={this.props.report}></WeatherFeed>
        </div>
    )
}
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({xyz},dispatch)
}
const mapStateToProps=(state)=>{
    return{
        report:state.arr
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Weather);

