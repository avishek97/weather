import {bindActionCreators} from 'redux'
const abc=(geo)=>(dispatch)=>{

    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.long}&appid=api_key`
      )
      .then(response=>response.json())
      .then(json=>{

      dispatch(xyz=>json.article)})
}


const xyz=(text)=>{
    return {type:"report",
    text:text}
}
export default xyz;