///<reference types="cypress" />

/* this block of code im using to avoid "(uncaught exception)Error: ResizeObserver loop limit exceeded" error, which was preventing me from testing.
maybe there is a much better way to do that, but without experience in cypress currently i dont have a better solution */
Cypress.Commands.add("ignoreUncaughtException", () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
    Cypress.on('uncaught:exception', (err) => {
        if (resizeObserverLoopErrRe.test(err.message)) {
            return false
        }
    })
})

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-testid=${selector}]`)
})

Cypress.Commands.add("loginToApplication", () => {
    cy.visit('https://phone.onoff.app/')
    cy.getByData("email").type(Cypress.env('login'))
    cy.getByData("password").type(Cypress.env('password'))
    cy.pause()
})