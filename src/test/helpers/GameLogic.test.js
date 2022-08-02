import { GameValues, calcClickersIncrement, calcBoostersCost, formatNumericValue } from "../../helpers/GameLogic";

describe('Tests on GameLogic helper', () => {

    test('Test calcClickersIncrement() with lower limit 0 value', () => {

        const autoclickers = 0;
        const megaclickers = 0;

        const increment = calcClickersIncrement(autoclickers, megaclickers);
        expect( increment ).toEqual(0);

    })

    test('Test calcClickersIncrement() accomplish given formula', () => {

      const {autoClickerIncrement, megaClickerIncrement} = GameValues;

      const autoclickers = 3;
      const megaclickers = 1;

      const expectedIncrement = (autoclickers * autoClickerIncrement) + (megaclickers * megaClickerIncrement);

      const increment = calcClickersIncrement(autoclickers, megaclickers);
      expect( increment ).toEqual(expectedIncrement);

    })

    test('Test calcBoostersCost() with lower limit 0 value', () => {

      const { autoClickerBaseCost, megaClickerBaseCost } = GameValues;

      const autoclickers = 0;
      const megaclickers = 0;

      const expectedCost = {
        autoClickerCost: autoClickerBaseCost + autoClickerBaseCost * autoclickers,
        megaClickerCost: megaClickerBaseCost + megaClickerBaseCost * megaclickers,
      };

      const cost = calcBoostersCost(autoclickers, megaclickers);
      expect( cost ).toEqual({ autoClickerCost: autoClickerBaseCost, megaClickerCost: megaClickerBaseCost });

    })

  test('Test calcBoostersCost() accomplish given formula', () => {

    const { autoClickerBaseCost, megaClickerBaseCost } = GameValues;

    const autoclickers = 3;
    const megaclickers = 1;

    const expectedCost = {
      autoClickerCost: autoClickerBaseCost + autoClickerBaseCost * autoclickers,
      megaClickerCost: megaClickerBaseCost + megaClickerBaseCost * megaclickers,
    };

    const cost = calcBoostersCost(autoclickers, megaclickers);
    expect( cost ).toEqual(expectedCost);

  })

  test('Test formatNumericValue() accomplish with lower than 1000 presentation without decimals and IS postfix', () => {

    const value = 999;
    const decimals = 2;

    const expectedFormat = "999 Hits";

    const formatedValue = formatNumericValue(value, decimals);
    expect( formatedValue ).toEqual(expectedFormat);

  })

  test('Test formatNumericValue() accomplish with greater than 1000 presentation with decimals and IS postfix', () => {

    const value = 1024;
    const decimals = 2;

    const expectedFormat = "1.02K Hits";

    const formatedValue = formatNumericValue(value, decimals);
    expect( formatedValue ).toEqual(expectedFormat);

  })

})