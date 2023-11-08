<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements'

	export let text = 'Button'
	export let onclick: MouseEventHandler<HTMLButtonElement>
</script>

<button type="button" class="btn variant-filled-primary" on:click={onclick}>
	{text}
</button>
