import AsyncStorage from "@react-native-community/async-storage";

//本地数据缓存技术
const LocalStorage = {
	//获取本地数据
	getData: async key => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (typeof value === "string") return value;
			return JSON.parse(value);
		} catch (error) {
			console.log(error);
		}
	},

	//写入本地数据
	setData: async (key, value) => {
		if (typeof value === "string") {
		} else {
			value = JSON.stringify(value);
		}
		try {
			await AsyncStorage.setItem(key, value);
		} catch (error) {
			console.log(error);
		}
	}
};

export default LocalStorage;

//所有字段值标注:
// smapp_userId:""用户ID
// smapp_userName:""用户名
// smapp_psw:""登录密码
// smapp_isLoggin:bool是否已登录 

// ===========================暂时未用到===========================








// ===========================废弃===========================

