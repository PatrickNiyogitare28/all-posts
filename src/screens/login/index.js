import React, {useState} from 'react';
import {
  View,
  Text,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const renderPagination = (index) => {
      return (
          <View style={styles.paginationContainer}>
              <Text style={
                  (index === 0) ? 
                   styles.activePaginationItem :
                   styles.paginationItem
                   }>
              </Text>
              <Text style={
                  (index === 1) ? 
                   styles.activePaginationItem :
                   styles.paginationItem
                   }>
              </Text>
              <Text style={
                  (index === 2) ? 
                   styles.activePaginationItem :
                   styles.paginationItem
                   }>
              </Text>
          </View>
      )
  }
  const RenderItem = ({item}) => {
    return (
      <View
        style={styles.slider}>
        <Text style={styles.introHighligh}>{item.highlight}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <></>
      ) : (
        <>  
        <View style={styles.mainContainer}>

        <View style={styles.container}>
        <View  style={styles.titleWrapper}>
           
        </View>
        <View style={styles.textHeaderContainer}>
            <Text style={styles.textHeader}>Get started</Text>
        </View>

        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={false}
          showNextButton={false}
          showDoneButton={false}
          dotClickEnabled={false}
          bottomButton={true}
          renderPagination={renderPagination}
          />
         </View>
        </View>
        </>
      )}
    </>
  );
};

export default App;


const slides = [
  {
      key: 's1',
      highlight: 'Publish Your Passion in Own Way Its free'
  },
  {
    key: 's2',
    highlight: 'Read all posts and comments in One platform'
  },
  {
    key: 's3',
    highlight: 'Be able to express your expressions on a a Post'
  }
   
];