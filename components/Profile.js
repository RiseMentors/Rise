import React, { Component } from "react";
import { Card, Icon } from "react-native-elements";
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";
import { connect } from "react-redux";

import Separator from "../components/Separator";
import { HOST } from "../config/url";
import { createMatch } from "../actions/matches.actions";
import { Chip } from "react-native-paper";
import { Content } from "native-base";

const uuidv1 = require("uuid/v1");

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFF",
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: "center",
      },
    }),
  },
  placeIcon: {
    color: "white",
    fontSize: 26,
  },
  scroll: {
    backgroundColor: "#FFF",
  },
  telContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  userCityRow: {
    backgroundColor: "transparent",
  },
  userCityText: {
    color: "#A5A5A5",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  userBioText: {
    paddingLeft: 15,
    color: "#000000",
    fontSize: 15,
    fontWeight: "300",
  },
  userTitleText: {
    paddingLeft: 15,
    paddingTop: 15,
    color: "#000000",
    fontSize: 15,
    fontWeight: "600",
  },
  userImage: {
    borderColor: "#01C89E",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
    textAlign: "center",
  },
  uploadBtnContainer: {
    margin: "auto",
  },
  uploadBtn: {
    margin: "auto",
  },
  editBtn: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 200,
    height: 100,
    marginHorizontal: 300,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
  },
  chipsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

class Profile extends Component {
  state = {
    image: this.props.profile_pic_URL,
    text: "",
  };

  handleMatch = () => {
    this.props.createMatch(this.props.user_id);
  };

  handleRate = () => {
    this.props.navigation.navigate("Ratings");
  };

  renderHeader = () => {
    const {
      first_name,
      last_name,
      user_id,
      zipcode,
      preview,
      profile_pic_URL,
      my_user_id,
    } = this.props;
    const name = `${first_name} ${last_name}`;

    let image = "";
    if (preview) {
      image += profile_pic_URL;
    } else {
      const fromLinkedin = profile_pic_URL.includes("licdn");
      image =
        __DEV__ && !fromLinkedin
          ? `http://${HOST}/user/${user_id}/profilepic`
          : profile_pic_URL;
      if (!fromLinkedin) {
        image += `?${encodeURI(uuidv1())}`;
      }
    }

    const isMeMentor = this.props.my_user_id[0] === "1";
    const isZeMentor = this.props.user_id[0] === "1";
    return (
      <Content
        style={styles.headerContainer}
      >
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{
            uri:
              "https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png",
          }}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{
                uri: image,
              }}
            />

            <Text style={styles.userNameText}>{name}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                  onPress={this.onPressPlace}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>{zipcode}</Text>
              </View>
            </View>
            {this.props.matches.some(
              user => user.user_id === this.props.user_id
            ) ? (
              <View style={styles.uploadBtnContainer}>
                <Button style={styles.uploadBtn} title="MATCHED" disabled />
              </View>
            ) : (
              my_user_id !== user_id &&
              isZeMentor !== isMeMentor && (
                <View style={styles.uploadBtnContainer}>
                  <Button
                    onPress={this.handleMatch}
                    style={styles.uploadBtn}
                    title="Match"
                  />
                </View>
              )
            )}
            {isZeMentor && my_user_id !== user_id && (
              <View style={styles.uploadBtnContainer}>
                <Button
                  onPress={this.handleRate}
                  style={styles.uploadBtn}
                  title="Rate"
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </Content>
    );
  };

  renderBio = () => {
    const { biography, profession, skills } = this.props;
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.userTitleText}>About Me</Text>
        </View>
        <Text style={styles.userBioText}>{biography}</Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.userTitleText}>Desired Profession</Text>
        </View>
        <Text style={styles.userBioText}>{profession}</Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.userTitleText}>Desired Skills</Text>
        </View>
        <View style={styles.chipsContainer}>
          {skills.split(",").map(skill => (
            <Chip
              style={styles.chip}
              key={skill}
              icon="info"
              onPress={() => console.log("Pressed")}
            >
              {skill}
            </Chip>
          ))}
        </View>
      </View>
    );
  };

  render() {
    return (
      this.props.loggedIn && (
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <Card containerStyle={styles.cardContainer}>
              {this.renderHeader()}
              {this.renderBio()}
              {Separator()}
            </Card>
          </View>
        </ScrollView>
      )
    );
  }
}

const mapStateToProps = state => ({
  matches: state.search.matches,
  my_user_id: state.user.user_id,
  loggedIn: state.user.loggedIn,
});

export default connect(
  mapStateToProps,
  {
    createMatch,
  }
)(Profile);
