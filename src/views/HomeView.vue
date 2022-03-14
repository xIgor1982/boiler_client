<template>
	<b-container class="pt-2">
		<b-row>
			<b-col xl="3" md="6" sm="12">
				<div class="title">Первая группа</div>
				<b-form-select v-model="selected" :options="options"></b-form-select>
			</b-col>
			<b-col xl="3" md="6" sm="12">
				<div class="title">Вторая группа</div>
				<b-form-select v-model="selected2" :options="options2"></b-form-select>
			</b-col>
			<b-col xl="3" md="6" sm="12">
				<div class="title">Третья группа</div>
				<b-form-select v-model="selected3" :options="options3"></b-form-select>
			</b-col>
			<b-col xl="3" md="6" sm="12">
				<div class="title">Четвертая группа</div>
				<b-form-select v-model="selected4" :options="options4"></b-form-select>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			selected: null,
			selected2: null,
			selected3: null,
			selected4: null,
			options: [
				{ value: null, text: "Выберите вариант" },
				{ value: "a1", text: "Первый" },
				{ value: "a2", text: "Второй" },
			],
			options2: [
				{ value: null, text: "Выберите вариант" },
				{ value: "a3", text: "Третий" },
				{ value: "a4", text: "Четвертый" },
			],
			options3: [
				{ value: null, text: "Выберите вариант" },
				{ value: "a5", text: "Пятый" },
				{ value: "a6", text: "Шестой" },
			],
			options4: [
				{ value: null, text: "Выберите вариант" },
				{ value: "a7", text: "Седьмой" },
				{ value: "a8", text: "Восьмой" },
			],
		};
	},
};
</script>

<style lang="scss">
.title {
	text-align: center;
	font-weight: bold;
}
</style>
