import React, {useState, useReducer} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import LottieView from "lottie-react-native";



export function Home() {
    const initialState = []

    const reducer = (state, action) => {
        switch(action.type){
            case'ADD':
                return[...state, action.item];
            case 'CHECK':
                return state.map(item => {
                    if(item.id === action.id){
                        return{...item, check: !item.check}
                    }else{
                        return item;
                    }
                });
            case 'REMOVE':
                return state.filter(item=>{
                    return item.id !== action.id
                })
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const [product, setProduct]= useState('')


  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="O que vamos comprar hoje?"
          style={styles.input}
          value={product}
          onChangeText={setProduct}
        ></TextInput>
        <TouchableOpacity>
            <Text style={{fontSize:45, opacity:0.7}} 
            onPress={()=>
                {
              
                dispatch({type: 'ADD', 
                item:{
                    id:Math.random(),
                    title:product,
                    check:false,
                }})
                setProduct('')
                }}>
                +
            </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerItens}>
        <FlatList
            data={state}
            renderItem={({item})=>(
                <View style={styles.containerItem}>
                    <TouchableOpacity onPress={()=>{
                                        dispatch({type: 'CHECK',
                                        id: item.id 
                                        })
                    }} style={{marginHorizontal: 15}}>
                        <Text style={[styles.itemList, item.check ? styles.listItemChecked : '']}>{item.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}} onPress={()=>{
                                        dispatch({type: 'REMOVE',
                                        id: item.id 
                                        })
                    }}>
                        <Text style={{fontSize:25, color:'red', marginRight:10}}>X</Text>
                    </TouchableOpacity>
                </View>
            )}

        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 2,
  },
  input: {
    backgroundColor:'#f8f8f8',
    width:'80%',
    height:55, 
    borderRadius:8,
    paddingHorizontal:15,
    borderWidth:1,
    elevation:10,
    fontSize:15,
    marginTop:15
  },
  containerInput: {
    flex: 0.20,
    backgroundColor: "#f2d518",
    alignItems:'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
  },
  containerItens: {
    flex: 0.80,
    backgroundColor: "#f5d820",
  },
  containerItem:{
    width:'100%',
    height:55,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#dbc012',
    flexDirection:'row',
    marginBottom:5,
    marginTop:10,
    borderTopWidth:1,
    borderBottomWidth:1,
    
  },
  texto: {
    fontSize: 15,
  },
  itemList:{
    fontSize:20,
    textAlign:'center',
    color:'#f5f5f5'
  },
  listItemChecked:{
    textDecorationLine:'line-through'
  }
});
