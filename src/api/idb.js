const urlDB_NAME = 'urldb';
const DB_VERSION = 1;
let DB;

export default {
	async urlgetDb() {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			console.log('OPENING DB', DB);
			let request = window.indexedDB.open(urlDB_NAME, DB_VERSION);
			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};
	
			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};
			
			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore("urls", { autoIncrement: true, keyPath:'id' });
			};
		});
	},
	async deleteUrl(url) {

		let urldb = await this.urlgetDb();

		return new Promise(resolve => {

			let trans = urldb.transaction(['urls'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('urls');
			store.delete(url.id);
		});	
	},
	async getUrls() {

		let db = await this.urlgetDb();

		return new Promise(resolve => {

			let trans = db.transaction(['urls'],'readonly');
			trans.oncomplete = () => {
				resolve(urls);
			};
			
			let store = trans.objectStore('urls');
			let urls = [];
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					urls.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},
	async saveUrl(url) {

		let db = await this.urlgetDb();

		return new Promise(resolve => {
			console.log(url)
			let trans = db.transaction(['urls'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('urls');
			store.put(url);

		});
	
	}
}