//import liraries
import React, { Component ,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import branch, { BranchEvent } from 'react-native-branch'

// create a component
const Profile = () => {
    
     const getBUO = async () =>{
        let branchUniversalObject = await branch.createBranchUniversalObject('canonicalIdentifier', {
            locallyIndex: true,
            title: 'Cool Content!',
            contentDescription: 'Cool Content Description',
            contentMetadata: {
              ratingAverage: 4.2,
              customMetadata: {
                prop1: 'test',
                prop2: 'abc'
              }
            }
          })
          
          let linkProperties = {
              feature: 'share',
              channel: 'facebook'
          }
          
          let controlParams = {
               $desktop_url: 'http://desktop-url.com/monster/12345'
          }
          
          let {url} = await branchUniversalObject.generateShortUrl(linkProperties, controlParams)
          let shareOptions = { messageHeader: 'Check this out', messageBody: 'No really, check this out!' }
         
         
          let {channel, completed, error} = await branchUniversalObject.showShareSheet(shareOptions, linkProperties, controlParams)
          console.log(`url : ${url}`);  
     }

    
     useEffect(() => {
       // getBUO();
      },[]);
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Profile;
