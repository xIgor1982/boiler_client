<template>
	<b-container>
		<b-card
			:title="`Счетчики котельной - ${boiler.kotName}`"
			:sub-title="`Адрес котельной - ${boiler.kotAdress}`"
			class="mt-1 p-0 w-100"
		>
			<p>IP котельной: {{ boiler.kotIp }}</p>
			<b-card-text>
				Небольшой пример текста, который должен основываться на
				<em>заголовке карточки</em> и составлять основную часть содержимого
				карточки.
			</b-card-text>

			<b-card-text>Второй абзац текста на карточке.</b-card-text>

			<router-link to="/allboilers">
				<button class="effect">Вернуться к котельным</button>
			</router-link>
		</b-card>

		<h2 class="text-center mt-2">Счетчики всего {{ counters.length }} шт.</h2>
		<table class="w-100 mt-2 mb-2" border="1">
			<thead>
				<tr>
					<th>id_counter</th>
					<th>cnt_name</th>
					<th>cnt_type</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="counter in counters" :key="counter.idCounter">
					<td>{{ counter.idCounter }}</td>
					<td>{{ counter.cntName }}</td>
					<td>{{ counter.cntType }}</td>
				</tr>
			</tbody>
		</table>

		<!-- <b-container>
			<b-row class="table-header">
				<b-col class="table-title">id_counter</b-col>
				<b-col class="table-title">cnt_name</b-col>
				<b-col class="table-title">cnt_type</b-col>
			</b-row>
			<b-row
				class="table-header-content"
				v-for="counter in counters"
				:key="counter.idCounter"
			>
				<b-col class="table-content">{{ counter.idCounter }}</b-col>
				<b-col class="table-content">{{ counter.cntName }}</b-col>
				<b-col class="table-content">{{ counter.cntType }}</b-col>
			</b-row> -->
		</b-container>
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			boiler: this.$route.params.boiler,
			boilerId: this.$route.params.id,
			counters: this.$route.params.counters,
		};
	},
	created() {},
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

.effect {
	background-color: #dc3545;
	color: white;
	outline: none;
	border: none;
	padding: 5px 10px;
	border-radius: 3px;
	cursor: pointer;
	transition: all 0.3s;
}

.effect:hover {
	-webkit-box-shadow: 0px 0px 11px -2px rgba(34, 60, 80, 1);
	-moz-box-shadow: 0px 0px 11px -2px rgba(34, 60, 80, 1);
	box-shadow: 0px 0px 11px -2px rgba(34, 60, 80, 1);
	background-color: white;
	color: #dc3545;
}
</style>
