import React from "react"
import { View, Text, StyleSheet, Button, Alert } from "react-native"
import axios from "axios"
import { ListItem } from "react-native-elements"
import { SafeAreaView } from "react-navigation"
import { FlatList } from "react-native-gesture-handler"

export default class Home extends React.Component{
    constructor(props){
        super(props)
            this.state={
                listData:[], url:"http://127.0.0.1:5000/"
            }
        }

componentDidMount(){
            this.getPlanets()
            console.log(this.state.listData)
        }
    getPlanets=async()=>{
        const url = this.state.url
        axios.get(url).then(
            Response=>{
                console.log(Response.data)
                return(
                    this.setState({
                        listData:Response.data
                    }
                    )
                )
            }
        ).catch(err=>{
            Alert.alert(`Something's wrong. ${err.message}`)
        })
    }
    renderItem=({item, index})=>{
        <ListItem
        key= {index}
        title= {`planet:${item.name}`}
        subtitle = {`distance from earth : ${item.distance_from_earth}`}
        titleStyle= {styles.title}
        containerStyle= {styles.listContainer}
        bottomDivider
        chevron 
        onPress={()=>{
            this.props.navigation.navigate("Details", {
                planet_name : item.name
            })
                }}
        />
    }
    keyExtractor = (item, index)=>index.toString()
    render(){
        const listData = this.state.listData
        console.log(listData)
        if (listData.length===0){
            return(
                <View
                style={styles.emptyContainer}
                >
                    <Text>
                        Loading
                    </Text>
                </View>
            )
        }
  
        return(
            <View 
            style={styles.container}
            >
                <SafeAreaView
                />
                <View
                style={styles.upperContainer}
                >
                    <Text style={styles.headerText}>Planet World</Text>
                </View>
                <View style={styles.lowerContainer}>
                    <FlatList
                    keyExtractor= {this.keyExtractor}
                    data = {this.state.listData}
                    renderItem= {this.renderItem}
                    >

                    </FlatList>
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#edc988" }, upperContainer: { flex: 0.1, justifyContent: "center", alignItems: "center" }, headerText: { fontSize: 30, fontWeight: "bold", color: "#132743" }, lowerContainer: { flex: 0.9 }, emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" }, emptyContainerText: { fontSize: 20 }, title: { fontSize: 18, fontWeight: "bold", color: "#d7385e" }, listContainer: { backgroundColor: "#eeecda" } });
