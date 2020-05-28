const initialArray={
    arr:[]
}
  const getReport=(state=initialArray,action)=>{
     switch(action.type)
     {
         case "report":
          return{
              ...state,
              arr:action.text
          }
     }
 }
 export default getReport;