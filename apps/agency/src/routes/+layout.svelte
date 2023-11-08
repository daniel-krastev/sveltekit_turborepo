<script lang="ts">
	import '../app.postcss'
	import { Toast, initializeStores } from '@skeletonlabs/skeleton'

	initializeStores()
</script>

<Toast />

<div class="flex h-full w-full flex-col">
	<div
		class="bg-surface-500 sticky inset-x-0 top-0 z-10 flex h-16 items-center justify-between p-4 shadow-md"
		role="toolbar"
	>
		<a href="/" class="h1 bg-white">HOME</a>
	</div>
	<div class="h-full w-full"><slot /></div>
</div>
