describe('template spec', () => {
  before(() => {
    /* this block of code im using to avoid "(uncaught exception)Error: ResizeObserver loop limit exceeded" error
    maybe there is a much better way to do that, but without experience in cypress currently i dont have a better solution */
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
    Cypress.on('uncaught:exception', (err) => {
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false
      }
    })

    cy.log(new Date().toLocaleString())

    // cy.loginToApplication('test.aut.onoffapp@gmail.com', 'testOnOff@')
    cy.loginToApplication()
    // Please disconnect any device if it is asked by webapp and then continue the run!
    // If window with disconnect is not appear please continue test run.

    /* As given in test-assignment precoditions 
     "ignore the Captcha, just got through it manually in Cypress Runner
     go to the Messages tab". */

    // cy.visit('https://www.boredapi.com/api/activity')
  })

  it('Verify the empty messages notification text', () => {
    // cy.intercept('GET', 'https://phone.onoff.app/messages').as('messages')

    // cy.intercept('GET', '**/retrieve-thread/*', [])
    // cy.intercept('GET', '**/messages', [])

    // cy.intercept('GET', '**/messages', { fixture: 'emptyList.json' })
    // cy.intercept('GET', '**/retrieve-thread/*', {}).as('zzz') 
    // cy.intercept('GET', '/messages').as('get')

    // cy.intercept('POST', '**/envelope*', (req) => {
    //   req.reply((res) => {
    //     res.send({});
    //   })
    // }).as('post')

    // cy.get('.SubHeaderItems_root__131Zs > :nth-child(2)').click()
    // cy.wait('@post').then(intercept => {
    //   cy.log(intercept.response.body)
    // })

    // cy.get('.SubHeaderItems_root__131Zs > :nth-child(2)').click()


    cy.intercept('GET', '/mobile/v4/retrieve-threads?&limit=50', []).as('get')
    cy.visit('https://phone.onoff.app/messages')
    // cy.get('.SubHeaderItems_root__131Zs > :nth-child(2)').click()
    cy.wait('@get')
    // cy.get('[data-testid="page-empty-state-title"]')
    // cy.get('[data-testid="page-empty-state-description"]')
    cy.getByData('page-empty-state-title').contains('It’s so empty here...').should('be.visible')
    cy.getByData('page-empty-state-description').contains('Why not try texting someone?').should('be.visible')



    // cy.intercept('GET', 'https://www.boredapi.com/api/activity').as('getActivity')
    // cy.visit('https://www.boredapi.com/')
    // cy.wait('@getActivity').then(interception => {
    //   console.log(interception.response.body)
    // })
  })
})

// https://production-server.onoffapp.net/mobile/v4/retrieve-threads?&limit=50
// [{"id":"1681838802604-0242ce98db6f-0001o","threadId":"1681724303901-0242b6db6470-0001","creatorId":"1681724303901-0242b6db6470-00010","sourceCategoryId":"1681723908403-02420ccd213f-0001","sourcePhoneNumber":"33644661836","targetPhoneNumber":"33745439180","body":"test 07","createdAt":"2023-04-18T17:26:42+0000","type":"TEXT","incoming":false,"sms":false,"mms":false,"unreadMessages":0},{"id":"1681806534453-0242d2879eba-0001i","threadId":"1681806534512-0242ce98db6f-0001","creatorId":"1681806534512-0242ce98db6f-00011","sourcePhoneNumber":"33779487062","targetCategoryId":"1681723908403-02420ccd213f-0001","targetPhoneNumber":"33644661836","body":"ACTUALISATION 2023\r\n\r\nMme Castex,\r\n\r\nATTENTION: C'est bientôt la fin des formations 100% financées par l'Etat.\r\n\r\nConvertissez vos droits et bénéficiez d’une formation intégralement prise en charge avant l’entrée en vigueur d’un reste à payer.\r\n\r\nhttps://smms.vc/xF3ZD\r\n\r\nINFO SÉCURITÉ : Vous n’avez pas besoin de saisir vos coordonnées personnelles\r\n\r\nRéférence dossier : 5UPGZ","createdAt":"2023-04-18T08:28:54+0000","seenAt":"2023-04-18T08:28:54+0000","type":"TEXT","incoming":true,"sms":false,"mms":true,"unreadMessages":0}]

// Request URL: https://production-server.onoffapp.net/mobile/v4/retrieve-threads?&limit=50
// Request Method: GET

// https://o351198.ingest.sentry.io/api/5414484/envelope/?sentry_key=3832ea9ee33a4f19a9fbdf841f44c722&sentry_version=7&sentry_client=sentry.javascript.react%2F7.43.0
// Request Method: POST