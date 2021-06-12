import React,{Component} from 'react';
import { Text ,View} from 'react-native';
export default class Screen1 extends Component {
    componentDidMount(){
        course = this.props.route.params.desig;
        console.log("bgcolor",course)
       
      }
    render(){
        return(
            <View style ={{flex:1,backgroundColor:this.props.route.params.desig}}>
                <Text>
                   Welcome
                </Text>
            </View>
        )
    }
}