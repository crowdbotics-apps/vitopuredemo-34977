import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c057/a894/c119e38f3bc10e13108424db4e28e5f3"
        }}
        style={styles.ImageBackground_909_26625}
      />
      <View style={styles.View_909_26628}>
        <View style={styles.View_I909_26628_98_81}>
          <Text style={styles.Text_I909_26628_98_81}>Demo</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80d1/7fd2/893eae623ddf00f06e36a19e5aaf6f4c"
        }}
        style={styles.ImageBackground_909_26629}
      />
      <View style={styles.View_909_26636}>
        <Text style={styles.Text_909_26636}>Smarten up your home</Text>
      </View>
      <View style={styles.View_909_26637}>
        <Text style={styles.Text_909_26637}>Design your life.</Text>
      </View>
      <View style={styles.View_909_26638}>
        <View style={styles.View_I909_26638_75_8}>
          <Text style={styles.Text_I909_26638_75_8}>Log in</Text>
        </View>
      </View>
      <View style={styles.View_909_26639}>
        <View style={styles.View_I909_26639_75_10}>
          <Text style={styles.Text_I909_26639_75_10}>Sign up</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  ImageBackground_909_26625: {
    width: wp("29%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_909_26628: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I909_26628_98_81: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I909_26628_98_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_909_26629: {
    width: wp("158%"),
    minWidth: wp("158%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("47%")
  },
  View_909_26636: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_909_26636: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_909_26637: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_909_26637: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_909_26638: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I909_26638_75_8: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I909_26638_75_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_909_26639: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("49%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I909_26639_75_10: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I909_26639_75_10: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
