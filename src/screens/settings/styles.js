import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        padding: 30

    },
    mainBodyText:
    {
        padding: 10,
        marginHorizontal:10
    },
    mainBodyTextHeader:
    {
        fontWeight: 'bold',
        marginTop: 50,
        fontSize: 10,
        padding: 10

    },
    scroolView:
    {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    settingsButton:
    {
        marginTop: 20,
        backgroundColor: 'ghostwhite',
        padding: 10,
        alignItems:'center',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: 'lightgrey'
        /*
        backgroundColor: 'darkgrey',
        marginHorizontal: 2,
        marginTop:1,
        paddingTop: 2, 
        paddingBottom: 2, 
        borderWidth:0.25,
        borderColor: 'grey',
        alignItems:'center',
        */
    },
    settingsButtonText:
    {
        fontSize: 20,
        color: 'black'
    },
    logoutButton:
    {
        marginTop: 20,
        backgroundColor: 'red',
        padding: 10,
        alignItems:'center',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    logoutButtonText:
    {
        fontSize: 20,
        color: 'white'
    }
    
    
});
export default styles;