import localStorage from './storage.js';
import config from '../config/index';

let proxy;
if (config.mode === 'production') {
	proxy = 'http://172.24.44.82:18085';
} else if (config.xcurl) {
	proxy = 'http://172.24.44.82:18085';
} else if (config.mode === 'develop') {
	proxy = 'http://10.99.189.115:18085';
}

// const proxy = 'http://192.168.62.7:18085';
// const proxy = 'http://172.24.44.82:18085';

function calcFetchObj(headerType, condition) {
	// console.log(condition);
	return localStorage.getData('token').then(data => {
		if (headerType.toLowerCase() === 'get') {
			return {
				method: headerType,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json;charset=UTF-8',
					Authorization: 'Bearer ' + data,
					...condition.headers,
				},
			};
		} else {
			return {
				method: headerType,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json;charset=UTF-8',
					Authorization: 'Bearer ' + data,
					...condition.headers,
				},
				body: JSON.stringify(condition),
			};
		}
	});
}

//暂时废弃
const fetcher = (url, condition = {}, headerType = 'get') => {
	if (!url) throw new Error('fetch 必须传入 url');
	// console.log(condition);
	//如果是get，需要在后面坠入所传参数
	if (headerType === 'get') {
		// url=url+
		let _str = JSON.stringify(condition)
			.replace(/{/g, ``)
			.replace(/}/g, ``)
			.replace(/"/g, ``)
			.replace(/,/g, `&`)
			.replace(/:/g, `=`);
		url += '?' + _str;
	}

	let obj = calcFetchObj(headerType, condition);

	return obj
		.then(data => {
			return fetch(proxy + '/api/consumer/' + url, data);
		})
		.then(res => {
			console.log(
				'--------------------------------------------------------------------',
			);
			console.log(res);
			console.log(
				'--------------------------------------------------------------------',
			);
			return res.json();
		})
		.catch(error => {
			console.log(error);
		});
};

//拼接在url中的通讯方式
const fetcher2 = (
	url,
	condition = {},
	headerType = 'get',
	login,
	needbackoff,
) => {
	if (!url) throw new Error('fetch 必须传入 url');
	// console.log(headerType);
	let _str = '';
	//如果是get，需要在后面坠入所传参数
	if (headerType.toLowerCase() === 'get' || needbackoff) {
		// url=url+
		_str = JSON.stringify(condition)
			.replace(/{/g, ``)
			.replace(/}/g, ``)
			.replace(/"/g, ``)
			.replace(/,/g, `&`)
			.replace(/:/g, `=`);
		url += '?' + _str;
	} else if (headerType.toLowerCase() === 'delete') {
		//删除专用
		url += '/' + condition;
		return fetch(proxy + '/api/consumer/' + url, {method: 'DELETE'})
			.then(res => {
				console.log(
					'--------------------------------------------------------------------',
				);
				console.log(res);
				console.log(
					'--------------------------------------------------------------------',
				);
				return res.json();
			})
			.catch(error => {
				console.log(error);
			});
	}

	let obj = calcFetchObj(headerType, condition);

	return obj
		.then(data => {
			// console.log(data);
			return login
				? fetch(proxy + '/' + url, data)
				: fetch(proxy + '/api/consumer/' + url, data);
		})
		.then(res => {
			console.log(
				'--------------------------------------------------------------------',
			);
			console.log(res);
			console.log(
				'--------------------------------------------------------------------',
			);
			return res.json();
		})
		.catch(error => {
			console.log(error);
		});
};

export default fetcher2;
