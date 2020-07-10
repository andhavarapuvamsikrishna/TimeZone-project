import React from "react";
import countriesData from "./countriesData.js";
import { fn } from "moment";
class Mainc extends React.Component {
  constructor()
  {
    super()
    this.state={
      countries:countriesData,
      tt:"",
      tablevt:"hidden",
      matter:""
    }
    this.fn1=this.fn1.bind(this)
  }
  
  fn1()
  {
    let select=document.getElementById("selectbox")
    let v=select.options[select.selectedIndex].value
   // alert(typeof(v))
    let ar=this.state.countries.filter(function(item)
    {
       if(item.name===v)
        return true
    })
    console.log(ar)//array with one object{name:"jkk",code:"hk",timezones:["hbbk","bbk"]}

    console.log(ar[0].timezones[0])
    var tz=ar[0].timezones[0]
    console.log(typeof(tz)+"...")
    console.log(typeof(ar))
    let date=new Date()
    var stime=date.toLocaleString("en-us",{timeZone:tz});
    this.setState({tt:stime,matter:"The current date and time of "+v+":"})
    return v
  }
  render() {
    
    
    return (
      <div className="mm">
        <select id="selectbox" >
          {this.state.countries.map(item =>(
            <option value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <br />
        <button onClick={this.fn1} id="but">display time</button>
        <br />
        
          <p>{this.state.matter} {this.state.tt}</p>
         
      </div>

    );
  }
}
export default Mainc;
