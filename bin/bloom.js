#!/usr/bin/env node
const { click } = require('@tossdev/click')
const { archeyTask } = require('../dist/archey')
const { emojiTask } = require('../dist/emoji')
const { reposTask } = require('../dist/repos')

click
  .program('bloom')
  .addTask(archeyTask)
  .addTask(emojiTask)
  .addTask(reposTask)
  .execute()
