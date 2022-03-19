<template>
	<div id="app">
		<b-container fluid class="sticky-top p-0" style="top: 0px">
			<b-navbar toggleable="lg" type="dark" variant="danger" class="p-0 pt-2">
				<b-container>
					<b-navbar-brand class="text-center w-100 pb-0">
						СИСТЕМА КОНТРОЛЯ РАСХОДА ТОПЛИВА
					</b-navbar-brand>
				</b-container>
			</b-navbar>
			<b-navbar toggleable="lg" type="dark" variant="danger" class="pt-0">
				<b-container>
					<b-navbar-brand to="/">Главная</b-navbar-brand>

					<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

					<b-collapse id="nav-collapse" is-nav>
						<b-navbar-nav>
							<b-nav-item to="/allboilers">Котельные</b-nav-item>
						</b-navbar-nav>

						<!-- Right aligned nav items -->
						<b-navbar-nav class="ml-auto">
							<b-nav-item-dropdown right split-variant="danger">
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
		</b-container>

		<router-view />
	</div>
</template>

<style lang="scss">
* {
	box-sizing: content-box;
}

html {
	overflow-y: scroll;
}

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
