import { spawn, ChildProcess } from 'child_process';
import path from 'path';
import fs from 'fs';

const entryFile: string | undefined = process.argv[2];

const getDirectories = (source: string): string[] => {
	return fs.readdirSync(source).filter((name) => {
		return fs.statSync(path.join(source, name)).isDirectory();
	});
};

if (!entryFile) {
	console.error('\nUse: yarn dev <directory_name>');
	console.error('Provide a directory name in ./src/, available directories:\n');
	console.error(getDirectories('./src').join(',\n'));
	console.error('\n');
	process.exit(1);
}

const fullPath: string = path.resolve('./src/' + entryFile);

console.log(fullPath);

const tsNodeDevPath = path.join(__dirname, '../node_modules', '.bin', 'ts-node-dev');

const child: ChildProcess = spawn(
	tsNodeDevPath,
	['--respawn', '--clear', '--transpile-only', '--ignore-watch', 'node_modules', fullPath],
	{ stdio: 'inherit', shell: true }
);

child.on('error', (error: Error) => {
	console.error(`Error al ejecutar el script: ${error.message}`);
	process.exit(1);
});
