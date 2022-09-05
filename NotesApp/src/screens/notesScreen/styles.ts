import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/enum/GeneralEnum";

export const styles = StyleSheet.create({
  noteItemStyle: {
    backgroundColor: 'red', 
    marginHorizontal: 6, //normalize function can be used later
    borderRadius: 8, 
    height: 125, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  centralize: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },
  noteTextStyle: {
    fontWeight: 'bold', 
    fontSize: 18, 
    color: COLORS.PRIMARY
  },
  flex1: {
    flex: 1
  },
  mainViewStyle: {
    height: 50, 
    paddingHorizontal: 12, 
    justifyContent: 'flex-end', 
    flexDirection: 'row', 
    borderBottomColor: COLORS.SHADOW, 
    borderBottomWidth: 1, 
    alignItems: 'center'
  },
  sortImageStyle: {
    height: 20, 
    width: 20, 
    tintColor: COLORS.PRIMARY,
    marginRight: 12
  },
  logoutImageStyle: {
    height: 25, 
    width: 25, 
    tintColor: COLORS.PRIMARY
  },
  listContainerStyle: {
    marginTop: 12, 
    marginHorizontal: 6, 
    flex: 1
  },
  itemSeperatorStyle: {
    width: 12, height: 12
  },
  plusViewStyle: {
    justifyContent: 'center', 
    width: 60, 
    height: 60, 
    position: 'absolute', 
    alignItems: 'center', 
    bottom: 20, 
    right: 20, 
    borderRadius: 40, 
    borderWidth: 1, 
    borderColor: 'red'
  },
  plusImageStyle: {
    height: 60, 
    width: 60, 
    zIndex: 12, 
    tintColor: COLORS.PRIMARY
  },
  detailViewStyle: {
    height: 50,
    paddingHorizontal: 12, 
    flexDirection: 'row', 
    borderBottomColor: COLORS.SHADOW, 
    borderBottomWidth: 1, 
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  editImageStyle: {
    height: 20, 
    width: 20, 
    tintColor: COLORS.PRIMARY, 
    marginRight: 20
  },
  saveImageStyle: {
    height: 25, 
    width: 25, 
    tintColor: COLORS.PRIMARY
  },
  backImageStyle: {
    height: 24, 
    width: 24, 
    tintColor: COLORS.PRIMARY
  },
  noteTitleStyle: {
    marginHorizontal: 12, 
    fontWeight: 'bold', 
    fontSize: 24, 
    color: 'black'
  },
  noteBodyStyle: {
    marginHorizontal: 12, 
    fontSize: 16, 
    color: 'black'
  }
});