import React from "react"
import Head from "./Head"
import Mainc from "./Mainc"
class App extends React.Component
{
    
    render()
    {
        return(
            <div className="whole">
                <Head />
                <Mainc />
            </div>
        )
    }
    
}
export default App