<template>
	<b-container>
		<h1>Регистрация пользователя</h1>
		<div>
			<b-form @submit="onSubmit" @reset="onReset" v-if="show">
				<b-form-group
					id="input-group-1"
					label="Введите email:"
					label-for="input-1"
					description="Мы никогда не передадим вашу электронную почту кому-либо еще."
				>
					<b-form-input
						id="input-1"
						v-model="form.email"
						type="email"
						placeholder="Введите email"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group id="input-group-2" label="Ваше Имя:" label-for="input-2">
					<b-form-input
						id="input-2"
						v-model="form.name"
						placeholder="Введите Имя"
						required
					></b-form-input>
				</b-form-group>

				<b-button type="submit" variant="primary">Отправить</b-button>
				<b-button type="reset" variant="danger" class="ml-2">Сбросить</b-button>
			</b-form>
		</div>
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			form: {
				email: "",
				name: "",
				food: null,
				checked: [],
			},
			foods: [
				{ text: "Select One", value: null },
				"Carrots",
				"Beans",
				"Tomatoes",
				"Corn",
			],
			show: true,
		};
	},
	methods: {
		onSubmit(event) {
			event.preventDefault();
			alert(JSON.stringify(this.form));
		},
		onReset(event) {
			event.preventDefault();
			// Сбросить значения нашей формы
			this.form.email = "";
			this.form.name = "";
			this.form.food = null;
			this.form.checked = [];
			// Уловка для сброса/очистки состояния проверки формы в собственном браузере
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
	},
};
</script>

<style lang="scss"></style>
