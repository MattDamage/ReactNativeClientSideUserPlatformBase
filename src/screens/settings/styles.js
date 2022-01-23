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
        backgroundColor: 'darkgrey',
        marginHorizontal: 2,
        marginTop:1,
        paddingTop: 2, 
        paddingBottom: 2, 
        borderWidth:0.25,
        borderColor: 'grey',
        alignItems:'center',
    },
    settingsButtonText:
    {
        fontSize: 20,
        color: 'white'
    },
    logoutButton:
    {
        backgroundColor: 'red',
        marginHorizontal: 2,
        marginTop:1,
        paddingTop: 2, 
        paddingBottom: 2, 
        borderWidth:0.25,
        borderColor: 'darkred',
        alignItems:'center',
    },
    logoutButtonText:
    {
        fontSize: 20,
        color: 'white'
    }
    
    
});
export default styles;