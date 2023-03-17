#!/usr/bin/env node
import { program } from 'commander';
import { Package } from '@lough/npm-operate';

function start() {
  const npm = new Package()
  program.version(npm.readConfig().version);
  program.parseAsync(process.argv);
}

start();

