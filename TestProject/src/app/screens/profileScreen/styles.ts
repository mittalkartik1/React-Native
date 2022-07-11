import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  headerImageStyle: { width: 100, height: 100, borderRadius: 100, marginTop: 40, marginBottom: 40 },
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
    color: '#696969',
    fontSize: 14,
    marginTop: 8
  },
  skillContentStyle: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }
});