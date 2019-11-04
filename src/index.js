import { tmpdir } from 'os';
import { promises } from 'fs';
import { join, dirname } from 'path';
import del from 'eliminate';

export default async function ({ dir = tmpdir(), prefix = 'sg-' } = {}) {
	await promises.mkdir(dir, { recursive: true });
	const path = await promises.mkdtemp(join(dir, prefix));
	const remove = () => del(path);
	return { remove, path };
}
