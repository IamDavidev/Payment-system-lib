import type { Payment } from '../../types/payment';

const payments: Array<Payment> = [
	{
		id: '001',
		client: 'Juan Pérez',
		amountToPay: 1500,
		amountPaid: 500,
		dayToPay: 15,
		lastPaymentDate: new Date('2023-09-10'),
		nextPaymentDate: new Date('2023-10-15')
	},
	{
		id: '002',
		client: 'Ana López',
		amountToPay: 2000,
		amountPaid: 2000,
		dayToPay: 20,
		lastPaymentDate: new Date('2023-09-20'),
		nextPaymentDate: new Date('2023-10-20')
	},
	{
		id: '003',
		client: 'Carlos Sánchez',
		amountToPay: 500,
		amountPaid: 300,
		dayToPay: 10,
		lastPaymentDate: new Date('2023-09-05'),
		nextPaymentDate: new Date('2023-10-10')
	}
];

export function getPayments() {
	return payments;
}
