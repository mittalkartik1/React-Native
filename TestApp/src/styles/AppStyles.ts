import { StyleSheet } from "react-native";

export const AppStyles = {
  color: {
    primary: "#2C50FF",
    text: "#696969",
    subtitle: "#545454",
    tint: "#ff5a66",
    grey: "grey",
  },
  fontSize: {
    title: 30
  },
  textInputWidth: {
    main: "80%"
  },
  borderRadius: {
    main: 25
  }
};

export const styles = StyleSheet.create({
  grayTextRight: { color: '#808080', textAlign: 'right' },
  boldTextRight: { fontWeight: 'bold', fontSize: 18, textAlign: 'right' },
  graytextLeft: { color: '#808080' },
  font18bold: { fontWeight: 'bold', fontSize: 18 },
  parentViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topViewStyle: {
    borderRadius: 15,
    padding: 12,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    margin: 12,
    backgroundColor: 'white',
  },
  lineHeight21: { lineHeight: 21 },
  inputViewStyle: {
    borderRadius: 8,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    padding: 8,
    backgroundColor: '#fafafa',
    flex: 1,
  },
  textInputStyle: {
    borderBottomColor: '#808080',
    borderBottomWidth: 1
  },
  rowViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexGrow: 1,
    marginTop: 12,
  },
  flexRowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  fullButtonStyle: {
    padding: 12,
    backgroundColor: '#2c50ff',
    borderRadius: 20,
    marginTop: 25,
    marginHorizontal: 40,
    alignItems: 'center'
  }
});
