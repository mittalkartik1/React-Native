import { StyleSheet } from "react-native";
import Theme from "./Theme";

export const styles = StyleSheet.create({
  loaderStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  soundIconStyle: {
    height: 40,
    width: 40,
    tintColor: 'white'
  },
  crossViewStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 20,
    marginTop: 10
  },
  bottomViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    paddingBottom: 30
  },
  closeImageStyle: {
    height: 20,
    width: 20,
    tintColor: Theme.PRIMARY_COLOR
  }
});