import TabNavigator from 'react-native-tab-navigator';
import { createAppContainer } from 'react-navigation';
import { HomeNav } from '../Nav/App';
import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
const styles = StyleSheet.create({
	menuItemIconImage: {
		width: 22,
		height: 22
	}
});
// eslint-disable-next-line import/no-commonjs
const ICON_IMAGES = {
	wallet: require('../../images/icon_wallet.png'),
	'selected-wallet': require('../../images/icon_wallet1.png'),
	market: require('../../images/icon_market.png'),
	'selected-market': require('../../images/icon_market1.png'),
	browser: require('../../images/icon_browser.png'),
	'selected-browser': require('../../images/icon_browser1.png'),
	mine: require('../../images/icon_mine.png'),
	'selected-mine': require('../../images/icon_mine1.png')
};
const MyHomeNav = createAppContainer(HomeNav);
class Index extends PureComponent {
	state = {
		selectedTab: 'wallet'
	};
	getImageIcon(name) {
		return <Image source={ICON_IMAGES[name]} style={styles.menuItemIconImage} />;
	}
	getSelectedImageIcon(name) {
		return <Image source={ICON_IMAGES[`selected-${name}`]} style={styles.menuItemIconImage} />;
	}
	render() {
		return (
			// eslint-disable-next-line react-native/no-inline-styles
			<TabNavigator style={{ flex: 1 }}>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'home'}
					title="Wallet"
					renderIcon={() => this.getImageIcon('wallet')}
					renderSelectedIcon={() => this.getSelectedImageIcon('wallet')}
					onPress={() => this.setState({ selectedTab: 'wallet' })}
				>
					<MyHomeNav />
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'market'}
					title="market"
					renderIcon={() => this.getImageIcon('market')}
					renderSelectedIcon={() => this.getSelectedImageIcon('market')}
					onPress={() => this.setState({ selectedTab: 'market' })}
				>
					<Text>market</Text>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'browser'}
					title="browser"
					renderIcon={() => this.getImageIcon('browser')}
					renderSelectedIcon={() => this.getSelectedImageIcon('browser')}
					onPress={() => this.setState({ selectedTab: 'browser' })}
				>
					<Text>browser</Text>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'mine'}
					title="mine"
					renderIcon={() => this.getImageIcon('mine')}
					renderSelectedIcon={() => this.getSelectedImageIcon('mine')}
					onPress={() => this.setState({ selectedTab: 'mine' })}
				>
					<Text>mine</Text>
				</TabNavigator.Item>
			</TabNavigator>
		);
	}
}
export default Index;
