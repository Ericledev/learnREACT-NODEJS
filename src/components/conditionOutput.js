// import { findAllByTitle, render } from "@testing-library/react";
// import React from "react";

// class ConditionOutput extends React.Component {
//     state = {
//         showAge: false
//     }
//     handleShowHide = () => {
//         this.setState({
//             showAge: !this.state.showAge
//         })
//     }
//     render() {
//         let { propResume } = this.props
//         let { showAge } = this.state
//         console.log("check porpResume: ", propResume)
//         //let { showAge } = this.state
//         //let check = showAge === true ? "showAge=true" : "showAge=false"
//         return (
//             <>

//                 {showAge === false ?
//                     < div >
//                         <button onClick={() => this.handleShowHide()}>show</button>
//                     </div>
//                     :
//                     <>
//                         <div>
//                             <button onClick={() => this.handleShowHide()}>Hide</button>
//                         </div>
//                         <div className="age-list">{
//                             propResume.map((item, index) => {
//                                 if (item.age > 7) {
//                                     return (
//                                         <div key={item.id}>
//                                             {item.add}-{item.age}
//                                         </div>
//                                     )
//                                 }

//                             })
//                         }

//                         </div>
//                     </>
//                 }
//             </>

//         )
//     }
// }
// export default ConditionOutput

import { findAllByTitle, render } from "@testing-library/react";
import React from "react";

class ConditionOutput extends React.Component {

    // handleShowHide = () => {
    //     showAge = !showAge
    //     console.log("status of myState.showAge: ", showAge)

    // }
    constructor(props) {
        super(props);
        this.abc = false;
    }
    //abc = Boolean(false)
    handleShowHide = () => {
        this.abc = !this.abc
    }
    render() {
        //let abc = false
        let { propResume } = this.props
        //let showAge = this.myState.showAge
        console.log("check porpResume: ", propResume)
        console.log("check abc out of return():", this.abc)
        //let { showAge } = this.state
        //let check = showAge === true ? "showAge=true" : "showAge=false"

        return (
            <>
                {console.log("check abc out of onclick:", this.abc)}
                {this.abc === false ?
                    < div >
                        <button onClick={() => {
                            this.abc = !this.abc
                            console.log("Check abc click Show", this.abc)
                        }}>show</button>
                    </div>
                    :
                    <>
                        <div>
                            <button onClick={() => {
                                this.abc = !this.abc
                                console.log("Check abc click Hide", this.abc)
                            }
                            }>Hide </button>
                        </div>
                        <div className="age-list">{
                            propResume.map((item, index) => {
                                if (item.age > 7) {
                                    return (
                                        <div key={item.id}>
                                            {item.add}-{item.age}
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