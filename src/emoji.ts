import { defineTask } from '@statstic/click'

export const emojiTask = defineTask({
  name: 'emoji',
  about: 'Show emoji',
  handler(args, opts) {
    const emojis = require('emojilib')

    if (args[1]) {
      Object.keys(emojis)
        .filter((key) => emojis[key].includes(args[1]))
        .map((key) => console.log(`${key} {${emojis[key].join('|')}}`))
    }
  }
})
