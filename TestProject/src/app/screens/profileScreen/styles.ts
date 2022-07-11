import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  headerViewStyle: {
    borderTopColor: '#D3D3D3',
    borderTopWidth: 5,
    width: '100%',
    padding: 10
  },
  headerTextStyle: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18
  },
  bodyTextStyle: {
    color: Colors.black,
    fontSize: 14,
    marginTop: 8
  }
});