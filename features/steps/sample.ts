import { When, Then, Given } from 'cucumber'
import { expect } from 'chai'

Given('a game with frames {string}', function (string) {
  this.frames = string
})

When('the score is calculated', function () {
  // Write code here that turns the phrase above into concrete actions
  this.score = calculeScore(this.frames)
})

Then('the score is {int}', function (int) {
  // Then('the score is {float}', function (float) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.score).to.equal(int)
})

function calculeScore(frames) {
  const numbers = frames.match(/[0-9]/g) || []
  const score = numbers.reduce((acc, curr) => acc + parseInt(curr), 0)
  return score
}
