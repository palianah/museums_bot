import { test, expect } from '@playwright/test';

const user = "palian928@gmail.com";
const pass = "PalianMusuemsSonntag928";

test.describe('Museums', () => {
    test('Get My Ticket for Museum für Naturkunde', async ({ page }, testInfo) => {
        await page.goto('https://shop.museumssonntag.berlin/#/tickets/time?museum_id=37');

        await page.getByRole('link', { name: 'ANMELDEN' }).click();
    
        await page.click('#emailInput');
        await page.fill('#emailInput', user);
    
        await page.click('#passwordInput');
        await page.fill('#passwordInput', pass);
    
        await page.click('input[type="submit"]');
    
        await expect(page.getByRole('heading', { name: 'Zeitfenster und Tagestickets' })).toBeVisible();

        const nothing = await page.locator('div.ticket-selection td p').textContent();
        if (nothing?.includes('noch keine Tickets')) {
            throw new Error('noch keine Tickets');
        } else {
            console.log('Tickets available, continue');
            expect(true).toBeTruthy();
        }
    });

    test('Get My Ticket for Deutsches Technikmuseum', async ({ page }, testInfo) => {
        await page.goto('https://shop.museumssonntag.berlin/#/tickets/time?museum_id=10');

        await page.getByRole('link', { name: 'ANMELDEN' }).click();
    
        await page.click('#emailInput');
        await page.fill('#emailInput', user);
    
        await page.click('#passwordInput');
        await page.fill('#passwordInput', pass);
    
        await page.click('input[type="submit"]');
    
        await expect(page.getByRole('heading', { name: 'Zeitfenster und Tagestickets' })).toBeVisible();
    
        const nothing = await page.locator('div.ticket-selection td p').textContent();
        if (nothing?.includes('noch keine Tickets')) {
            throw new Error('noch keine Tickets');
        } else {
            console.log('Tickets available, continue');
            expect(true).toBeTruthy();
        }
    });

    test('Get My Ticket for Pergamonmuseum', async ({ page }, testInfo) => {
        await page.goto('https://shop.museumssonntag.berlin/#/tickets/time?museum_id=48');

        await page.getByRole('link', { name: 'ANMELDEN' }).click();
    
        await page.click('#emailInput');
        await page.fill('#emailInput', user);
    
        await page.click('#passwordInput');
        await page.fill('#passwordInput', pass);
    
        await page.click('input[type="submit"]');
    
        await expect(page.getByRole('heading', { name: 'Zeitfenster und Tagestickets' })).toBeVisible();
    
        const nothing = await page.locator('div.ticket-selection td p').textContent();
        if (nothing?.includes('noch keine Tickets')) {
            throw new Error('noch keine Tickets');
        } else {
            console.log('Tickets available, continue');
            expect(true).toBeTruthy();
        }
    });

    test('Get My Ticket for Hamburger Bahnhof', async ({ page }, testInfo) => {
        await page.goto('https://shop.museumssonntag.berlin/#/tickets/time?museum_id=16');

        await page.getByRole('link', { name: 'ANMELDEN' }).click();
    
        await page.click('#emailInput');
        await page.fill('#emailInput', user);
    
        await page.click('#passwordInput');
        await page.fill('#passwordInput', pass);
    
        await page.click('input[type="submit"]');
    
        await expect(page.getByRole('heading', { name: 'Zeitfenster und Tagestickets' })).toBeVisible();
    
        const nothing = await page.locator('div.ticket-selection td p').textContent();
        if (nothing?.includes('noch keine Tickets')) {
            throw new Error('noch keine Tickets');
        } else {
            console.log('Tickets available, continue');
            expect(true).toBeTruthy();
        }
    });

    test('Get My Ticket for ANOHA', async ({ page }, testInfo) => {
        await page.goto('https://shop.museumssonntag.berlin/#/tickets/time?museum_id=57');

        await page.getByRole('link', { name: 'ANMELDEN' }).click();
    
        await page.click('#emailInput');
        await page.fill('#emailInput', user);
    
        await page.click('#passwordInput');
        await page.fill('#passwordInput', pass);
    
        await page.click('input[type="submit"]');
    
        await expect(page.getByRole('heading', { name: 'Zeitfenster und Tagestickets' })).toBeVisible();
    
        const nothing = await page.locator('div.ticket-selection td p').textContent();
        if (nothing?.includes('noch keine Tickets')) {
            throw new Error('noch keine Tickets');
        } else {
            console.log('Tickets available, continue');
            expect(true).toBeTruthy();
        }
    });
});
