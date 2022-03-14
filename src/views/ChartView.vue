<template>
	<b-container>
		<h1 class="text-center">График</h1>
		<div>
			<apexcharts
				width="500"
				type="bar"
				:options="chartOptions"
				:series="series"
			></apexcharts>
			<div class="text-center">
				<b-button variant="outline-primary" @click="updateChart"
					>Update!</b-button>
			</div>
		</div>
	</b-container>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
	components: {
		apexcharts: VueApexCharts,
	},
	data: function () {
		return {
			chartOptions: {
				chart: {
					id: "vuechart-example",
				},
				xaxis: {
					categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
				},
			},
			series: [
				{
					name: "series-1",
					data: [30, 40, 45, 50, 49, 60, 70, 91],
				},
			],
		};
	},
	methods: {
		updateChart() {
			const max = 90;
			const min = 20;
			const newData = this.series[0].data.map(() => {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			});

			const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

			// Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
			this.chartOptions = {
				colors: [colors[Math.floor(Math.random() * colors.length)]],
			};
			// In the same way, update the series option
			this.series = [
				{
					data: newData,
				},
			];
		},
	},
};
</script>

<style lang="scss">
.center {
	margin: 0 auto;
}
</style>
