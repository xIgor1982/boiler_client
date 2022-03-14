<template>
	<div id="app">
		<b-navbar toggleable="lg" type="dark" variant="info" sticky>
			<b-container>
				<b-navbar-brand to="/">Boiler</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<b-nav-item to="/chart">Сhart</b-nav-item>
					</b-navbar-nav>

					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<b-nav-item-dropdown right>
							<!-- Using 'button-content' slot -->
							<template #button-content>
								<em>User</em>
							</template>
							<b-dropdown-item to="/profile">Profile</b-dropdown-item>
							<b-dropdown-item href="#">Sign Out</b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav>
				</b-collapse>
			</b-container>
		</b-navbar>
		<router-view />
		<!-- <nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</nav>
		<router-view /> -->
	</div>
</template>

<style lang="scss">
.selector-for-some-widget {
	box-sizing: content-box;
}

.apexcharts-canvas {
  margin: 0 auto;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
