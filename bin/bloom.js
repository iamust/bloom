#!/usr/bin/env node
const inquirer = require('inquirer')
const bloom = require('../lib/bloom')

async function program() {
  const config = bloom.gitConfig
  const trashCommand = 'trash .git'
  const { trash } = await inquirer.prompt([
    { name: 'trash', type: 'confirm', message: trashCommand }
  ])

  if (!trash) { process.exit(0) }

  await bloom.execute(trashCommand)
  await bloom.execute('git init')

  await bloom.invoke(`git config user.name "${config.user.name}"`)
  await bloom.invoke(`git config user.email "${config.user.email}"`)
  await bloom.invoke(`git remote add origin ${config['remote "origin"'].url}`)
}

program().catch(console.error)
