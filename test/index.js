import stopgap from '../src';
import { existsSync } from 'fs';
import { join } from 'path';
import test from 'tape';

const dir = join(__dirname, 'fixtures');

test('exports', t => {
	t.is(typeof stopgap, 'function');
	t.end();
});

test('usage', async t => {
	const x = await stopgap();
	t.is(typeof x, 'object');
	t.is(typeof x.remove, 'function');
	t.is(typeof x.path, 'string');
	t.ok(existsSync(x.path));
	await x.remove();
	t.ok(!existsSync(x.path));
	t.end();
});

test('usage :: dir', async t => {
	const x = await stopgap({ dir });
	t.is(typeof x, 'object');
	t.is(typeof x.remove, 'function');
	t.is(typeof x.path, 'string');
	t.ok(existsSync(x.path));
	t.ok(x.path.includes('fixtures'));
	await x.remove();
	t.ok(!existsSync(x.path));
	t.end();
});

test('usage :: prefix', async t => {
	const x = await stopgap({ prefix: 'test-' });
	t.is(typeof x, 'object');
	t.is(typeof x.remove, 'function');
	t.is(typeof x.path, 'string');
	t.ok(existsSync(x.path));
	t.ok(x.path.includes('test-'));
	await x.remove();
	t.ok(!existsSync(x.path));
	t.end();
});
