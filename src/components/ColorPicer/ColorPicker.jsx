
import { Component, useState } from 'react';
import { Container, Title, Option } from './ColorPicker.styled';

export const ColorPicker = ({ options }) => {
    const [currentOptionIdx, setcurrentOptionIdx] = useState(null);

    const handleActive = (currentIdx) => {
        setcurrentOptionIdx(currentIdx)
    }

    return  <Container>
            <Title>Color Picker</Title>
            <div>
                 {options.map((option, idx) => {
                   return <Option
                         key={option.label}
                      onClick={()=>{handleActive(idx)}}
                         bg={option.color}
                       current={currentOptionIdx}
                       idx={idx}
                  >
                       {option.label}
                    </Option>
                 })}
             </div>
         </Container>
}

// export class ColorPicker extends Component{
    
//     state = {
//         currentOptionIdx: 0,
//     }

//     handleActive = (currentIdx) => {
//         this.setState({
//             currentOptionIdx: currentIdx,
//         })
//     }
    
//     render() {
//         return  <Container>
//             <Title>Color Picker</Title>
//             <div>
//                 {this.props.options.map((option, idx) => {
//                     return <Option
//                         key={option.label}
//                         onClick={()=>{this.handleActive(idx)}}
//                         bg={option.color}
//                         current={this.state.currentOptionIdx}
//                         idx={idx}
//                     >
//                         {option.label}
//                     </Option>
//                 })}
//             </div>
//         </Container>
//     }
// }

// function ColorPicker({options}) {
//     return (
//         <Container>
//             <Title>Color Picker</Title>
//             <div>
//                 {options.map(option => {
//                     return <Option key = {option.label} bg={option.color}>{option.label}</Option>
//                 })}
//             </div>
//         </Container>
//     )
// }
// export default ColorPicker;