import moment from 'moment/moment'

describe('Verify time difference between the first and last message in a thread', () => {
  before(() => {
    cy.ignoreUncaughtException()
    cy.log(new Date().toLocaleString())
    cy.loginToApplication()
    /* Please disconnect any device if it is asked by webapp and then continue the run from Calls tab!
    If window with disconnect is not appear please continue test run. */
  })

  it('Calculate time difference between the first and last message in a thread', () => {
    cy.get('.SubHeaderItems_root__131Zs > :nth-child(2)').click()
    cy.contains('+33 7 45 43 91 80').click()
    cy.get('.MessageListContentItem_time__1nsrE').then(messages => {
      const firstMessageTime = messages.first().text()
      const lastMessageTime = messages.last().text()
      const firstMoment = moment(firstMessageTime, 'HH:mm')
      const lastMoment = moment(lastMessageTime, 'HH:mm');
      const timeDiffInMinutes = lastMoment.diff(firstMoment, 'minutes')
      console.log('Time difference between the first and last message is ' + timeDiffInMinutes + ' minutes')
      expect(timeDiffInMinutes).to.be.greaterThan(1)
    })
  })
})