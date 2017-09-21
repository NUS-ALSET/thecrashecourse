import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Expo from 'expo';



export default class Drawer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbarstyle}>
                    <TouchableOpacity style={styles.navlink}>
                        <Text style={styles.navlinkname}>COURSES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navlink}>
                        <Text style={styles.navlinkname}>ABOUT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navlink}>
                        <Text style={styles.navlinkname}>STORE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navlink}>
                        <Text style={styles.navlinkname}>YOUTUBE CHANNEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navlink}>
                        <Text style={styles.navlinkname}>CRASH COURSE KIDS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navlink}>
                        <Text style={styles.navlinkname}>CONTACT</Text>
                    </TouchableOpacity>
					<TouchableOpacity style={styles.navlink}>
						<Text style={styles.navlinkname}>SUPPORT US</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#0DC3D4',
  },
  navbarstyle:
  {
  	paddingTop: 50,
  },
  navlink:
  {
  	padding: 10,
  	borderBottomWidth: 1,
  	borderColor: 'white',
  },
  navlinkname:
  {
  	color: 'white',
  	fontFamily: 'oswald-medium',
  }
 });