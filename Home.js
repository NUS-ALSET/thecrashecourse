import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView,TextInput, TouchableOpacity, Linking, ImageBackground, Button,FlatList, StatusBar } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Expo from 'expo';
import Carousel from 'react-native-looped-carousel';


const {height,width} = Dimensions.get('window');
const CAROUSEL_HEIGHT = height * 0.35;
const SOCIAL_URL_FB = 'https://www.facebook.com/YouTubeCrashCourse';
const SOCIAL_URL_TWITT = 'https://twitter.com/TheCrashCourse';
const SOCIAL_URL_PIN = 'https://www.patreon.com/crashcourse';
const SOCIAL_URL_TUM = 'http://thecrashcourse.tumblr.com';
const SOCIAL_URL_YT = 'https://www.youtube.com/crashcourse';


export default class Home extends React.Component {
  state = {
    list: [
      // {img: require('./assets/anatomy.png')},
      // {img: require('./assets/astronomy.png')},
      // {img: require('./assets/bighistory.png')},
      // {img: require('./assets/biology.png')},
      // {img: require('./assets/chemistry.png')},
      // {img: require('./assets/ecology.png')},
      // {img: require('./assets/economics.png')},
      // {img: require('./assets/usgovernment.png')},
      // {img: require('./assets/ip.png')},
      // {img: require('./assets/literature.png')},
      // {img: require('./assets/psychology.png')},
      // {img: require('./assets/ushistory.png')},
      // {img: require('./assets/worldhistory1.png')},
      // {img: require('./assets/worldhistory2.png')},
      {img: 'https://thecrashcourse.com/img/courses/anatomy.png'},
      {img: 'https://thecrashcourse.com/img/courses/astronomy.png'},
      {img: 'https://thecrashcourse.com/img/courses/bighistory.png'},
      {img: 'https://thecrashcourse.com/img/courses/biology.png'},
      {img: 'https://thecrashcourse.com/img/courses/chemistry.png'},
      {img: 'https://thecrashcourse.com/img/courses/ecology.png'},
      {img: 'https://thecrashcourse.com/img/courses/economics.png'},
      {img: 'https://thecrashcourse.com/img/courses/usgovernment.png'},
      {img: 'https://thecrashcourse.com/img/courses/ip.png'},
      {img: 'https://thecrashcourse.com/img/courses/literature.png'},
      {img: 'https://thecrashcourse.com/img/courses/psychology.png'},
      {img: 'https://thecrashcourse.com/img/courses/ushistory.png'},
      {img: 'https://thecrashcourse.com/img/courses/worldhistory1.png'},
      {img: 'https://thecrashcourse.com/img/courses/worldhistory2.png'},
    ]
  };

  renderlist = ({item, index}) => {
    return (
        <View key={index} style={styles.courselistbox}>
          <TouchableOpacity>
            <Image source={{uri: item.img}} style={styles.courseimg} resizeMode="contain"/>
          </TouchableOpacity>
        </View>
      );
    }

keyExtractor = (item, index) => index;

  
  render() {
   
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0DC3D4" translucent={true} />
            <ScrollView>
            <View style={{height: height * 0.45}}>
               <ImageBackground style={styles.imgbg} source={require('./assets/main.jpg')} resizeMode= "cover">
                  <View style={styles.imglogocontainer}>
                    <Image style={styles.imglogo} source={require('./assets/logo.png')} />
                  </View>
                  <View style={styles.textinput}>
                    <TextInput style={styles.searchbox} underlineColorAndroid={'transparent'} placeholder="Search Videos"  placeholderTextColor="#666"/>
                    <FontAwesome style={styles.searchicon} name="search" size={18} color="#666"/>
                  </View>
               </ImageBackground>
            </View>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('DrawerOpen');}}>
                  <Ionicons style={styles.navbtn} name="ios-menu" size={30} color="#fff"/>
              </TouchableOpacity>
              <Text style={styles.menutext}>Menu</Text>
            </View>
            
            <Text style={styles.apptitle}>
                WELCOME TO CRASH COURSE
            </Text>
              <View style={[styles.slider, {height: CAROUSEL_HEIGHT}]}>
                        <Carousel
                            style={{width, height: CAROUSEL_HEIGHT}}
                            autoplay
                            bullets={true}
                            chosenBulletStyle={styles.activebullet}
                            bulletStyle={styles.bullet}
                            
                        >
                            <Image source={require('./assets/1.jpg')} style={{width, height: CAROUSEL_HEIGHT}} resizeMode="cover" />
                            <Image source={require('./assets/2.jpg')} style={{width, height: CAROUSEL_HEIGHT}} resizeMode="cover" />
                        </Carousel>
            </View>
            <View style={styles.sliderimg}>
              <View style={styles.textboxcontent}>
                <Text style={styles.textone}>
                  CRASH COURSE IS ONE OF THE BEST WAYS TO EDUCATE YOURSELF, YOUR CLASSMATES, AND YOUR FAMILY ON YOUTUBE! 
                </Text>

                <Text style={styles.texttwo}>
                  FROM COURSES LIKE ASTRONOMY, TO US HISTORY, AND ANATOMY & PHYSIOLOGY, IT’S GOT YOU COVERED WITH AN AWESOME VARIETY OF AP HIGH SCHOOL CURRICULUM TOPICS. WITH VARIOUS WITTY HOSTS AT YOUR SERVICE, YOU WON’T EVEN NOTICE YOU’RE GETTING SMARTER!
                </Text>
              </View>
            </View>
            <View style={styles.btncourse}>
              <TouchableOpacity style={styles.btnchhosecourse}>
                <Text style = {styles.choosebutton}>
                   CHOOSE A COURSE
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.courselistcontainer}>
              <FlatList 
                numColumns={2}
                data={this.state.list}
                renderItem={this.renderlist}
                keyExtractor={this.keyExtractor}
              />
            </View>
            <View style={styles.footer}>
              <View style={styles.footersocialcontent}>
                <TouchableOpacity style={styles.socialbtn} onPress={() => {Linking.openURL(SOCIAL_URL_FB);}}>
                    <Image source={require('./assets/fbl.png')} style={styles.socialimg} resizeMode='contain' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialbtn} onPress={() => {Linking.openURL(SOCIAL_URL_TWITT);}}>
                    <Image source={require('./assets/twit-logo.png')} style={styles.socialimg} resizeMode='contain' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialbtn} onPress={() => {Linking.openURL(SOCIAL_URL_PIN);}}>
                    <Image source={require('./assets/pat-logo.png')} style={styles.socialimg} resizeMode='contain' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialbtn} onPress={() => {Linking.openURL(SOCIAL_URL_TUM);}}>
                    <Image source={require('./assets/tum-logo.png')} style={styles.socialimg} resizeMode='contain' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialbtn} onPress={() => {Linking.openURL(SOCIAL_URL_YT);}}>
                    <Image source={require('./assets/yt-logo.png')} style={styles.socialimg} resizeMode='contain' />
                </TouchableOpacity>
                    
              </View>
            </View>
        </ScrollView>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    backgroundColor: '#0DC3D4',
    padding: 12,
  },
  menutext:
  {
    position:'absolute',
    left: 65,
    top: 10,
    color: 'white',
    fontSize: 18,
    fontFamily:'oswald-medium'
  },
  imgbg:
  {
    flex: 1,
    width: null, 
    height: null, 
    justifyContent:'flex-end',
  },
  imglogocontainer:
  {
    justifyContent:'center',alignItems:'center'
  },
  imglogo:
  {
    width:270,
    height:200,
  },
  textinput:
  {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  searchbox:
  {
    height: 40,
    borderWidth: 1,
    borderColor:'#666', 
    borderRadius: 50,
    backgroundColor: 'white',
    textAlign: 'left',
    paddingLeft: 15,
    color: '#666',
    fontFamily: 'oswald-medium',
  },
  searchicon:
  {
    position: 'absolute',
    right:30,
    top:10,
    textAlign:'right'
  },
  navbtn:
  {
    textAlign: 'left',
    left: 20,
    marginVertical: 'auto',
  },
  apptitle:
  {
    fontSize: 50,
    color: '#0DC3D4',
    textAlign: 'center',
    paddingVertical: 30,
    fontFamily: 'oswald-regular',
    letterSpacing: 3,
  },
  sliderimg:
  {
    flex:1,
  },
  imgslide:
  {
    width: 370,
    height: 200,
  },
  textboxcontent:
  {
    backgroundColor: '#0DC3D4',
  },
  textone:
  {
    color:'white',
    paddingHorizontal: 30,
    paddingVertical: 30,
    fontSize: 18,
    fontFamily: 'oswald-medium',
    textAlign: 'left',
  },
  texttwo:
  {
    color:'white',
    paddingHorizontal: 30,
    fontSize: 18,
    fontFamily: 'oswald-medium',
    textAlign: 'left', 
    paddingBottom: 30,
  },
  btncourse:
  {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 40,
  }, 
  btnchhosecourse:
  {
    backgroundColor:'#0DC3D4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25
 },
  choosebutton:
  {
    color:'white',
    fontSize: 17,
    fontFamily: 'oswald-medium',
  },
  courselistcontainer:
  {
    backgroundColor: '#E6F9FB',
    paddingBottom: 50,
  },
  courselistbox:
  {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  courseimg:
  {
    height: 100,
    width: 195
  },
  bullet:
  {
    height: 10,
    width: 10,
    marginLeft: 3,
    marginRight:3,
  },
  activebullet: 
  {
    height: 13,
    width: 13,
    marginRight:3,
    marginLeft: 3,
  },
  footer:
  {
    backgroundColor: '#0DC3D4',
    padding: 30,
  },
  footersocialcontent:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialbtn:
  {
    paddingLeft: 7,
  },
  socialimg:
  {
    width:50, 
    height: 50,
    
  }
});

