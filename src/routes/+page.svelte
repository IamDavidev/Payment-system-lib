<script type="ts">
	import { getPayments } from '$lib/services/get-payments';

	const payments = getPayments();
</script>

<div class="flex flex-col justify-center items-center gap-8">
	<h1 class="text-7xl font-bold">Payments</h1>
	<div class="flex flex-row gap-4">
		<div>
			<label for="search" class="sr-only">Search</label>
			<input
				type="text"
				placeholder="Search"
				class="p-2 border border-gray-300 rounded text-black"
			/>
		</div>
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			New Payment
		</button>
	</div>
	<section class="flex flex-col gap-8">
		{#each payments as payment}
			<article class="flex flex-row gap-4 border border-white border-radius px-8 py-2 rounded-2xl">
				<h2>{payment.client}</h2>
				<span>
					{payment.amountToPay}{"/"}
					{payment.amountPaid}
				</span>

				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Edit
				</button>
			</article>
		{/each}
	</section>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
