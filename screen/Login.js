import React from 'react';
import { WebView } from 'react-native-webview';

import {BackHandler,Platform,ActivityIndicator,AppRegistry} from 'react-native';

export default class App extends React.Component {
	constructor(props) {
    super(props);
  }
   webView = {
    canGoBack: false,
    ref: null,
  }
  /** For Loading And Back Button Press**/
    onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {

      this.webView.ref.goBack();
      return true;
    }
    return false;
  }
  

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

 _onRefresh = () => {
    this.setState({refreshing: true});
     this.webView.ref.reload();
     this.setState({refreshing: false});
  }
  /** For Loading And Back Button Press**/
	render() {
		return (
			<WebView  ref={(webView) => { this.webView.ref = webView; }}
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
        source={{ uri:'https://lasanianlyceum.org/MyApp/Login?id=1&branchId=7235'}} javaScriptEnabled={true}  domStorageEnabled={true} cacheEnabled={true} thirdPartyCookiesEnabled={true}
        style={{ marginTop: 20,}}
        
      />
		)
	}
}