
import React from 'react';
import ChildComponent from './childComponent';
import FunctionChildComponent from './functionComponent';
import ConditionOutput from './conditionOutput'
import AddComponent from './addComponent';


class Mycomponent extends React.Component {
    state = {
        
        arrResume: [
            { id: '123', add: 'Ha Noi', age: '40' },
            { id: '456', add: 'Thanh Hoa', age: '7' },
            { id: '789', add: 'Tay Ninh', age: '37' }
        ]
    }

   addNewArrow = (newArrow) =>{
        // //////First way to add new data into State /////////////////
        // this.state.arrResume.push(newArrow)
        // this.setState({arrResume: this.state.arrResume })

        ///////// Second way to ad new data into state //////////////////
        this.setState({arrResume:[...this.state.arrResume,newArrow]})    
       
        console.log("Check data from Child to parent: ", newArrow)
        console.log("Check add new data at tempArray: ", this.state.arrResume)
    }

    deleteArrow = (id)=>{
        // let temp=this.state.arrResume
        // temp= temp.filter(item=>item.id!=id.id)
        // this.setState({arrResume: temp})
        this.setState({arrResume:this.state.arrResume.filter(item=>item.id!==id.id) })
       
    }
    

    render() {
        return (
            <>
                <AddComponent addNewArrow = {this.addNewArrow}/>
                {/* <ConditionOutput deleteArrow={this.deleteArrow}/> */}
                {/* <ChildComponent
                    propFName={this.state.fname}
                    propLName={this.state.ln    ame}
                    propResume={this.state.arrResume}
                />
                <FunctionChildComponent propResume={this.state.arrResume} /> */}
                <ConditionOutput propResume={this.state.arrResume}
                                 deleteArrow={this.deleteArrow}
                />
            </>
        )   
    }
}
export default Mycomponent
