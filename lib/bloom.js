const { exec } = require('child_process')
const { bold, green } = require('chalk')
const { readFileSync } = require('fs')
const { promisify } = require('util')
const { parse } = require('ini')
const execute = promisify(exec)

function readFile(path) {
  return readFileSync(path, 'utf8')
}

function getConfiguration() {
  return parse(readFile(`${process.cwd()}/.git/config`))
}

async function invoke(command) {
  console.log(`${green('>')} ${bold(command)}`)
  const { stdout, stderr } = await execute(command)

  if (stdout) { process.stdout.write(stdout) }
  if (stderr) { console.error(stderr) }
}

const gitConfig = getConfiguration()

module.exports = {
  gitConfig,
  execute,
  invoke
}
