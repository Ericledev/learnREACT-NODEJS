import { findAllByTitle, render } from "@testing-library/react";
import React from "react";

class ConditionOutput extends React.Component {
    state = {
        showAge: false
    }
    handleShowHide = () => {
        this.setState({
            showAge: !this.state.showAge
        })
    }
    
    handleDelete = (id) => {
       if (window.confirm('Are you sure you wanna delete: ' + id.add))
           this.props.deleteArrow(id)
        
    }
    render() {
        let { propResume } = this.props
        let { showAge } = this.state
        console.log("check porpResume: ", propResume)
        //let { showAge } = this.state
        //let check = showAge === true ? "showAge=true" : "showAge=false"
        
        return (
            <>

                {showAge === false ?
                    < div >
                        <button onClick={() => this.handleShowHide()}>show</button>
                    </div>
                    :
                    <>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                        <div className="age-list">{
                            propResume.map((item, index) => {
                                if (item.age > 7) {
                                    return (
                                        <div key={item.id}>
                                            {item.add}-{item.age} <> </> <span onClick={()=>this.handleDelete(item)}>Delete</span>
                                        </div>
                                    )
                                }

                            })
                        }

                        </div>
                    </>
                }
            </>

        )
    }
}
export default ConditionOutput

