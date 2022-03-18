<template>
	<b-container>
		<b-card
			:title="`Счетчики котельной - ${boiler.kotName}`"
			:sub-title="`Адрес котельной - ${boiler.kotAdress}`"
			class="mt-1 p-0 w-100"
		>
			<p>IP котельной: {{boiler.kotIp}}</p>
			<b-card-text>
				Небольшой пример текста, который должен основываться на
				<em>заголовке карточки</em> и составлять основную часть содержимого
				карточки.
			</b-card-text>

			<b-card-text>Второй абзац текста на карточке.</b-card-text>

			<router-link to="/allboilers">
				<b-button variant="danger">Вернуться к котельным</b-button>
			</router-link>
		</b-card>

		<b-container>
			<h2 class="text-center mt-2">Счетчики всего {{counters.length}} шт.</h2>
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
			</b-row>
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


</style>
