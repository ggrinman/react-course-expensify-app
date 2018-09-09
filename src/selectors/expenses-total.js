// Calculate expenses total
export default (expenses) => {

	return expenses.map((expense) => {
		return expense.amount;
	}).reduce((a, b) => {
		return a + b;
	}, 0);

};