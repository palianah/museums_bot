import { test, expect } from "@playwright/test";

const user = "palian928@gmail.com";
const pass = "PalianMusuemsSonntag928";

const museumsList = [
	{
		id: "57",
		name: "ANOHA",
	},
	{
		id: "37",
		name: "Museum für Naturkunde",
	},
	,
	{
		id: "16",
		name: "Hamburger Bahnhof",
	},
	{
		id: "10",
		name: "Deutsches Technikmuseum",
	},
	// {
	// 	id: "48",
	// 	name: "Pergamonmuseum",
	// },
];

const museumToTicketSelection = async (page, museumsId: string) => {
	await page.locator('select[name="museum"]').selectOption([museumsId]);
	await page.click('button[translate="ticket.filters.select"]');
	// reset
	// await page.click('button[translate="ticket.breadcrumbs.filters.reset"]');
	await page.locator("time-slot-selection").first().click();
	await page.locator("select").selectOption(["number:2"]);
	await page.click('button[translate="common.actions.cart"]');
};

test.describe("Museums", () => {
	museumsList.forEach((museum) => {
		test(`Ticket for ${museum.name} - ${museum.id}`, async ({ page }) => {
			const museumId = museum.id;
			await page.goto(
				`https://shop.museumssonntag.berlin/#/tickets/time?museum_id=${museumId}`
			);

			await page.getByRole("link", { name: "ANMELDEN" }).click();

			await page.click("#emailInput");
			await page.fill("#emailInput", user);

			await page.click("#passwordInput");
			await page.fill("#passwordInput", pass);

			await page.click('input[type="submit"]');

			await expect(
				page.getByRole("heading", {
					name: "Willkommen! Bitte wählen Sie ein Museum aus.",
				})
			).toBeVisible();

			// step add to cart
			await museumToTicketSelection(page, museumId);

			// select one more time 2 tickets
			await page.click(
				'button[translate="cart.detail.actions.continue"]'
			);

			// step add to cart 2
			await museumToTicketSelection(page, museumId);

			// buy ticket finally
			await page.click(
				'button[translate="cart.detail.actions.checkout"]'
			);

			// booked page
			await expect(
				page.getByRole("heading", { name: "Buchung abgeschlossen" })
			).toBeVisible();
		});
	});
});
