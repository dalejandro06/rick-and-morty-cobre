<template>
	<div class="LoadingSkeleton">
		<div v-for="n in 6" :key="n" class="LoadingSkeleton__card">
			<div class="LoadingSkeleton__image"></div>
			<div class="LoadingSkeleton__title"></div>
			<div class="LoadingSkeleton__text"></div>
			<div class="LoadingSkeleton__text short"></div>
			<div class="LoadingSkeleton__actions">
				<div class="LoadingSkeleton__button"></div>
				<div class="LoadingSkeleton__button"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// No props necesarias
</script>

<style scoped>
.LoadingSkeleton {
	display: grid;
	grid-template-columns: repeat(3, minmax(300px, 1fr));
	gap: 2rem;
	margin: 0 3rem;
}
.LoadingSkeleton__card {
	background: #fff;
	border-radius: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: pulse 1.5s infinite ease-in-out;
}
.LoadingSkeleton__image {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	background: #ececec;
	margin-bottom: 1rem;
}
.LoadingSkeleton__title {
	width: 70%;
	height: 24px;
	background: #ececec;
	border-radius: 8px;
	margin-bottom: 0.75rem;
}
.LoadingSkeleton__text {
	width: 90%;
	height: 16px;
	background: #ececec;
	border-radius: 6px;
	margin-bottom: 0.5rem;
}
.LoadingSkeleton__text.short {
	width: 60%;
}
.LoadingSkeleton__actions {
	display: flex;
	gap: 1rem;
	width: 100%;
	margin-top: 1rem;
	justify-content: center;
}
.LoadingSkeleton__button {
	width: 80px;
	height: 32px;
	background: #ececec;
	border-radius: 8px;
}
@keyframes pulse {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 1;
	}
}
</style>
