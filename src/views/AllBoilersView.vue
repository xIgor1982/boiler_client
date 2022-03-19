<template>
	<b-container>
		<button class="remove" @click="removeLocalStorage">
			Сброс всех данных тестового проекта
		</button>
		<table class="w-100 mt-1 mb-2" border="1">
			<thead>
				<tr>
					<th width="7%" class="text-center">id_item</th>
					<th class="text-center">kot_name</th>
					<th class="text-center">kot_adress</th>
					<th class="text-center">kot_ip</th>
					<th class="text-center" colspan="2">kot_port</th>
				</tr>
				<tr>
					<td class="text-center padding-table-input-td">
						<input
							class="padding-table-input"
							type="text"
							placeholder="фильтр"
							v-model="searchId"
						/>
					</td>
					<td class="text-center padding-table-input-td">
						<input
							class="padding-table-input"
							type="text"
							placeholder="фильтр"
							v-model="searchKotName"
						/>
					</td>
					<td class="text-center padding-table-input-td">
						<input
							class="padding-table-input"
							type="text"
							placeholder="фильтр"
							v-model="searchKotAddress"
						/>
					</td>
					<td class="text-center padding-table-input-td">
						<input
							class="padding-table-input"
							type="text"
							placeholder="фильтр"
							v-model="searchKotIp"
						/>
					</td>
					<td colspan="2" class="text-center padding-table-input-td">
						<input
							class="padding-table-input"
							type="text"
							placeholder="фильтр"
							v-model="searchKotPort"
						/>
					</td>
				</tr>
				<tr>
					<td class="pl-1 pr-1">
						<table class="w-100">
							<tr>
								<td class="pt-1">
									<b-icon
										icon="arrow-down-up"
										aria-hidden="true"
										class="effect arrow-down-up"
										@click="() => toggleId()"
									></b-icon>
								</td>
								<td class="text-right">
									<b-icon
										:icon="elementIdItem.icon"
										aria-hidden="true"
									></b-icon>
								</td>
							</tr>
						</table>
					</td>
					<td class="pl-2">
						<table class="w-100">
							<tr>
								<td class="pt-1">
									<b-icon
										icon="arrow-down-up"
										aria-hidden="true"
										class="effect arrow-down-up"
										@click="() => toggleCotName()"
									></b-icon>
								</td>
								<td class="text-right">
									<b-icon
										:icon="elementKotName.icon"
										aria-hidden="true"
									></b-icon>
								</td>
							</tr>
						</table>
					</td>
					<td class="pl-2">
						<table class="w-100">
							<tr>
								<td class="pt-1">
									<b-icon
										icon="arrow-down-up"
										aria-hidden="true"
										class="effect arrow-down-up"
										@click="() => toggleKotAddress()"
									></b-icon>
								</td>
								<td class="text-right">
									<b-icon
										:icon="elementKotAddress.icon"
										aria-hidden="true"
									></b-icon>
								</td>
							</tr>
						</table>
					</td>
					<td class="pl-2">
						<table class="w-100">
							<tr>
								<td class="pt-1">
									<b-icon
										icon="arrow-down-up"
										aria-hidden="true"
										class="effect arrow-down-up"
										@click="() => toggleKotIp()"
									></b-icon>
								</td>
								<td class="text-right">
									<b-icon :icon="elementKotIp.icon" aria-hidden="true"></b-icon>
								</td>
							</tr>
						</table>
					</td>
					<td colspan="2" class="pl-2">
						<table class="w-100">
							<tr>
								<td class="pt-1">
									<b-icon
										icon="arrow-down-up"
										aria-hidden="true"
										class="effect arrow-down-up"
										@click="() => toggleKotPort()"
									></b-icon>
								</td>
								<td class="text-right">
									<b-icon
										:icon="elementKotPort.icon"
										aria-hidden="true"
									></b-icon>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="boiler in resultBoilers.sortArr" :key="boiler.newId">
					<td>{{ boiler.idKotelnay }}</td>
					<td>{{ boiler.kotName }}</td>
					<td>{{ boiler.kotAdress }}</td>
					<td>{{ boiler.kotIp }}</td>
					<td>{{ boiler.kotPort }}</td>
					<td width="10%">
						<router-link
							:to="{
								name: `boilerpage`,
								params: {
									id: boiler.idKotelnay,
									boiler: boiler,
									counters: boiler.counters,
								},
							}"
						>
							<button class="w-100 p-0 effect">Перейти</button>
						</router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</b-container>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import {
	ICON_SORT_DEFAULT,
	ICON_SORT_ID_UP,
	ICON_SORT_ID_DOWN,
	SORT_UP,
	SORT_DOWN,
	BOILER_ID,
	BOILER_NAME,
	BOILER_ADDRESS,
	BOILER_IP,
	BOILER_PORT,
} from "../utilities/constant.js";

//---> MOC - данные
const numMin = Math.floor(Math.random() * (9 - 1) + 1);
const randomBigNum = () => Math.floor(Math.random() * (1000 - 1) + 1000);
const randomIP = () => Math.floor(Math.random() * (200 - 1)) + 200;

function createSubArray(k) {
	const resArray = [];
	for (let i = 0; i < numMin; i++) {
		let obj = {
			idCounter: `idCounter ${k} : ${randomBigNum() * 4}`,
			cntName: `cnt_name ${k} : ${randomBigNum() * 3}`,
			cntType: `cnt_type ${k} : ${randomBigNum() * 7}`,
		};
		resArray.push(obj);
	}
	return resArray;
}

function createArrayBoiler(num) {
	const resArray = [];
	for (let i = 0; i < num; i++) {
		let obj = {
			[BOILER_ID]: `${i + 1}`,
			[BOILER_NAME]: `name: ${randomBigNum()}`,
			[BOILER_ADDRESS]: `adress: ${randomBigNum()}`,
			[BOILER_IP]: `ip => ${randomIP()}:${randomIP()}:${randomIP()}`,
			[BOILER_PORT]: `port: ${randomBigNum()}`,
			counters: createSubArray(i + 1),
		};
		resArray.push(obj);
	}
	return resArray;
}

//<--- MOC - данные

export default {
	data() {
		return {
			boilers: [],
			resultBoilers: "",
			//Сортировка
			elementIdItem: "",
			elementKotName: "",
			elementKotAddress: "",
			elementKotIp: "",
			elementKotPort: "",

			//Поиск
			searchId: "",
			searchKotName: "",
			searchKotAddress: "",
			searchKotIp: "",
			searchKotPort: "",
		};
	},
	methods: {
		removeLocalStorage() {
			localStorage.clear();
			this.fetchTable();
			localStorage.removeItem("boilers");
		},
		//Запуск и перезапуск
		fetchTable() {
			if (localStorage.getItem("boilers")) {

				//Основной массив с данными - не меняется (исходный массив)
				this.boilers = JSON.parse(localStorage.getItem("boilers"));

				if (localStorage.getItem("resultBoilers")) {
					this.addResultBoilers(
						this.boilers,
						JSON.parse(localStorage.getItem("resultBoilers"))
					);
				} else {
					this.addResultBoilers(this.boilers);
				}

				if (localStorage.getItem("elementIdItem")) {
					const response = JSON.parse(localStorage.getItem("elementIdItem"));
					this.addElementIdItem(response.icon, response.methodSort);
				} else {
					this.addElementIdItem(ICON_SORT_DEFAULT, null);
				}

				if (localStorage.getItem("elementKotName")) {
					const response = JSON.parse(localStorage.getItem("elementKotName"));
					this.addElementKotName(response.icon, response.methodSort);
				} else {
					this.addElementKotName(ICON_SORT_DEFAULT, null);
				}

				if (localStorage.getItem("elementKotAddress")) {
					const response = JSON.parse(
						localStorage.getItem("elementKotAddress")
					);
					this.addElementKotAddress(response.icon, response.methodSort);
				} else {
					this.addElementKotAddress(ICON_SORT_DEFAULT, null);
				}

				if (localStorage.getItem("elementKotIp")) {
					const response = JSON.parse(localStorage.getItem("elementKotIp"));
					this.addElementKotIp(response.icon, response.methodSort);
				} else {
					this.addElementKotIp(ICON_SORT_DEFAULT, null);
				}

				if (localStorage.getItem("elementKotPort")) {
					const response = JSON.parse(localStorage.getItem("elementKotPort"));
					this.addElementKotPort(response.icon, response.methodSort);
				} else {
					this.addElementKotPort(ICON_SORT_DEFAULT, null);
				}
			} else {
				const array = createArrayBoiler(55);
				localStorage.setItem("boilers", JSON.stringify(array));
				this.fetchTable();
			}
		},

		//Построение таблицы
		addResultBoilers(arr, sortArr = arr) {
			this.resultBoilers = {
				newId: uuidv4(),
				arr,
				sortArr,
			};
		},

		//Общее обновление данных в массиве с данными
		buildTable(sortArr) {
			this.addResultBoilers(this.boilers, sortArr);
			localStorage.setItem(
				"resultBoilers",
				JSON.stringify(this.resultBoilers.sortArr)
			);
			localStorage.setItem("elementIdItem", JSON.stringify(this.elementIdItem));
			localStorage.setItem(
				"elementKotName",
				JSON.stringify(this.elementKotName)
			);
			localStorage.setItem(
				"elementKotAddress",
				JSON.stringify(this.elementKotAddress)
			);
			localStorage.setItem("elementKotIp", JSON.stringify(this.elementKotIp));
			localStorage.setItem(
				"elementKotPort",
				JSON.stringify(this.elementKotPort)
			);
		},

		//Инициализация данных для сортировки
		addElement(elementSelector, icon, methodSort) {
			this[elementSelector] = {
				newId: uuidv4(),
				icon,
				methodSort,
			};
		},
		//Кнопки сортировка
		addElementIdItem(icon, methodSort) {
			this.addElement("elementIdItem", icon, methodSort);
		},
		addElementKotName(icon, methodSort) {
			this.addElement("elementKotName", icon, methodSort);
		},
		addElementKotAddress(icon, methodSort) {
			this.addElement("elementKotAddress", icon, methodSort);
		},
		addElementKotIp(icon, methodSort) {
			this.addElement("elementKotIp", icon, methodSort);
		},
		addElementKotPort(icon, methodSort) {
			this.addElement("elementKotPort", icon, methodSort);
		},

		//Сортировка данных
		sortIdUp(sortArr) {
			sortArr.sort((a, b) => a[BOILER_ID] - b[BOILER_ID]);
			this.buildTable(sortArr);
		},
		sortIdDown(sortArr) {
			sortArr.sort((a, b) => b[BOILER_ID] - a[BOILER_ID]);
			this.buildTable(sortArr);
		},
		sortUp(arr, selector) {
			return arr.sort((a, b) => a[selector]?.localeCompare(b[selector]));
		},
		sortDown(arr, selector) {
			return arr.sort((a, b) => b[selector]?.localeCompare(a[selector]));
		},

		//Переключение иконок и активация сортировки
		toggleId() {
			if (
				this.elementIdItem.icon === ICON_SORT_DEFAULT ||
				this.elementIdItem.icon === ICON_SORT_ID_DOWN
			) {
				this.addElementIdItem(ICON_SORT_ID_UP, SORT_UP);
				this.sortIdUp(this.resultBoilers.arr);
			} else {
				this.addElementIdItem(ICON_SORT_ID_DOWN, SORT_DOWN);
				this.sortIdDown(this.resultBoilers.arr);
			}
		},

		toggleIcon(elementSelector, addElementSelector, constNameSelector) {
			let sortArr = [];
			if (
				this[elementSelector].icon === ICON_SORT_DEFAULT ||
				this[elementSelector].icon === ICON_SORT_ID_DOWN
			) {
				this[addElementSelector](ICON_SORT_ID_UP, SORT_UP);
				sortArr = this.sortUp(this.resultBoilers.arr, constNameSelector);
			} else {
				this[addElementSelector](ICON_SORT_ID_DOWN, SORT_DOWN);
				sortArr = this.sortDown(this.resultBoilers.arr, constNameSelector);
			}
			return sortArr;
		},

		toggleCotName() {
			const sortArr = this.toggleIcon(
				"elementKotName",
				"addElementKotName",
				BOILER_NAME
			);
			this.buildTable(sortArr);
		},
		toggleKotAddress() {
			const sortArr = this.toggleIcon(
				"elementKotAddress",
				"addElementKotAddress",
				BOILER_ADDRESS
			);
			this.buildTable(sortArr);
		},
		toggleKotIp() {
			const sortArr = this.toggleIcon(
				"elementKotIp",
				"addElementKotIp",
				BOILER_IP
			);
			this.buildTable(sortArr);
		},
		toggleKotPort() {
			const sortArr = this.toggleIcon(
				"elementKotPort",
				"addElementKotPort",
				BOILER_PORT
			);
			this.buildTable(sortArr);
		},
		searchForId() {
			let searchArr = this.resultBoilers.modernArr;
			searchArr.filter((search) =>
				search[BOILER_ID].toLowerCase().includes(this.searchId)
			);
			this.addResultBoilers(this.boilers, searchArr);
		},
	},
	mounted() {
		this.fetchTable();
	},
	watch: {
		//Поиск информации
		searchId(newValue) {
			this.fetchTable();
			const tmpArr = this.resultBoilers.sortArr.filter((item) => {
				return item[BOILER_ID].includes(newValue);
			});
			this.addResultBoilers(this.boilers, tmpArr);
		},
		searchKotName(newValue) {
			this.fetchTable();
			const tmpArr = this.resultBoilers.sortArr.filter((item) => {
				return item[BOILER_NAME].includes(newValue);
			});
			this.addResultBoilers(this.boilers, tmpArr);
		},
		searchKotAddress(newValue) {
			this.fetchTable();
			const tmpArr = this.resultBoilers.sortArr.filter((item) => {
				return item[BOILER_ADDRESS].includes(newValue);
			});
			this.addResultBoilers(this.boilers, tmpArr);
		},
		searchKotIp(newValue) {
			this.fetchTable();
			const tmpArr = this.resultBoilers.sortArr.filter((item) => {
				return item[BOILER_IP].includes(newValue);
			});
			this.addResultBoilers(this.boilers, tmpArr);
		},
		searchKotPort(newValue) {
			this.fetchTable();
			const tmpArr = this.resultBoilers.sortArr.filter((item) => {
				return item[BOILER_PORT].includes(newValue);
			});
			this.addResultBoilers(this.boilers, tmpArr);
		},
	},
};
</script>

<style lang="scss" scoped>
.table {
	&-title {
		border: 1px solid black;
		text-align: center;
		margin-right: 1px;
		font-weight: bold;
		margin-top: 3px;
	}
	&-content {
		border: 1px solid black;
		margin-right: 1px;
		margin-top: 1px;
	}
	&-content:last-child,
	&-title:last-child {
		margin-right: 0;
	}
}

.icon-get {
	cursor: pointer;

	&:hover {
		color: red;
	}
}

.br-danger {
	background-color: #dc3545;
}

.effect {
	background-color: #dc3545;
	color: white;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		-webkit-box-shadow: 0px 0px 11px -2px rgba(34, 60, 80, 1);
		-moz-box-shadow: 0px 0px 11px -2px rgba(34, 60, 80, 1);
		box-shadow: 0px 0px 11px -2px rgba(34, 60, 80, 1);
		background-color: white;
		color: #dc3545;
	}
}

.remove {
	background-color: #dc3545;
	color: white;
	outline: none;
	border: 1px solid transparent;
	transition: all 0.3s;
	margin-top: 5px;

	&:hover {
		border: 1px solid #dc3545;
		background-color: white;
		color: #dc3545;
	}
}

.arrow-down-up {
	width: 25px;
	height: 25px;
	padding: 3px;
	border-radius: 2px;
	margin: 0;
}

.padding-table-input-td {
	padding: 3px;
}

.padding-table-input {
	width: 96%;

	&:first-child {
		width: 90%;
		padding-right: 0;
	}
}
</style>
