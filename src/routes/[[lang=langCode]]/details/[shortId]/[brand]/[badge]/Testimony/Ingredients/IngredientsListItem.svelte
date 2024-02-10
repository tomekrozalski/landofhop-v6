<script lang="ts">
	const { last } = $props<{ last: boolean }>();
</script>

<li
	class="list-inside list-disc marker:text-sm after:mr-1 after:content-[',']"
	class:after:content-none={last}
>
	<slot />
</li>
