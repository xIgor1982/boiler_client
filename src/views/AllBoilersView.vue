<template>
	<b-container>
		<b-row class="table-header">
			<b-col class="table-title">id_kotelnay</b-col>
			<b-col class="table-title">kot_name</b-col>
			<b-col class="table-title">kot_adress</b-col>
			<b-col class="table-title">kot_ip</b-col>
			<b-col class="table-title">kot_port</b-col>
		</b-row>
		<b-row
			class="table-header-content"
			v-for="boiler in boilers"
			:key="boiler.idKotelnay"
		>
			<b-col class="table-content">
				<b-row>
					<b-col>{{ boiler.idKotelnay }}</b-col>
					<b-col>
						<router-link
							:to="{
								name: `boilerpage`,
								params: { id: boiler.idKotelnay, boiler: boiler, counters: boiler.counters },
							}"
						>
							<b-icon icon="arrow-right-square-fill" class="icon-get"></b-icon>
						</router-link>
					</b-col>
				</b-row>
			</b-col>
			<b-col class="table-content">{{ boiler.kotName }}</b-col>
			<b-col class="table-content">{{ boiler.kotAdress }}</b-col>
			<b-col class="table-content">{{ boiler.kotIp }}</b-col>
			<b-col class="table-content">{{ boiler.kotPort }}</b-col>
		</b-row>
	</b-container>
</template>

<script>
function createSubArray(k) {
	const num = Math.floor(Math.random() * (9 - 1) + 1);

	const resArray = [];
	for (let i = 0; i < num; i++) {
		let obj = {
			idCounter: `idCounter ${k}:${i + 1}`,
			cntName: `cnt_name ${k}:${i + 1}`,
			cntType: `cnt_type ${k}:${i + 1}`,
		};
		resArray.push(obj);
	}
	return resArray;
}

function createArrayBoiler(num) {
	const resArray = [];
	for (let i = 0; i < num; i++) {
		const k = i + 1;
		const subArr = createSubArray(k)
		let obj = {
			idKotelnay: k,
			kotName: `name ${k}`,
			kotAdress: `adress ${k}`,
			kotIp: `ip ${k}`,
			kotPort: `port ${k}`,
			counters: createSubArray(k)
		};
		resArray.push(obj);
	}
	return resArray;
}

export default {
	data() {
		return {
			boilers: createArrayBoiler(30),
		};
	},
	methods: {
		routeLink(id) {
			return `/allboilers/${id}`;
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
</style>
