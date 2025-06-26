export const StorageClient = {
	storage: sessionStorage,

	getItem(key: string) {
		const item = this.storage.getItem(key);
		return item;
	},
	setItem(key: string, value: string) {
		this.storage.setItem(key, value);
		return this.getItem(key);
	},
};
