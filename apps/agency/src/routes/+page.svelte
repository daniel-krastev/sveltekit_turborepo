<script lang="ts">
	import { Button } from 'components'
	import { sumTwoNumbers } from 'libs/lib-one'
	import { sumThreeNumbers } from 'libs/lib-two'
	import { getToastStore } from '@skeletonlabs/skeleton'

	const toastStore = getToastStore()
</script>

<div class="h1 m-10 text-center">This is the agency app</div>
<div class="flex flex-col items-center justify-center gap-4">
	<div>
		<span class="h3">Sums 1 and 2 using the common library under libs/lib-one:</span>
		<Button
			text="Sum it!"
			onclick={() => {
				toastStore.trigger({
					message: `1+2=${sumTwoNumbers(1, 2)}`
				})
			}}
		/>
	</div>
	<div>
		<span class="h3">Sums 1, 2 and 3 using the common library under libs/lib-two:</span>
		<Button
			text="Sum it!"
			onclick={() => {
				toastStore.trigger({
					message: `1+2+3=${sumThreeNumbers(1, 2, 3)}`
				})
			}}
		/>
	</div>
</div>
