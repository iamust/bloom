#!/usr/bin/env node
const { click } = require('@tossdev/click')
const { archeyTask } = require('../dist/archey')
const { emojiTask } = require('../dist/emoji')
const { gitTask } = require('../dist/git')

click
  .program('bloom')
  .addTask(archeyTask)
  .addTask(emojiTask)
  .addTask(gitTask)
  .execute()
