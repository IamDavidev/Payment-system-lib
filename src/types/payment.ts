export interface Payment {
	/**
	 * The ID of the payment.
	 */
	id: string;
	/**
	 * The name of the client.
	 */
	client: string;
	/**
	 * The amount that needs to be paid.
	 */
	amountToPay: number;
	/**
	 * The amount that has been paid.
	 */
	amountPaid: number;
	/**
	 * The date the payment is due.
	 */
	dayToPay: number;
	/**
	 * The date the payment was made.
	 */
	lastPaymentDate: Date;
	/**
	 * The date the payment was made.
	 */
	nextPaymentDate: Date;
}
