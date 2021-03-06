import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoilerPageView from "@/views/BoilerPageView.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/allboilers",
		name: "allboilers",
		component: () => import("../views/AllBoilersView.vue"),
	},
	{
		path: "/allboilers/:id",
		name: "boilerpage",
		props: true,
		component: BoilerPageView,
	},

	// {
	// 	path: "/chart",
	// 	name: "chart",
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () =>
	// 		import(/* webpackChunkName: "about" */ "../views/ChartView.vue"),
	// },
	// {
	// 	path: "/profile",
	// 	name: "profile",
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () =>
	// 		import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
	// },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
