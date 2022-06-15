import { getGitConfig, execute, invoke } from './utils'
import { defineTask, click } from '@statstic/click'

async function resetGitRepos() {
  const config = getGitConfig()
  const trashCommand = 'trash .git'
  const { trash } = await click.prompt([
    { name: 'trash', type: 'confirm', message: trashCommand }
  ])

  if (!trash) { process.exit(0) }

  await execute(trashCommand)
  await execute('git init')

  await invoke(`git config user.name "${config.user.name}"`)
  await invoke(`git config user.email "${config.user.email}"`)
  await invoke(`git remote add origin ${config['remote "origin"'].url}`)
}

export const reposTask = defineTask({
  name: 'repos',
  about: 'Reset repository',
  handler() {
    resetGitRepos().catch(console.error)
  }
})
