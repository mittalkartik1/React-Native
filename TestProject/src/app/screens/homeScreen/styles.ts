import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerViewStyle: {backgroundColor: 'white', padding: 10, flexDirection: 'row'},
  headerImageStyle: { width: 30, height: 30, borderRadius: 30 },
  headerSearchStyle: {backgroundColor: '#F6F6F6', flex: 1, marginStart: 10, padding: 5},
  widthHeight20: { width: 20, height: 20 },
  postFooterStyle: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
  commentViewStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1, paddingBottom: 10, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }
});