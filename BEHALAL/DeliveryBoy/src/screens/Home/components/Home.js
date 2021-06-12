import React, {Component} from 'react';
import {View,Text ,TouchableHighlight,Switch, Alert ,FlatList,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import HeaderButton from '../../../../src/common/HeaderButton'

import Styles from '../styles';
import AsyncStorage from '@react-native-community/async-storage';

import { ROUTE_NAME } from '../../../../App';
export default class HomeScreen extends Component{
  constructor(props){
  super(props);
  this.state= 
    
    {
      
      Data : [  {id :'1',title :"Neethu",color :'#697587' ,bgColor1:'#dde4eb'  },
                {id :'2',title :"Nimya",color :'#96538a',bgColor1:'#dde4eb' },
                {id :'3',title :"Thushara",color :'#697587',bgColor1:'#dde4eb' },
                {id :'4',title :"Chippy",color :'#697587',bgColor1:'#dde4eb' },
                {id :'5',title :"Pranav",color :'#697587',bgColor1:'#dde4eb' },
                {id :'6',title :"Shahanas",color :'#697587',bgColor1:'#dde4eb' },
                {id :'7',title :"Anish",color :'#697587',bgColor1:'#dde4eb' },
                {id :'8',title :"Sharun",color :'#697587',bgColor1:'#dde4eb' },
                {id :'9',title :"Pranav",color :'#697587',bgColor1:'#dde4eb' },
                {id:'10',title :"saji",color :'#96538a',bgColor1:'#dde4eb' }
              ]   ,
       Desig1: [  {id :'1',title :"Developer",color :'#697587',bgColor1:'#dde4eb' },
                  {id :'2',title:"Team LEad",color :'#697587',bgColor1:'#dde4eb' },
                  {id :'3',title :"Developer",color :'#96538a',bgColor1:'#dde4eb' },
                  {id :'4',title :"Developer",color :'#96538a',bgColor1:'#dde4eb' },
                  {id :'5',title :"BD",color :'#96538a',bgColor1:'#dde4eb' },
                  {id :'6',title :"Team Lead",color :'#96538a',bgColor1:'#dde4eb' },
                  {id :'7',title :"CEO",color :'#96538a',bgColor1:'#dde4eb' },
                  {id :'8',title :"CEO",color :'#96538a',bgColor1:'#dde4eb' },
                  {id :'9',title :"CEO",color :'#96538a',bgColor1:'#dde4eb' },
                  {id:'10',title:"CEo",color :'#96538a',bgColor1:'#dde4eb' }
                ] ,
        Desig2: [],
            pressed: false,
            backgroundbg : '#f2e5e4',
            selectedItem: null 

            
          }
        }

    _logout()
        {
         this.props.navigation.navigate(ROUTE_NAME.LOGIN)
        }
    newArrary() 
        {
          let resultArray= [];
          this.state.Data.length =0;
          resultArray = this.state.Data.concat(this.state.Desig1)
          this.setState({Data :resultArray})
        }
    changebgcolor(id) 
        {
          const newArray11 = [...this.state.Data];
          console.log('dkdkd',newArray11)
          newArray11[id].bgColor1 = '#191d21';
        this.setState({selectedItem: id}),
        this.setState({ Data: newArray11 });
        console.log('dla',this.state.Data)
     
        }
    render(){
            const renderItem1 = ({ item }) => {
               <View style ={{flexDirection:'row',backgroundColor:'#788db0'}}>
                    <TouchableHighlight>
                       <Text>{item.title}</Text>
                    </TouchableHighlight>
                </View>
                 } 
    return(
                <View style={Styles.Container}>
                    <Text> Welcome</Text>
                    <Text> Welcome to Home</Text>
                    <FlatList    
                        data  ={this.state.Data}
                        extraData ={this.state.selectedItem}
                        renderItem = {({item,index }) =>(
                        <View style={{ 
                             padding: 20,
                            marginVertical: 8,
                            marginHorizontal: 16,
                            backgroundColor:item.bgColor1}}>
                            <TouchableHighlight 
                                onPress={() => this.props.navigation.navigate(ROUTE_NAME.SCR1,{ desig: item.color, })} >
                                <View style ={{backgroundColor:item.color}}>
                                    <Text style ={{fontSize :20,}}>{item.title}</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style ={{elevation:4}} onPress ={() =>this.changebgcolor(index)} >
                                <View style ={{backgroundColor :this.state.selectedItem === index ? this.state.backgroundbg:'#f2e5e4'}}  >
                                <Text>DarkTheme</Text>
                                </View>
                            </TouchableHighlight>
                          </View>)
                        } 
                        keyExtractor={(item )=> item.id}
                      />
                      <View style ={{flexDirection :'row-reverse'}}>
                        <TouchableHighlight onPress ={() =>this.newArrary()} >
                           <Text style ={{fontSize:25,backgroundColor:'#a5b2c7'}}>Next</Text>
                        </TouchableHighlight>
                      </View>
                 </View>
             )
        }
        
    }
    const styles = StyleSheet.create({
      container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor :'#c9c1b5'
      },
      bgchange :{
        backgroundColor:'#1a1c1f'

      },bgnotChnat:{
        backgroundColor:'#d0d5db'
      }
      });