import React ,{Component}from 'react';
import {View,Text,TextInput,TouchableOpacity,Alert,ScrollView, SafeAreaView, TouchableHighlight,FlatList, Modal} from 'react-native'
import style from '../style'
import color from '../../../assets/color'
import Icons3 from 'react-native-vector-icons/AntDesign'
import StepIndicator from 'react-native-step-indicator';
export default class OrdersScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            all_orderVisible : false,
            allVisible :true,
            modalVisible: false,
            country: 'uk',
            _order: [
                        {id :'1',orderno :"999",time :'7.00 PM'  },
                        {id :'2',orderno :"73737",time :'7.57 PM'  },
                        {id :'3',orderno :"39393",time :'8.00 PM'  },
                        {id :'4',orderno :"39393",time :'9.00 PM'  },
                        {id :'5',orderno :"39393",time :'11.00 PM'  }
                    ],
            show_details :false,
            neworder :false,
            progress: 0,
            indeterminate: true,
        }
    }
    _allorders(){
        this.setState({
            all_orderVisible :true,
            allVisible :false
        })
    }
    item_details(){
        this.setState({
            show_details:true
        })
    }
    toggleModal(visible) {
        this.setState({
            modalVisible: visible,
            neworder:true});
    }
    render(){
        return(
            <SafeAreaView style={style.MainContainer}>  
                <ScrollView style= {{height: '100%',width: '100%'}}>  
                    <View style ={{flexDirection :'row',alignItems:'center',justifyContent :'space-between',paddingLeft:40,paddingRight:40}}>
                        <TouchableHighlight style ={style.touchable_style} onPress ={() => {this._allorders()}}><Text style={style.text_style}>All(2)</Text></TouchableHighlight>
                        <TouchableHighlight style ={style.touchable_style}><Text style={style.text_style}>Preparing(5)</Text></TouchableHighlight>
                        <TouchableHighlight style ={style.touchable_style}><Text style={style.text_style}>Ready(1)</Text></TouchableHighlight>
                        <TouchableHighlight style ={style.touchable_style}><Text style={style.text_style}>Picked Up(2)</Text></TouchableHighlight>
                    </View>
                    {this.state.allVisible ? (
                    <View>
                        <View style={style.secondary_container}>
                            <View style ={{flexDirection :'row',justifyContent:'space-between'}}>
                                <View style ={{width :'60%',alignItems :'flex-start',flexDirection :'row',paddingTop:15,paddingLeft:20}}>
                                    <Text style={style.text1_style} >Order : </Text>
                                    <Text style={{color :'#40394A',fontSize:30,paddingTop:10}}> 23344 </Text>
                                </View>
                                <View style ={{width :'40%',alignItems:'flex-start',flexDirection:'row',paddingTop:15}}>
                                    <Text style={style.text1_style}>Time : </Text>
                                    <Text  style={{color :'#40394A',fontSize:30,paddingTop:10}}>4.00 PM </Text>
                                    <View>
                                        <Icons3 style={{paddingTop :5,paddingLeft:10}}
                                            name ='up' 
                                            color = {color.color_light_green}
                                            size ={35}
                                            onPress ={() => this.item_details()}
                                        />
                                    </View>
                                </View>
                            </View>
                         <View style ={style.inner_container}>
                            <View style = {{flexDirection :'row',justifyContent :'space-between'}}>
                                <View style ={{backgroundColor:color.color_light_green,borderRadius :15,height :40,width:180,justifyContent:'center',alignItems:'center',marginTop:20,marginLeft:20}}>
                                    <Text style ={{color :color.SECONDARY_TEXT_COLOR ,fontSize :28}}>Preparing</Text>
                                </View>
                                <View></View>
                            </View>
                        <View style ={{justifyContent:'center',alignItems :'center'}}>
                            <View style ={{height:'70%',width:'90%',justifyContent:'center',alignItems :'center'}}>
                                <View style  ={{flexDirection :'row',justifyContent :'space-between'}}>
                                    <View style ={{width :'65%'}}>
                                        <Text style ={{fontSize:35,color :color.SECONDARY_COLOR,fontWeight:'bold'}}>2 kg * Beef Sirloin</Text>
                                        <View style ={{width :'100%',flexDirection:'row',justifyContent:'space-between'}}>
                                            <View style ={{width:'65%'}}>
                                                <Text style ={{color :color.color_accent,fontSize:35,padding :10}}>Item Prices</Text>
                                                <Text style ={{color :color.color_accent,fontSize:35,padding:10}}>Coupen Code</Text>
                                                <Text style ={{color :color.color_accent,fontSize:35,padding:10}}>Taxes</Text>
                                            </View>
                                            <View style ={{width:'45%'}} >
                                                <Text style ={{color :color.SECONDARY_COLOR,fontSize:35,padding:10}}>EUR 50</Text>
                                                <Text style ={{color :color.SECONDARY_COLOR,fontSize:35,padding:10}}>EUR 5</Text>
                                                <Text style ={{color :color.SECONDARY_COLOR,fontSize:35,padding:10}}>EUR 10</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style ={{widht :'45%'}}>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style ={{width :'100%',borderBottomWidth :4,borderColor :color.color_light_green}}></View>
                            <View style ={{justifyContent:'center',alignItems:'center'}}>
                                <View style ={{flexDirection:'row',justifyContent:'space-between',width:'60%'}}>
                                    <View style ={{width:'65%'}}> 
                                        <View style ={{flexDirection :'row'}}>
                                            <Text style ={{color :color.color_accent,fontSize:35,padding :10}}>Total</Text>
                                            <View style ={{backgroundColor :'#CFCFCF' ,width :100,height:30,marginTop :18,justifyContent:'center',alignItems :'center'}}>
                                                <Text style ={{fontSize :25,color  :'#8E8E8E',fontWeight :'bold'}}> PAID</Text>
                                            </View>   
                                        </View>
                                    </View>  
                                    <View style ={{width:'45%'}}> 
                                        <Text style ={{color :color.SECONDARY_COLOR,fontSize:35,padding:10,fontWeight :'bold'}}>EUR 10</Text>
                                    </View>
                                </View>
                            </View>
                        </View>              
                        <View style ={{justifyContent:'center',alignItems :'center',height :'12%',}}>
                            <TouchableHighlight style ={style.touch_style} onPress = {() => {this.toggleModal(true)}}>
                                <Text style ={style.btn_txtstyle}>
                                    ORDER READY
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style ={{ justifyContent:'center',alignItems:'center',marginTop:40,marginBottom:27}}>
                        <View style ={{height :110,width :'90%',borderRadius:15,borderWidth:1}} >
                            <View style ={{flexDirection :'row',justifyContent:'space-between',paddingTop:15}}>
                                 <View style ={{width :'60%',alignItems :'flex-start',flexDirection :'row',paddingTop:15,paddingLeft:20}}>
                                    <Text style={style.text1_style} >Order : </Text>
                                    <Text style={{color :'#40394A',fontSize:30,paddingTop:10}}> 484849 </Text>
                                </View>
                                <View style ={{width :'40%',alignItems:'flex-start',flexDirection:'row',paddingTop:15}}>
                                    <Text style={style.text1_style}>Time : </Text>
                                    <Text  style={{color :'#40394A',fontSize:30,paddingTop:10}}>3.00 PM </Text>
                                    <View>
                                        <Icons3 style={{paddingTop :5,paddingLeft:10}}
                                        name ='down' 
                                        color = {color.color_light_green}
                                        size ={35}
                                        onPress ={() => this.item_details()}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                    
                ) : null}
                {this.state.neworder ? 
                (
                    <View >
                        <Modal animationType = {"blur"} transparent = {true}
                            visible = {this.state.modalVisible}
                            onRequestClose = {() => { console.log("Modal has been closed.") } }>
                            <View style ={{height:'40%',backgroundColor: color.color_mlight_green,}}>
                                <View style ={{justifyContent:'center',alignItems:'center'}}>
                                    <Text style ={{color:color.SECONDARY_TEXT_COLOR,fontSize:35,justifyContent:'center',alignItems:'center',paddingTop :20,fontWeight :'bold'}}>1 New Order</Text>
                                </View>
                                <View style = {{
                                    marginTop:20,
                                    alignItems: 'center',
                                    backgroundColor:color.SECONDARY_TEXT_COLOR,
                                    flex:2,
                                    width :'100%'}}
                                >
                                    <View>
                                        <View style ={{flexDirection :'row',justifyContent:'space-between'}}>
                                            <View style ={{width :'50%',alignItems :'flex-start',flexDirection :'row',paddingLeft:20}}>
                                                <Text style={style.text1_style} >Order : </Text>
                                                <Text style={{color :'#40394A',fontSize:30,paddingTop:10,fontWeight:'bold'}}> 23344 </Text>
                                            </View>
                                            <View style ={{width :'40%',alignItems:'flex-start',flexDirection:'row'}}>
                                                <Text style={style.text1_style}>Time : </Text>
                                                <Text  style={{color :'#40394A',fontSize:30,paddingTop:10,fontWeight:'bold'}}>4.00 PM </Text>
                                                <View>
                                                </View>
                                             </View>
                                        </View>   
                                    </View>
                                    {/* <Text style = {{ color: '#3f2949',marginTop: 10}}>Modal is open!</Text>  
                                    <TouchableHighlight 
                                        onPress = {() => {this.toggleModal(!this.state.modalVisible)}}>
                                        <Text style = {{ color: '#3f2949',marginTop: 10}}>Close Modal</Text>
                                    </TouchableHighlight> */}
                                    <View style ={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                                        <View style ={{height:'70%',justifyContent:'center',alignItems:'center'}}>
                                            <View style ={{flexDirection:'row',width:'65%'}}>
                                                <View style ={{width:'50%',}}>
                                                    <View>
                                                        <Text style ={{fontSize:30,color :color.color_accent,fontWeight:'bold'}}>Name</Text>
                                                    </View>
                                                    <View>
                                                        <Text style ={{fontSize:30,color :color.color_accent,fontWeight:'bold'}}>Items</Text>
                                                    </View>
                                                </View>
                                                <View style ={{width:'50%'}}>
                                                    <View>
                                                        <Text style={{fontSize:30,fontWeight:'bold'}}>John Doe</Text>
                                                    </View>
                                                    <View>
                                                        <View style ={{flexDirection:'row',width:'55%',}}>
                                                            <View>
                                                                <Text style={{fontSize:30,fontWeight:'bold'}}>Steak/2Kg</Text>
                                                                <Text style={{fontSize:30,fontWeight:'bold'}}>Steak2/2Kg</Text>
                                                                <Text style={{fontSize:30,fontWeight:'bold'}}>Steak3/3kg</Text>
                                                            </View>
                                                            <View>
                                                                <StepIndicator
                                                                    direction ='vertical'
                                                                    stepCount={3}
                                                                />
                                                                </View>
                                                            </View>
                                                        </View>
                                                 </View>
                                                </View>                                         
                                            </View>
                                        <View style ={{flexDirection:'row'}}>
                                        </View>
                                        <View style ={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                                        <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',}}>
                                            <View style ={{justifyContent:'center',alignItems :'center',height :'9%',}}>
                                                <TouchableHighlight style ={style.touch_style} onPress = {() => {this.toggleModal(true)}}>
                                                    <Text style ={style.btn_txtstyle}>Accept </Text>
                                             </TouchableHighlight>
                                            </View>
                                            <View style ={{justifyContent:'center',alignItems :'center',height :'9%'}}>
                                                <TouchableHighlight style ={style.touch_style} onPress = {() => {this.toggleModal(true)}}>
                                                    <Text style ={style.btn_txtstyle}>Reject(30s)</Text>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </View>

                                    </View>
                                    </View>
                                    </View>
                                    
                        </Modal>
                    </View>
                ) : null}
                {this.state.all_orderVisible ? 
                (
                    <View style ={{height:'100%'}}>
                        <FlatList
                            data ={this.state._order}
                            renderItem ={({item,index}) => 
                                (
                                    <View style ={{ justifyContent:'center',alignItems:'center',marginTop:20}}>
                                        <View style ={{height :115,width :'90%',borderRadius:15,borderWidth:1,marginBottom:20}} >
                                            <View style ={{flexDirection :'row',justifyContent:'space-between',paddingTop:15}}>
                                                <View style ={{width :'60%',alignItems :'flex-start',flexDirection :'row',paddingTop:15}}>
                                                    <Text style={style.text1_style} >Order : </Text>
                                                    <Text style={{color :'#40394A',fontSize:30,paddingTop:10}}> {item.orderno} </Text>
                                                </View>
                                                <View style ={{width :'40%',alignItems:'flex-start',flexDirection:'row',paddingTop:15}}>
                                                    <Text style={style.text1_style}>Time : </Text>
                                                    <Text  style={{color :'#40394A',fontSize:30,paddingTop:10}}>{item.time} </Text>
                                                    <View>
                                                        <Icons3 style={{paddingTop :5,paddingLeft:10}}
                                                            name ='down' 
                                                            color = {color.color_light_green}
                                                            size ={35}
                                                            onPress ={() => this.item_details()}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }
                        >
                        </FlatList>
                    </View>
                ) :null}
            </ScrollView>
        </SafeAreaView>)
    }
}
