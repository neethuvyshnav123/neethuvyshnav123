import React,{Component} from 'react';
import {View,Text,TouchableHighlight,BackHandler, Alert, SafeAreaView,TextInput,Switch,TouchableOpacity,FlatList} from 'react-native';
import { connect } from 'react-redux';
import { remove_login } from '../../LoginScreen/action';
import style from '../style';
import color from '../../../assets/color';
import Icons from 'react-native-vector-icons/Feather'
import Icons3 from 'react-native-vector-icons/AntDesign'
import Icons1 from 'react-native-vector-icons/MaterialIcons'
import Radiob_on from 'react-native-vector-icons/Ionicons'
import Iconss3 from 'react-native-vector-icons/MaterialCommunityIcons'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Picker} from '@react-native-picker/picker';
class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
         itemindex:null,
        dropdown :"Beef",
        dropdown11 :"Beef Sirloin",
        quantity_change : 0,
        icon_name : 'down',
        switchValue :null,
        imageSource :null,
        switchValue: false,
        country: 'uk',
        pressed :false,
        imageOP :launchImageLibrary,
        Top_icons :true,
        allItem :false,
        mainCode :true,
        selectedITem : null,
        inner_arraysitems :[],
        item_detailsShown :false,
        addItem :false,
        array_length :null,
        itemFromTypes :[],
        radioBtnsData: ['Item1', 'Item2'],
        checked: null,
        checkedforveg:null,
        radon_iconforveg:"radio-button-off",
        rad_iconforveg:"radio-button-on",
        selected_flatlist :[],
        select_flatlistindex :null,
        itemId:null,
        Data : [  
                {
                    id :'1',
                    title :"Beef",
                    item2 :[
                            {id :'1',price:'10',quantity :'2',name:'Beef Sirloin'},
                              {id :'2',price:'130',quantity :'32',name:'Beef Ribs'},
                              
                            ]  
                        },
                {id :'2',title :"Lamp",item2 :[{id:'2',price:'2',quantity :'3',name:'ddd'}]},
                {id :'3',title :"Chicken",item2 :[{id:'3',price :'3',quantity :'0',name:'ttt'}]},
                
        ],
        Desig2: [],
        Desig3: [],
        Desig4: [],
        select_catagory: null,
        item_name :null,
        quantity_ :null,
        price:null,
        item_description :null,
        add_image :null,
        outofstock :null,
        resourcePath: {},
        radon_icon:"radio-button-off",
        rad_icon:"radio-button-on"
      }
    }
    backAction = () => {
        BackHandler.exitApp() 
        return true;
      };

    _Select_image(){
      console.log('joooooo')
      var options = {
        
        title: 'Select Image',
        
        customButtons: [
          {
            
            name: 'customOptionKey',
            title: 'Choose Photo from Custom Option',
            title:'take Photo'
          },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
    };
    this.state.imageOP(options, response => {
        if (response.didCancel) 
            {
                console.log('User cancelled photo picker');
                Alert.alert('You did not select any image');
            } 
            else if (response.error) 
                {
                console.log('ImagePicker Error: ', response.error);
                }
            else if (response.customButton) 
                {
                console.log('User tapped custom button: ', response.customButton);
                }  
        else {
          let source = { uri: response.uri };
          setState({imageSource :source.uri});
        }
        });
    }
    select_image()
        {
            const options =[
                {
                    name :'Choose from Gallery',
                    onPress :()=>{
                    this.state.imageOP(options, response => {
                    if (response.didCancel) 
                        {
                            console.log('User cancelled photo picker');
                            Alert.alert('You did not select any image');
                        } 
                        else if (response.error) 
                            {
                                console.log('ImagePicker Error: ', response.error);
                            }
                        else if (response.customButton) 
                            {
                            console.log('User tapped custom button: ', response.customButton);
                            }  
                    else 
                    {
                        let source = { uri: response.uri };
                        setState({imageSource :source.uri});
                    }
                });
            }
            },
            {
                storageOptions: 
                    {
                        skipBackup: true,
                        path: 'images',
                    },
                }
            ]
        }
    add_itemfn(){
      // this.props.dispatch(login_data({
      //     email:this.state.name,password:this.state.password}))   
    }
    all_itemfuction(){
        this.setState({
        allItem: true,
        mainCode:false,
        Top_icons :true
      })
    }
    change_catagory(value){
        this.setState({dropdown:value})
        let newarr = this.state.Data.find(datas =>{return  datas.title === this.state.dropdown}).item2
        let newarr1 =Object.values(newarr);
        let y1= newarr1.map(i=>i.name)
        console.log('newarryy',y1)
        console.log('newarr',newarr)
        this.setState({Desig3:newarr1})
        this.setState({Desig4:y1})
    }
    increase_button(){
        this.setState({quantity :this.state.quantity_change+1})
    }
    decrese_button(){
        this.setState({quantity :this.state.quantity_change-1})
    }
    item_detailfn(item,index){
        let newArray11 =[];
        console.log('Selected iteem',item)
        console.log('Selected index',index)
        console.log('selected flatlistitem',this.state.selected_flatlist)
        let newarr = this.state.Data.find(item=>{return  item.id === index}).item2
        this.state.selected_flatlist.push(newarr)
        let newArr =this.state.Data.find(product => product.item);
        console.log('newww',newarr)
        this.setState(() => {
        return {select_flatlistindex: index};
        });
        newArray11 = newArray11.push(this.state.selectedITem)
        this.setState({
            select_flatlistindex:index,
            selected_flatlist:this.state.selected_flatlist,
            icon_name : 'up',
            item_detailsShown: true,
            selectedITem :newarr, 
            Desig2: newArray11
        })
        let y= this.state.selected_flatlist.map(i=>i.map(k=>k.id))
        console.log('yyyy',y)
        console.log('selected flatlisindex',this.state.select_flatlistindex)
        console.log('selected flatlis',this.state.selected_flatlist)
        console.log('dkdkddd',newArray11) 
        console.log('dkdkd',this.state.selectedITem)
        console.log('dhdh',this.state.Desig2)
    }
    add_item_expand(){
        this.setState({addItem:true ,allItem :false,mainCode:false,Top_icons :false})
    } 
    componentDidMount() {
        let newarr = this.state.Data.find(datas =>{return  datas.title === this.state.dropdown}).item2
        let y1= newarr.map(i=>i.name)
        console.log('newarryy',y1)
        this.setState({Desig4:y1})
        console.log('Desig4',this.state.Desig4)
        this.setState({Desig3:this.state.Desig3.push(newarr)})
        this.props.dispatch(remove_login())
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }
    arrays_length(item2){
        let arraylength =item2.length
        console.log('lldllldl',arraylength)
    }
    componentWillUnmount() {
        this.backHandler.remove();
    }
    PressedItem = (itemId) => {
    console.log('lllllllllllll',itemId)
    this.setState({ itemId: itemId})
    console.log('lllllllllllll',this.state.itemId)
    }
    FlatListItemSeparator = () => {
      return (
          <View
              style={{
                  height: 1, 
                  width: "95%",
                  justifyContent: 'center',
                  backgroundColor: "#DCDCDC",
              }}
          />
      );
    }
    renderItem = ({ item }) => {
        return (
            <View style ={{justifyContent:'center',marginTop:30,width:'100%'}}>
                <View>
                <View style ={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style ={{width:'40%'}}>
                        <Text style ={{fontSize :35,paddingRight:60,fontWeight:'bold',color:color.color_text}}>{item.title}</Text>
                    </View>
                    <View style={{width:'40%',justifyContent:'center',flexDirection:'row'}}>
                         <View></View>
                        <Icons
                            name ='edit' 
                            color = {color.color_light_green}
                            size ={35}
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style ={{flexDirection:'row'}}>
                        <Text style ={{fontSize:30}}>{item.item2.length} Items</Text>
                        <TouchableOpacity 
                            onPress={() => { this.PressedItem(item.id, item.title), this.setState({ itemindex: item.id }) }} >
                            <Icons3 
                                style={{paddingTop :5,paddingLeft:10}}
                                name = {this.state.itemindex == item.id ? 'down' : 'up'}
                                color = {color.color_light_green}
                                size ={35}
                            /> 
                            {this.state.itemId ===item.id?
                            (
                                <View style ={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                                    <View style={{justifyContent:'center',alignItems:'center',width:'80%'}}>
                                        {item.item2.map((u,v) =>
                                        ( 
                                            <View style ={{paddingTop:20,justifyContent:'center',alignItems:'center'}}>
                                                <View style={{flexDirection:'row',width:'100%',paddingTop:15,paddingBotton:15,justifyContent:'center'}}>
                                                    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                                                        <View style={{width:'70%',height:'120%'}}>
                                                            <Text  style ={{fontSize :30,color:color.color_text}}>{u.name}</Text>
                                                            <Text  style ={{fontSize :30}}>{u.price}/{u.quantity}</Text>
                                                        </View>
                                                        <View style={{width:'70%',height:'120%'}}>
                                                            <Text  style ={{fontSize :30,color:color.color_text,justifyContent:'center',paddingLeft:90}}>In Stock</Text>
                                                            <View style ={{justifyContent:'center',alignItems:'center'}}>
                                                                <Switch  
                                                                    style ={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]}} 
                                                                    value={this.state.switchValue}  
                                                                    onValueChange ={(switchValue)=>this.setState({switchValue})}
                                                                    /> 
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            ):null}
                        </TouchableOpacity>
                    </View>
                </View>
                    <View>
                    </View>
            </View>
            </View> 
        )
    }
    render(){
        return(
            <SafeAreaView style={style.MainContainer}>
                <View style= {{height: '100%',width: '100%'}}>
                    <View style= {{alignItems: 'center',justifyContent: 'center'}}>
                        {this.state.addItem ? (<View style ={{height:'100%',width:'100%'}}>
                             <View style= {{alignItems: 'center',justifyContent: 'center',marginTop:40}}> 
                                <Text style = {style.main_textq}>ADD NEW ITEM</Text>
                                <View style ={{alignItems :'center',justifyContent:'center',width :'100%'}}>
                                    <View style ={{width:'55%',height:55,elevation:4,marginTop:40,marginBottom :10,backgroundColor:color.SECONDARY_TEXT_COLOR,alignItems:'center',justifyContent:'center'}}>
                                        <Picker 
                                            mode="dropdown"
                                            height={100}
                                            selectedValue={this.state.Desig2}
                                            style={{ height: 50, width:500}}
                                            onValueChange={(itemValue, itemIndex) => this.change_catagory(itemValue)}
                                        >
                                            <Picker.Item value='' label='Select Category'style ={{fontSize :30,color :color.color_text ,paddingLeft:40}} />
                                                { 
                                                    this.state.Desig2.map((item1, index1) => <Picker.Item label={item1} value={item1}  style ={{fontSize :28,color :color.SECONDARY_COLOR ,paddingLeft:40}} />)
                                                }
                                        </Picker>
                                    </View>
                                    <View style ={{width:'55%',height:55,elevation:4,marginTop:40,marginBottom :10,backgroundColor:color.SECONDARY_TEXT_COLOR,alignItems:'center',justifyContent:'center'}}>
                                        <Picker 
                                            mode="dropdown"
                                            height={100}
                                            selectedValue={this.state.Desig2}
                                            style={{ height: 50, width:500}}
                                            onValueChange={(itemValue, itemIndex) => this.change_catagory(itemValue)}
                                        >
                                            <Picker.Item value='' label='Select Master Product'style ={{fontSize :30,color :color.color_text ,paddingLeft:40}} />
                                            { 
                                                this.state.Desig2.map((item1, index1) => <Picker.Item label={item1} value={item1}  style ={{fontSize :28,color :color.SECONDARY_COLOR ,paddingLeft:40}} />)
                                            }
                                        </Picker>
                                    </View>
                                        <TextInput 
                                            style ={style.TextinputContainerq}
                                            onChangeText ={(text) => this.updatevalue(text, '_price')}  
                                            placeholderTextColor = {color.color_text} 
                                            placeholder="Item Name">
                                        </TextInput>
                                        <TextInput 
                                            style ={style.TextinputContainerq}
                                            onChangeText ={(text) => this.updatevalue(text, '_price')}  
                                            placeholderTextColor = {color.color_text} 
                                            placeholder="Quantity">
                                        </TextInput>
                                        <TextInput 
                                            style ={style.TextinputContainerq}
                                            onChangeText ={(text) => this.updatevalue(text, '_price')}  
                                            placeholderTextColor = {color.color_text} 
                                            placeholder="Price">
                                        </TextInput>
                                            <View style = {{flexDirection:'row',justifyContent:'space-between',width :'90%',marginTop :20}}>
                                                <View style ={style.veg_radview}>
                                                    <TouchableOpacity  onPress={()=>{this.setState({checkedforveg: "Veg",radon_iconforveg:"radio-button-off",rad_iconforveg:"radio-button-on"})}}style={{flexDirection:'row',justifyContent:'space-between'}}>
                                                        <View>
                                                            <Radiob_on  name ={this.state.radon_iconforveg} size ={40} color ={color.color_accent}/>
                                                        </View>
                                                        <View>
                                                            <Text style ={{fontSize :28,color :color.SECONDARY_COLOR ,paddingLeft:10}}>Veg</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                               <View style ={style.veg_radview}>
                                                    <TouchableOpacity  onPress={()=>{this.setState({checkedforveg: "Non",radon_iconforveg:"radio-button-off",rad_iconforveg:"radio-button-on"})}}style={{flexDirection:'row',justifyContent:'space-between'}}>
                                                        <View>
                                                            <Radiob_on  name ={this.state.rad_iconforveg} size ={40} color ={color.color_accent}/>
                                                        </View>
                                                        <View>
                                                            <Text style ={{fontSize :28,color :color.SECONDARY_COLOR ,paddingLeft:10}}>Non</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                                    <View></View>
                                                    <View></View>
                                            </View>
                                        <View style = {{flexDirection:'row',justifyContent:'space-between',width :'90%',marginTop :20}}>
                                             <View style = {{flexDirection:'row'}}>
                                                <View style ={{flexDirection:'row',justifyContent:'space-between',width:'60%'}}>
                                                    <TouchableOpacity  onPress={()=>{this.setState({checked: "List",radon_icon:"radio-button-on",rad_icon:"radio-button-off"})}}style={{flexDirection:'row',justifyContent:'space-between'}}>
                                                        <View>
                                                            <Radiob_on  name ={this.state.radon_icon} size ={40} color ={color.color_accent}/>
                                                        </View>
                                                        <View>
                                                            <Text style ={{fontSize :28,color :color.SECONDARY_COLOR ,paddingLeft:10}}>List</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={()=>{this.setState({checked: "unList",rad_icon:"radio-button-on",radon_icon :"radio-button-off"})}} style={{flexDirection:'row',justifyContent:'space-between'}}>
                                                        <Radiob_on  name ={this.state.rad_icon} size ={40} color ={color.color_accent}/>
                                                        <Text style ={{fontSize :28,color :color.SECONDARY_COLOR ,paddingLeft:10}}>Unlist</Text>
                                                    </TouchableOpacity>
                                             </View>
                                            </View>
                                            <View style ={{flexDirection :'row',justifyContent:'space-between'}}>
                                                <Switch  style ={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}} 
                                                    value={this.state.switchValue}  
                                                    onValueChange ={(switchValue)=>this.setState({switchValue})}
                                                    /> 
                                                <Text style ={{fontSize:30,paddingTop:6,marginLeft:10}}>Stock</Text> 
                                            </View>
                                        </View>
                                    <View style = {{flexDirection:'row',justifyContent:'space-between',width :'40%',marginTop :20}}>
                                        <View style = {{flexDirection:'row',width:'50%'}}>
                                            <Iconss3
                                                name ='image-plus' 
                                                color = {color.color_text}
                                                size ={55}
                                                onPress ={() => {this._Select_image()}}
                                            />
                                            <Text style ={{fontSize:30 ,paddingTop:10}}>Add image</Text>
                                        </View>
                                        <View style ={{width:'35%',marginBottom:20}}>
                                            <View style={{paddingLeft:10,
                                                height:110, marginBottom:10,
                                                widh:40, 
                                                borderWidth:2,
                                                borderStyle: 'dashed',
                                                borderColor:color.color_accent,
                                                borderRadius:1}}>
                                            </View>
                                        </View>
                                 </View>
                                <TouchableHighlight style= {{elevation:6,backgroundColor:color.SECONDARY_TEXT_COLOR,height:60,width: 300,justifyContent:'center',alignItems:'center',borderRadius :15,shadowOpacity :'#00000040'}}
                                    onPress ={() =>{this.add_itemfn()}}>
                                    <Text style ={{fontSize:35,color:color.color_mlight_green}}>ADD ITEM</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>) :null}
                  {this.state.Top_icons ? 
                  (
                    <View>
                        <View style ={style.ViewButtonHolder}> 
                            <View style={style.subcontainer1}>
                                <TouchableHighlight 
                                    underlayColor ="#0F8044"
                                    style ={style.text_inputstyle} 
                                    onPress ={() =>this.all_itemfuction() }>
                                    <Text style ={style.text_inputstyletext}>All items</Text>
                                </TouchableHighlight>
                                <TouchableHighlight 
                                    underlayColor ="#0F8044" 
                                    style ={style.text_inputstyle} 
                                    onPress ={() => this.onRegister()}>
                                    <Text style ={style.text_inputstyletext}>Out of stock</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={style.subContainer}>
                                <View style= {{flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottomColor : 'black',
                                    borderBottomWidth: 1,width: '80%'}}>
                                    <Icons
                                        name ='search' 
                                        color = {color.TERRISIARY_COLOR}
                                        size ={35}
                                    />
                                    <TextInput style={style.search_text}
                                        onChangeText ={(text) => this.updatevalue(text, 'username')}
                                        placeholderTextColor = {color.color_accent}  
                                        placeholder="Search Item">
                                    </TextInput>
                                </View>
                            </View>
                        </View>
                  </View>
                ) :null}
                {this.state.mainCode ? 
                (
                    <View style = {style.center_container}>
                        <Text style={style.itemText} >No Item Found</Text>
                        <Text style ={style.add_item_text} >ADD ITEM</Text>
                        <View  
                            style= {{height: 110,width: 110,alignItems: 'center',justifyContent: 'center',backgroundColor: '#0F8044',borderRadius: 60,elevation: 10,marginBottom: 10}}>
                                <Icons1
                                    name ='add' 
                                    color = '#ffffff'
                                    size ={65}
                                    onPress ={() => this.add_item_expand()}
                                />
                        </View>
                    </View> 
                ): null }
            </View>                  
            {this.state.allItem ? 
            (
                <View style ={{width:'100%'}} >
                   <View style ={{justifyContent:'center',alignItems:'center'}}>
                        <FlatList
                            data={this.state.Data}
                            renderItem={this.renderItem}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            keyExtractor={item => item.id.toString()}
                            extraData={this.state}
                        />   
                    </View>
                 </View>
             ):null}
        </View>
    </SafeAreaView>
    )
}
}
export default connect(null, null)(HomeScreen);  