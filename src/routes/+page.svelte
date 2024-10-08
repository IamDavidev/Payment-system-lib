<script lang="ts">
	import { getPayments } from '$lib/services/get-payments';

	const payments = getPayments();

	function pay(id: string) {
		console.log('Before payments', payments);
		const payment = payments.find((payment) => payment.id === id);
		if (payment) {
			payment.amountPaid += payment.amountToPay;
			payment.amountToPay = 0;
			payment.nextPaymentDate = new Date(
				new Date(payment.nextPaymentDate).setMonth(new Date(payment.nextPaymentDate).getMonth() + 1)
			);
		}
		console.log('After payments', payments);
	}

	function parsePaymentDate(date: Date) {
		return new Date(date).toLocaleDateString();
	}
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
			<article
				class="flex flex-row gap-4 border border-white border-radius px-8 py-2 rounded-2xl items-center"
			>
				<h2>{payment.client}</h2>
				<span>
					{payment.amountToPay}{'/'}
					{payment.amountPaid}
				</span>
				<span>
					{parsePaymentDate(payment.nextPaymentDate)}
				</span>
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					on:click={() => pay(payment.id)}
				>
					Pay
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
