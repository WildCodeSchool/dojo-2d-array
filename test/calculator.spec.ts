import { calculator } from '../calculator';

describe('2d array', () => {

	it('should calculate ', () => {
		const array = [
			[1, 5, 10, 889, 12, 32, 0, 1, -78],
			[1, 1, 32, 3, 3, 88],
			[1, 1, 78, 3, 45, 88]
		]

		expect(calculator(array)).toEqual('')
	});
})
