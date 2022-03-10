import React from 'react'
//import { Value } from 'sass'

class ChildComponent extends React.Component {

    render() {
        let { propFName, propLName, propResume } = this.props // props property is parameters from
        return (                                              // parent component to ChildComponent
            <div className="Resume"> Get data from props of ChildClass: {
                propResume.map((item, index) => {
                    return (
                        <div key={item.id}>{item.add} - {item.age}</div>
                    )

                })
            }



            </div>
        )
    }
}
export default ChildComponent

