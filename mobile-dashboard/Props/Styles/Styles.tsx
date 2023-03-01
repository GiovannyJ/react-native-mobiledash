import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    center: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      fontSize: 20,
      marginTop:10,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    container:{
      flex:1,
      backgroundColor: '#2529e',
      alignItems: "center",
      justifyContent: "center",
    },
    imgcontainer:{
      flex:1,
      paddingTop: 58,
    },
    image:{
      width:320,
      height:440,
      borderRadius:18,
    },
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
});

export default styles;