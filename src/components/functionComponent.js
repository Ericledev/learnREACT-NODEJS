import React from 'react'
//import { Value } from 'sass'

// class ChildComponent extends React.Component {

//     render() {
//         let { propFName, propLName, propResume } = this.props // props property is parameters from
//         return (                                              // parent component to ChildComponent
//             <div className="Resume">
//                 {
//                     propResume.map((item, index) => {
//                         return (
//                             <div key={item.id}>{item.add} - {item.age}</div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }
const FunctionChildComponent = (props) => {
    //console.log(">>>>>>>>>>> check child props", props)
    let { propResume } = props
    //console.log(">>>>>>>>>>> check child proResume", props)
    return (
        <div className="Resume">Get data from props of FunctionChildComponent:
            {
                propResume.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {item.add} - {item.age}</div>
                    )
                })
            }
        </div>
    )
}
export default FunctionChildComponent