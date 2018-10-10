import pink, { calc } from '@/pink';

test('pink is foo', () =>
{
	expect(pink).toBe('foo');
});

test('pink calc', () =>
{
	expect(calc(1)).toBe(2);
	expect(calc(2)).toBe(3);
	expect(calc(1 + 2)).toBe(4);
	expect(calc('1 + a')).toBe(2);
	expect(calc('a')).toBe(NaN);
	expect(calc('#')).toBe(NaN);
});