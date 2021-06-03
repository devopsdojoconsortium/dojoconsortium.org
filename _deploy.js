#!/usr/bin/env node
/* eslint-disable no-console */

const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function patch() {
  console.log('Patch version...')
  const { stdout } = await exec(
    `npm version patch --no-git-tag-version --force`,
  ).catch(e => {
    throw e
  })
  console.log(`Tagging ${stdout.trim()} for deploy`)
  return stdout.trim()
}

const pushNewVersion = async version => {
  console.log('Push version change...')

  const { stdout } = await exec(
    `git add package.json package-lock.json &&
    git commit -m "Deploy version ${version}" &&
    git push origin master`,
  ).catch(e => {
    throw e
  })

  console.log(stdout.trim())
}

const tagVersion = async newVersion => {
  console.log('Tag version change...')

  const { stdout } = await exec(`git tag ${newVersion}`).catch(e => {
    throw e
  })

  console.log(stdout.trim())
}

const pushTag = async () => {
  console.log('Push new tag...')

  const { stdout } = await exec(`git push origin --tags`).catch(e => {
    throw e
  })

  console.log(stdout.trim())
}

const checkoutMaster = async () => {
  console.log('Checkout master...')

  const { stdout } = await exec(`git checkout master`).catch(e => {
    throw e
  })

  console.log(stdout.trim())
}

const run = async () => {
  try {
    await checkoutMaster()
    const newVersion = await patch()
    await pushNewVersion(newVersion)
    await tagVersion(newVersion)
    await pushTag()
  } catch (err) {
    console.log('Something went wrong:')
    console.error(err.message)
    console.error(
      '\nPlease use this format: \nnpm run commit [patch|minor|major] "Commit message"',
    )
  }
}

run()
