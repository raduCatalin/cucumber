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

function isSpare(frame) {
  return frame[1] === '/'
}

function isStrike(frame) {
  return frame === 'X'
}

function calculateScoreFromFrame(frame) {
  if (!frame) {
    return [0, 0]
  } else if (isSpare(frame)) {
    return [parseInt(frame[0]), 10 - parseInt(frame[0])]
  } else if (isStrike(frame)) {
    return [10, 0]
  } else {
    const try1 = parseInt(frame[0])
    const try2 = parseInt(frame[1])
    return [isNaN(try1) ? 0 : try1, isNaN(try2) ? 0 : try2]
  }
}

function calculeScore(frames) {
  let score = 0
  const splitedFrames = frames.split(' ')
  splitedFrames.forEach((frame, frameIndex) => {
    const frameScore = calculateScoreFromFrame(frame)
    const nextFrameScore = calculateScoreFromFrame(splitedFrames[frameIndex + 1])
    // console.log('-------------------------------')
    // console.log('frameIndex => ', frameIndex)
    // console.log('score =>', score)
    // console.log('frame => ', frame)
    // console.log('frameScore => ', frameScore)
    // console.log('nextFrameScore =>', nextFrameScore)
    // console.log('frames[frameIndex] =>', splitedFrames[frameIndex + 1])
    if (frameScore[0] + frameScore[1] < 10) {
      score += frameScore[0] + frameScore[1]
    } else if (frameScore[0] === 10) {
      score += frameScore[0] + frameScore[1] + nextFrameScore[0] + nextFrameScore[1]
    } else if (frameScore[0] + frameScore[1] === 10) {
      score += frameScore[0] + frameScore[1] + nextFrameScore[0]
    }
  })
  return score
}
