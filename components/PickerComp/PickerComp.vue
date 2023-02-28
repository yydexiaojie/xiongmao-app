<template>
	<view class="picker-comp">

	</view>
</template>

<script setup lang="ts">
	interface IPickerProps {
		mode?: string
		data?: any
		value?: string
	}
	const props = defineProps<IPickerProps>( )
</script>

<style scoped>

</style>