import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        paddingHorizontal: 0,
        paddingTop: 10
    },
    textInput:
    {
        borderColor: 'lightgray',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,

    },
    button:
    {
        marginTop: 50,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: 'red'
    },
    buttonText: 
    {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16

    }
    
});
export default styles;