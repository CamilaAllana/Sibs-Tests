import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mbway.pt/');
  // Verificar funcionalidade do menu principal
  await page.getByRole('link', { name: 'EMPRESAS' }).click();
  await page.getByRole('link', { name: 'EM LOJA ONLINE' }).click();
  await page.getByRole('link', { name: 'EM MOBILIDADE' }).click();
  await page.getByRole('link', { name: 'REMOTAMENTE' }).click();
  await page.getByRole('link', { name: 'MB WAY MB WAY' }).click();
  await page.locator('#menu-item-808677').click();
  await page.getByRole('link', { name: 'COMEÇAR A USAR' }).click();
  await page.locator('div:nth-child(2) > .vc_column-inner > div:nth-child(2)').click();
  await page.getByRole('link', { name: 'PROMOÇÕES' }).click();

  // Preenchimento de formulário (barra de pesquisa)
  await page.getByRole('searchbox', { name: 'O que procura?' }).click();
  await page.getByRole('searchbox', { name: 'O que procura?' }).fill('mbway pulse');
  await page.getByRole('searchbox', { name: 'O que procura?' }).press('Enter');

  // Funcionalidade de troca de página
  await page.getByRole('link', { name: '2' }).click();
  await page.getByRole('link', { name: '3' }).click();
  await page.getByRole('link', { name: 'Next' }).click();

  // Funcionalidades do rodapé da página
  await page.getByRole('link', { name: 'TERMOS E CONDIÇÕES' }).click();
  await page.getByRole('link', { name: 'MB WAY MB WAY' }).click();

  // Preenchimento de formulário (subscrição na newsletter)
  await page.getByPlaceholder('Inserir e-mail').click();
  await page.getByPlaceholder('Inserir e-mail').fill('username@email.com');
  await page.getByRole('button', { name: 'Submeter' }).click();
  await expect(page.locator('#gform_confirmation_message_5')).toBeVisible();
});