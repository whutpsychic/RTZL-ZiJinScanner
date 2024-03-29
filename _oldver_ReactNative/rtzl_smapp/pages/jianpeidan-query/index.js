import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Tips from '../../components/Tips/index';
import {connect} from 'react-redux';
import {login} from '../../redux/actions.js';

const uri = 'file:///android_asset/h5/jianpeidan-query/index.html';

class Default extends React.MyPage {
  onLoad() {}

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle={'dark-content'} />
        <View style={styles.container}>
          <WebView
            style={{flex: 1}}
            originWhitelist={['*']}
            source={{uri}}
            // injectedJavaScript={patchPostMessageJsCode}
            onMessage={this.onReceive}
          />
        </View>
        <Tips ref="tips" />
      </React.Fragment>
    );
  }

  onReceive = event => {
    const {
      navigation,
      navigation: {navigate},
    } = this.props;
    const receivedData = JSON.parse(event.nativeEvent.data);
    console.log(receivedData);
    //查询及跳转
    if (receivedData.etype === 'query') {
      //整理查询数据
      let condition = {};
      if (receivedData.date) {
        condition.startDate =
          receivedData.date.split(' 至 ')[0].replace(/\//g, `-`) + ` 00:00:00`;
        condition.endDate =
          receivedData.date.split(' 至 ')[1].replace(/\//g, `-`) + ` 23:59:59`;
      } else {
        this.refs.tips.show('请先选择日期');
        return;
        condition.startDate = '';
        condition.endDate = '';
      }

      if (receivedData.value) condition.str = receivedData.value;
      navigate('jianpeidan-result', {...condition});
    } else if (receivedData.etype === 'backbtn') {
      navigation.goBack();
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn: {
    width: 100,
    height: 40,
    backgroundColor: '#389edc',
    marginTop: 40,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    logout: () => {
      dispatch(login(false));
    },
  };
};

export default connect(null, mapDispatchToProps)(Default);
